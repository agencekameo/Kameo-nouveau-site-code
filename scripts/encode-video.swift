#!/usr/bin/env swift
/*
 * Encodage vidéo H.264 (.mp4) d'une suite d'images JPEG ou PNG, avec AVFoundation (pas besoin de ffmpeg).
 * Utilisé par scripts/record-realisations.mjs pour les vidéos téléphone de la section « Nos réalisations ».
 * - La liste donne une image par ligne, pour chaque image de la vidéo : une image répétée sur plusieurs lignes
 *   reste à l'écran plus longtemps (cadence constante, chaque image dure exactement 1/images-par-seconde).
 * - H.264 profil High, 4:2:0 8 bits, couleurs sRGB, sans piste son, en-tête (moov) en début de fichier pour que
 *   la lecture démarre sans attendre la fin du téléchargement : lisible par Safari iOS et Chrome Android.
 * - Encodeur matériel du Mac (VideoToolbox), à débit moyen visé.
 *
 * Usage : swift scripts/encode-video.swift <liste.txt> <sortie.mp4> <débit en bit/s> [images/s = 30] [image clé toutes les N images = 90]
 * (record-realisations.mjs le compile d'abord avec swiftc -O, plus rapide à l'usage)
 */
import AVFoundation
import CoreVideo
import Foundation
import ImageIO

func fail(_ message: String) -> Never {
  FileHandle.standardError.write("encode-video : \(message)\n".data(using: .utf8)!)
  exit(1)
}

let args = CommandLine.arguments
guard args.count >= 4, let bitrate = Int(args[3]) else {
  fail("usage : swift scripts/encode-video.swift <liste.txt> <sortie.mp4> <débit en bit/s> [images/s] [intervalle images clés]")
}
let fps = Int32(args.count > 4 ? args[4] : "30") ?? 30
let keyInterval = Int(args.count > 5 ? args[5] : "90") ?? 90
guard let list = try? String(contentsOfFile: args[1], encoding: .utf8) else { fail("liste illisible : \(args[1])") }
let frames = list.split(whereSeparator: \.isNewline).map(String.init).filter { !$0.isEmpty }
guard !frames.isEmpty else { fail("liste vide") }

func loadImage(_ path: String) -> CGImage {
  guard let source = CGImageSourceCreateWithURL(URL(fileURLWithPath: path) as CFURL, nil),
    let image = CGImageSourceCreateImageAtIndex(source, 0, [kCGImageSourceShouldCacheImmediately: true] as CFDictionary)
  else { fail("image illisible : \(path)") }
  return image
}

let first = loadImage(frames[0])
let width = first.width, height = first.height
guard width % 2 == 0, height % 2 == 0 else { fail("dimensions impaires (\(width) × \(height)) : 4:2:0 impossible") }

let output = URL(fileURLWithPath: args[2])
try? FileManager.default.removeItem(at: output)
let writer: AVAssetWriter
do { writer = try AVAssetWriter(outputURL: output, fileType: .mp4) } catch { fail("écriture impossible : \(error)") }
writer.shouldOptimizeForNetworkUse = true  // moov avant les données : lecture progressive

// Couleurs : primaires et matrice BT.709, fonction de transfert sRGB, celle des captures d'écran. Marquée BT.709,
// la vidéo serait éclaircie d'environ 10/255 dans les tons moyens par Safari (iOS, macOS) et ne correspondrait plus
// à la page ni à l'affiche ; Chrome rend les deux marquages à l'identique.
let transfer: String
if #available(macOS 15.0, *) { transfer = AVVideoTransferFunction_IEC_sRGB } else { transfer = AVVideoTransferFunction_ITU_R_709_2 }
let settings: [String: Any] = [
  AVVideoCodecKey: AVVideoCodecType.h264,
  AVVideoWidthKey: width,
  AVVideoHeightKey: height,
  AVVideoColorPropertiesKey: [
    AVVideoColorPrimariesKey: AVVideoColorPrimaries_ITU_R_709_2,
    AVVideoTransferFunctionKey: transfer,
    AVVideoYCbCrMatrixKey: AVVideoYCbCrMatrix_ITU_R_709_2,
  ],
  AVVideoCompressionPropertiesKey: [
    AVVideoAverageBitRateKey: bitrate,
    AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
    AVVideoH264EntropyModeKey: AVVideoH264EntropyModeCABAC,
    AVVideoMaxKeyFrameIntervalKey: keyInterval,
    AVVideoAllowFrameReorderingKey: false,  // pas d'images B : même qualité ici, horodatage plus simple pour les mobiles
    AVVideoExpectedSourceFrameRateKey: Int(fps),
  ],
]
let input = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
input.expectsMediaDataInRealTime = false
let adaptor = AVAssetWriterInputPixelBufferAdaptor(
  assetWriterInput: input,
  sourcePixelBufferAttributes: [
    kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
    kCVPixelBufferWidthKey as String: width,
    kCVPixelBufferHeightKey as String: height,
    kCVPixelBufferCGBitmapContextCompatibilityKey as String: true,
  ])
guard writer.canAdd(input) else { fail("réglages vidéo refusés") }
writer.add(input)
guard writer.startWriting() else { fail("démarrage impossible : \(String(describing: writer.error))") }
writer.startSession(atSourceTime: .zero)

// Image → tampon BGRA, dessiné dans l'espace colorimétrique de l'image (aucune conversion de couleurs)
func pixelBuffer(_ image: CGImage) -> CVPixelBuffer {
  guard image.width == width, image.height == height else { fail("toutes les images doivent faire \(width) × \(height)") }
  var buffer: CVPixelBuffer?
  guard let pool = adaptor.pixelBufferPool, CVPixelBufferPoolCreatePixelBuffer(nil, pool, &buffer) == kCVReturnSuccess,
    let pb = buffer
  else { fail("tampon vidéo indisponible") }
  CVPixelBufferLockBaseAddress(pb, [])
  defer { CVPixelBufferUnlockBaseAddress(pb, []) }
  guard
    let context = CGContext(
      data: CVPixelBufferGetBaseAddress(pb), width: width, height: height, bitsPerComponent: 8,
      bytesPerRow: CVPixelBufferGetBytesPerRow(pb),
      space: image.colorSpace ?? CGColorSpace(name: CGColorSpace.sRGB)!,
      bitmapInfo: CGImageAlphaInfo.noneSkipFirst.rawValue | CGBitmapInfo.byteOrder32Little.rawValue)
  else { fail("contexte de dessin impossible") }
  context.draw(image, in: CGRect(x: 0, y: 0, width: width, height: height))
  return pb
}

var lastPath = ""
var current: CVPixelBuffer?
for (index, path) in frames.enumerated() {
  if path != lastPath {
    current = pixelBuffer(index == 0 ? first : loadImage(path))
    lastPath = path
  }
  while !input.isReadyForMoreMediaData { Thread.sleep(forTimeInterval: 0.002) }
  guard adaptor.append(current!, withPresentationTime: CMTime(value: Int64(index), timescale: fps)) else {
    fail("image \(index) refusée : \(String(describing: writer.error))")
  }
}
input.markAsFinished()
writer.endSession(atSourceTime: CMTime(value: Int64(frames.count), timescale: fps))
let done = DispatchSemaphore(value: 0)
writer.finishWriting { done.signal() }
done.wait()
guard writer.status == .completed else { fail("encodage échoué : \(String(describing: writer.error))") }
let size = (try? FileManager.default.attributesOfItem(atPath: output.path)[.size] as? Int) ?? 0
print("\(frames.count) images, \(width) × \(height), \(fps) images/s, \(size) octets")
