"""Différence pixel entre deux captures. Usage: python3 -I imgdiff.py a.png b.png diff.png"""
import sys
from PIL import Image, ImageChops
import numpy as np
a = Image.open(sys.argv[1]).convert('RGB')
b = Image.open(sys.argv[2]).convert('RGB')
w, h = max(a.width, b.width), max(a.height, b.height)
A = Image.new('RGB', (w, h), (255, 0, 255)); A.paste(a, (0, 0))
B = Image.new('RGB', (w, h), (255, 0, 255)); B.paste(b, (0, 0))
d = np.asarray(ImageChops.difference(A, B)).sum(axis=2)
mask = d > 30
ratio = mask.mean()
rows = np.where(mask.any(axis=1))[0]
first = int(rows[0]) if len(rows) else -1
out = np.asarray(B).copy()
out[mask] = [255, 0, 0]
Image.fromarray(out).save(sys.argv[3])
print(f"{ratio*100:.3f}% px differ; size ref={a.size} next={b.size}; first diff row={first}")
