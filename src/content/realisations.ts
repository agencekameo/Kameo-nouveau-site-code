/**
 * Études de cas du portfolio — données reprises du thème WordPress
 * (kameo_create_realisation_posts, functions.php section 11), avec les dimensions
 * réelles des images pour réserver l'espace à l'affichage.
 */
export type Img = { src: string; width: number; height: number };
export type Section = { title: string; body: string; img1: Img | null; img2: Img | null };
export type Realisation = {
  slug: string;
  title: string;
  order: number;
  description: string;
  siteUrl: string;
  client: string;
  service: string;
  duree: string;
  hero: Img | null;
  sections: Section[];
  solo: Img | null;
  quote: string;
  quoteAuthor: string;
  fullImg: Img | null;
};

export const REALISATIONS: Realisation[] = [
  {
    slug: 'dronespec',
    title: 'DroneSpec',
    order: 1,
    description:
      'La donnée aérienne de précision. Relevés topographiques, inspections techniques et modélisation 3D par drone, pour les collectivités et les professionnels du BTP.',
    siteUrl: 'https://dronespec.fr/',
    client: 'DroneSpec',
    service: 'Direction Artistique, Site Web',
    duree: '3 semaines',
    hero: {
      src: '/images/projects/dronespec/hero.webp',
      width: 1024,
      height: 768,
    },
    sections: [
      {
        title: 'Positionner un ingénieur de la donnée, pas un prestataire drone',
        body: "DroneSpec est fondée par Nicolas Brière, ingénieur et chef de projet IT avec 20 ans d'expérience. Son positionnement tranche clairement avec les prestataires généralistes : DroneSpec ne se définit pas comme une agence de prises de vues aériennes, mais comme un cabinet d'ingénierie de la donnée dans l'espace. L'essentiel du travail réside dans le traitement de la donnée brute, relevés RTK, orthophotographies, nuages de points, pour produire des livrables directement exploitables par les géomètres, maîtres d'ouvrage et gestionnaires de collectivités. Notre enjeu : faire passer ce positionnement en quelques secondes à l'écran.",
        img1: {
          src: '/images/projects/dronespec/screen01.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/dronespec/mobile01.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Quatre domaines, un discours ciblé par interlocuteur métier',
        body: "Le site structure quatre périmètres d'intervention : photogrammétrie & cartographie (orthophoto, plan de masse, livrables DXF / TIFF / SHP), inspection technique (toitures, façades, charpentes, ouvrages d'art), modélisation 3D et gestion funéraire via la solution CIMETI-R. Pour chaque service, nous avons construit un argumentaire adapté à l'interlocuteur cible, agent territorial, responsable BTP, bureau d'études, avec les blocs de réassurance indispensables : drone DJI Matrice Enterprise RTK, télépilote certifié DGAC/EASA, précision centimétrique, conformité RGPD, RC Pro spécifique drone en zone urbaine.",
        img1: {
          src: '/images/projects/dronespec/screen02.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/dronespec/mobile02.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'CIMETI-R : une page dédiée pour une offre exclusive aux collectivités',
        body: 'CIMETI-R est la solution propriétaire de DroneSpec destinée aux communes : cartographie géoréférencée haute définition de cimetières municipaux, conformité aux obligations CGCT et indexation numérique des concessions funéraires. Un marché de niche, mais à fort enjeu réglementaire : chaque commune est une cible potentielle. Nous avons conçu une landing dédiée qui articule les obligations légales, les livrables concrets (orthophotographies HD, modèles 3D, base de données concessions) et les réponses aux objections spécifiques des agents territoriaux.',
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/dronespec/screen03.webp',
      width: 1600,
      height: 1066,
    },
    quote:
      '"Kameo a su s\'approprier notre univers technique avec une vraie rigueur. Le résultat est un site qui parle directement à nos clients, collectivités et maîtres d\'ouvrage, avec le bon niveau de précision et de crédibilité."',
    quoteAuthor: 'Nicolas Brière, Fondateur de DroneSpec',
    fullImg: {
      src: '/images/projects/dronespec/mobile03.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'defikart',
    title: 'Défikart',
    order: 2,
    description:
      'Le plus grand karting indoor de Toulouse. Piste de 400 mètres, paintball, anniversaires et team-building, pour particuliers, familles et entreprises.',
    siteUrl: 'https://defikart.fr/',
    client: 'Défikart Toulouse',
    service: 'Direction Artistique, Site Web',
    duree: '4 semaines',
    hero: {
      src: '/images/projects/defikart/screen01.webp',
      width: 1600,
      height: 1066,
    },
    sections: [
      {
        title: "Faire ressentir l'adrénaline dès la première seconde",
        body: "Défikart, c'est plus de 20 ans d'existence, 4 000 m² d'infrastructure et une piste indoor de 400 mètres, la plus grande de Toulouse. Le site devait traduire cette échelle et cette énergie à l'écran. Nous avons construit une page d'accueil immersive qui plonge le visiteur dans l'univers du karting dès les premiers pixels : hero vidéo, palette punchy noir-jaune-rouge, typographie racing. L'objectif : que le visiteur ait envie de réserver sa session avant même d'avoir scrollé.",
        img1: {
          src: '/images/projects/defikart/screen01.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/defikart/mobile01.webp',
          width: 900,
          height: 600,
        },
      },
      {
        title: 'Trois cibles, trois parcours de conversion distincts',
        body: "Défikart s'adresse à trois publics aux attentes très différentes : les particuliers en quête d'une activité fun (session à l'unité, formules promotionnelles), les organisateurs d'anniversaires (enfants dès 7 ans, ados, adultes) et les entreprises pour le team-building et les événements corporate. Chaque cible a droit à sa page dédiée avec son propre argumentaire, ses tarifs adaptés et son formulaire de contact spécifique. Nous avons pensé chaque parcours pour minimiser les frictions et amener le visiteur au clic de réservation en 3 écrans maximum.",
        img1: {
          src: '/images/projects/defikart/screen02.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/defikart/mobile02.webp',
          width: 900,
          height: 600,
        },
      },
      {
        title: 'Une page contact qui convertit, pas juste un formulaire',
        body: "La majorité des concurrents renvoient vers un formulaire sec avec 8 champs. Nous avons pris le contre-pied : sur la page contact de Défikart, le visiteur trouve d'abord l'essentiel, adresse, horaires, plan Google Maps, numéro de téléphone cliquable, avant même le formulaire. L'idée : lever tous les freins pour qu'un appel ou une visite se déclenche, même quand le client hésite à taper 8 lignes sur son mobile. Résultat : une expérience mobile fluide qui pousse à l'action, sans passer par la case remplissage laborieuse.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/defikart/screen03.webp',
      width: 1600,
      height: 1066,
    },
    quote:
      "\"Kameo a compris qu'un site pour Défikart, ce n'est pas juste montrer des photos de karts, c'est faire ressentir la vitesse et faciliter la réservation au maximum. Le nouveau site convertit visiblement mieux que l'ancien.\"",
    quoteAuthor: 'Direction Défikart Toulouse',
    fullImg: {
      src: '/images/projects/defikart/mobile03.webp',
      width: 900,
      height: 600,
    },
  },
  {
    slug: 'les-cars-du-plateau',
    title: 'Les Cars du Plateau',
    order: 3,
    description:
      "20 ans d'expertise transport collectif en Auvergne-Rhône-Alpes, une présence digitale à la hauteur de leur fiabilité terrain.",
    siteUrl: 'https://cdp69.com/',
    client: 'Les Cars du Plateau (CDP69)',
    service: 'Direction Artistique, Site Web',
    duree: '3 semaines',
    hero: {
      src: '/images/projects/Les%20cars%20du%20plateau/hero-bg.webp',
      width: 1535,
      height: 829,
    },
    sections: [
      {
        title: "Donner une vitrine digitale à 20 ans d'expertise terrain",
        body: "CDP69, Les Cars du Plateau, est une entreprise familiale spécialisée dans le transport collectif en région Auvergne-Rhône-Alpes depuis plus de 20 ans. Face à des groupes nationaux imposants, leur force réside dans leur double implantation stratégique (Vaulx-en-Velin et Plateau d'Hauteville), leur flotte Euro 6 renouvelée et la relation directe qu'ils entretiennent avec chaque client. Notre enjeu : construire un site qui reflète cette proximité et cette fiabilité terrain, tout en crédibilisant CDP69 face à des concurrents disposant de budgets marketing sans commune mesure.",
        img1: {
          src: '/images/projects/Les%20cars%20du%20plateau/screen01%20%281%29.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/Les%20cars%20du%20plateau/mobilescreen01.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une architecture pensée pour trois segments clientèle distincts',
        body: "Le site structure les offres de CDP69 autour de trois axes métiers : transport scolaire (agrément officiel, conducteurs titulaires permis D et FIMO), transport événementiel et professionnel, et transferts aéroport Lyon Saint-Exupéry. Pour chaque segment, nous avons construit un argumentaire ciblé avec les éléments de réassurance décisifs, flotte 16 à 70 places, licence de transport de voyageurs, maintenance préventive rigoureuse, conformité Euro 6, pour convertir aussi bien un directeur d'école qu'un responsable logistique d'entreprise.",
        img1: {
          src: '/images/projects/Les%20cars%20du%20plateau/screen02%20%281%29.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/Les%20cars%20du%20plateau/fiche%20gmb%2001.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Deux dépôts, une réactivité maximale sur toute la région',
        body: "L'un des atouts différenciants de CDP69 est sa double implantation géographique : Vaulx-en-Velin aux portes de Lyon pour les accès métropole, A6/A7/A40 et aéroport, et le Plateau d'Hauteville dans l'Ain pour couvrir l'est de la région. Cette organisation unique optimise les trajets à vide, permet des tarifs plus compétitifs et assure une intervention rapide partout en Auvergne-Rhône-Alpes. Nous avons placé cette géographie stratégique comme axe de différenciation central dans le discours du site, un avantage concret là où les grands groupes nationaux ne peuvent pas suivre.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/Les%20cars%20du%20plateau/screen03%20%281%29.webp',
      width: 1600,
      height: 1066,
    },
    quote:
      '"Kameo a parfaitement cerné notre positionnement de proximité. Le site reflète enfin notre sérieux et notre façon de travailler, nos clients nous le disent dès le premier contact."',
    quoteAuthor: 'Direction CDP69, Les Cars du Plateau',
    fullImg: null,
  },
  {
    slug: 'le-101',
    title: 'Le 101',
    order: 4,
    description:
      "Du concept à l'assiette : nous avons orchestré le lancement complet du complexe du 101, de son identité visuelle à son site web, en passant par une stratégie d'influence et de relations presse sur-mesure.",
    siteUrl: 'https://www.complexe101.fr/',
    client: 'Le 101',
    service: 'Direction Artistique, Site Web, Réseaux Sociaux, Fiche Google My Business, Publicité, RP',
    duree: '3 mois',
    hero: {
      src: '/images/projects/le-101/asset%201.webp',
      width: 1600,
      height: 1066,
    },
    sections: [
      {
        title: "De l'assiette au pixel : une identité qui donne faim",
        body: "Nous avons conçu l'identité visuelle complète du complexe, en créant un univers graphique cohérent et mémorable qui reflète l'essence de sa cuisine et de son ambiance. Cette direction artistique a ensuite été déclinée sur un site web élégant et intuitif, pensé pour séduire les visiteurs et faciliter la réservation, offrant ainsi une vitrine à la hauteur de l'expérience culinaire proposée.",
        img1: {
          src: '/images/projects/le-101/mockup1.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/le-101/mockup2.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: "Scroll, like, réserve : quand le digital ouvre l'appétit",
        body: "Nous avons structuré et animé la présence digitale du restaurant sur les réseaux sociaux, en développant une stratégie de contenu engageante qui met en valeur les plats, l'ambiance et les coulisses de l'établissement. Parallèlement, nous avons optimisé sa fiche Google My Business pour maximiser sa visibilité locale, faciliter les avis clients et transformer chaque recherche en opportunité de réservation.",
        img1: {
          src: '/images/projects/le-101/mockup3.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/le-101/mockup4.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Le bouche-à-oreille version 2.0 : influence et médias sur le grill',
        body: "Dès l'ouverture, nous avons orchestré une campagne de relations presse ciblée pour créer le buzz autour du restaurant et assurer sa présence dans les médias. En parallèle, nous avons activé une stratégie d'influence en collaborant avec des créateurs de contenu et des prescripteurs locaux, générant ainsi une notoriété immédiate et des retombées authentiques auprès d'une audience qualifiée.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/le-101/mockup5.webp',
      width: 1066,
      height: 1600,
    },
    quote: '"Bravo pour votre professionnalisme"',
    quoteAuthor: 'Jean-François Fernandez, Fondateur & Gérant',
    fullImg: {
      src: '/images/projects/le-101/mockup6.webp',
      width: 1600,
      height: 1147,
    },
  },
  {
    slug: 'medical-market',
    title: 'Medical Market',
    order: 5,
    description:
      "Medical Market, une plateforme e-commerce complète au service de la santé : catalogue produit, expérience d'achat optimisée et stratégie digitale multi-canal pour maximiser la visibilité et les ventes en ligne.",
    siteUrl: 'https://medical-market.fr/',
    client: 'Medical Market',
    service: 'Site Web, RS, GMB, Shooting, Pub',
    duree: '1 an',
    hero: {
      src: '/images/projects/medical-market/asset%202.webp',
      width: 1066,
      height: 1600,
    },
    sections: [
      {
        title: "Un site e-commerce robuste pensé pour l'expérience utilisateur",
        body: "Nous avons développé pour Medical Market une boutique en ligne performante et intuitive, capable de gérer un large catalogue de produits médicaux avec une navigation fluide et intuitive. On a intégré des fonctionnalités avancées (gestion des stocks, fiches produits, tunnel de réservation) tout en garantissant une expérience d'achat rassurante et adaptée aux besoins spécifiques des professionnels et particuliers de la santé.",
        img1: {
          src: '/images/projects/medical-market/mockup1.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/medical-market/mockup2.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une présence digitale multi-canal orchestrée pour maximiser la visibilité',
        body: "Nous avons orchestré l'ensemble des canaux digitaux de la marque : animation quotidienne des réseaux sociaux, optimisation des fiches produit et du référencement la performance, et campagnes publicitaires ciblées pour attirer une audience qualifiée. Grâce aux outils 360°, Medical Market a acquis une visibilité constante et une acquisition client optimisée sur tous les canaux.",
        img1: {
          src: '/images/projects/medical-market/mockup3.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/medical-market/mockup4.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Des shootings photo professionnels pour valoriser chaque produit',
        body: "Nous réalisons régulièrement des séances photo sur mesure pour mettre en valeur les produits dans leurs contextes d'usage réels. Chaque visuel est pensé pour renforcer la crédibilité de la marque et faciliter la décision d'achat en offrant une vision claire et professionnelle de chaque article.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/medical-market/mockup5.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/medical-market/mockup6.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'claimz',
    title: 'Claimz',
    order: 6,
    description: "Claimz, l'identité d'une expertise droite en gestion de sinistres.",
    siteUrl: 'https://claimz.fr/',
    client: 'Claimz',
    service: 'DA, Site Web, RS, RP',
    duree: 'Depuis 2 ans',
    hero: {
      src: '/images/projects/claimz/asset%203.webp',
      width: 1600,
      height: 1066,
    },
    sections: [
      {
        title: 'Une direction artistique professionnelle qui inspire confiance',
        body: "Nous avons conçu l'identité visuelle complète de Claimz, en développant un univers graphique cohérent qui reflète le positionnement et les valeurs de la marque pour inspirer confiance auprès de sa cible de professionnels de l'assurance et de courtiers. Cette direction artistique a ensuite été déclinée sur l'ensemble des supports de communication pour assurer une cohérence visuelle parfaite sur chaque point de contact.",
        img1: {
          src: '/images/projects/claimz/mockup1.webp',
          width: 1600,
          height: 1471,
        },
        img2: {
          src: '/images/projects/claimz/mockup2.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Un site web clair qui convertit les professionnels en clients',
        body: 'Nous avons créé le site web de Claimz en mettant en avant la clarté des services proposés et la crédibilité de la marque auprès des professionnels. Chaque section a été pensée pour guider le visiteur vers la prise de contact grâce à une navigation intuitive et des call-to-action stratégiquement placés.',
        img1: {
          src: '/images/projects/claimz/mockup3.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/claimz/mocku4.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une stratégie digitale complète pour asseoir la notoriété sur le marché',
        body: "Nous accompagnons Claimz sur l'ensemble de ses leviers digitaux pour maximiser sa visibilité auprès des bons profils de sinistres. Grâce à une animation régulière des réseaux sociaux et des actions de relations presse ciblées pour développer leur notoriété, et des campagnes publicitaires précises pour développer la génération de leads qualifiés.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/claimz/mockup5.webp',
      width: 1600,
      height: 1066,
    },
    quote: '"Équipe sérieuse et disponible, je recommande vivement ! Besoin d\'un visuel magnifique ? Merci à vous !"',
    quoteAuthor: 'Marcel Morris, Co-Fondateur & Gérant',
    fullImg: {
      src: '/images/projects/claimz/mockup6.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'be-cherry',
    title: 'Be Cherry',
    order: 7,
    description: 'Be Cherry Cosmetics, un e-commerce performant porté par une stratégie publicitaire créative.',
    siteUrl: 'http://becherrycosmetics.com/',
    client: 'Be Cherry',
    service: 'Site web, Publicité',
    duree: 'Depuis 3 ans',
    hero: {
      src: '/images/projects/be-cherry/asset%204.webp',
      width: 1600,
      height: 974,
    },
    sections: [
      {
        title: 'Une plateforme e-commerce optimisée pour la conversion',
        body: "Nous avons développé et mis en place un e-commerce qui optimise l'expérience d'achat et maximise le taux de conversion. Grâce à une interface soignée et des fiches produits structurées, le site identifie les produits à forte demande. Fiche catalogue intégrée, tunnel d'achat simplifié, UX pensée pour fidéliser : il a pour parti-pris d'offrir une expérience unique et mémorable à chaque visiteur.",
        img1: {
          src: '/images/projects/be-cherry/mockup1.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/be-cherry/mockup2.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une stratégie Meta Ads ciblée pour générer des ventes',
        body: "Nous pilotons les campagnes publicitaires sur Facebook et Instagram pour attirer un trafic qualifié et générer des ventes. Grâce au ciblage précis des audiences intéressées par les cosmétiques naturels et organiques, et à une optimisation continue des performances, nous avons considérablement réduit leur coût d'acquisition tout en maximisant le retour sur investissement publicitaire.",
        img1: {
          src: '/images/projects/be-cherry/mockup3.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/be-cherry/mockup4.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Des créatives performantes qui racontent une histoire',
        body: "Nous concevons régulièrement des visuels et vidéos publicitaires qui capturent l'attention en scrollant. Maîtrise des codes des produits cosmétiques, mises en scène appétissantes et contenus d'influence : chaque créative est optimisée pour la cible de Be Cherry tout en portant un message fort qui génère les meilleurs résultats en termes d'engagement et de conversion.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/be-cherry/mockup5.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/be-cherry/mockup6.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'mobile-house',
    title: 'Mobile House',
    order: 8,
    description: "Mobile House, un site vitrine immersif pour mettre en valeur des habitats mobiles d'exception.",
    siteUrl: 'https://www.mobilehouse.fr/',
    client: 'Mobile House',
    service: 'DA, Site Web, RS',
    duree: '2 mois',
    hero: {
      src: '/images/projects/mobile-house/asset%205.webp',
      width: 1600,
      height: 1600,
    },
    sections: [
      {
        title: 'Un site vitrine pensé pour inspirer et convertir',
        body: "Nous avons conçu pour Mobile House un site vitrine élégant qui reflète l'ADN de la marque : modernité, mobilité et qualité de vie. Chaque page a été pensée pour guider le visiteur dans sa découverte des habitats mobiles, avec une navigation intuitive, des visuels impactants et des appels à l'action stratégiquement placés pour transformer l'intérêt en prise de contact.",
        img1: {
          src: '/images/projects/mobile-house/mockup1.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/mobile-house/mockup2.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une identité visuelle forte au service de la différenciation',
        body: "Pour se démarquer sur un marché de niche, Mobile House avait besoin d'une identité visuelle claire et mémorable. Nous avons travaillé une direction artistique soignée, palette de couleurs, typographies, iconographie, pour exprimer le positionnement haut de gamme de la marque tout en restant accessible. Le résultat : une cohérence visuelle qui inspire confiance dès les premiers instants.",
        img1: {
          src: '/images/projects/mobile-house/mockup3.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/mobile-house/mockup4.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une présence sur les réseaux sociaux cohérente et engageante',
        body: "Nous accompagnons Mobile House dans l'animation de ses réseaux sociaux avec des contenus qui valorisent le style de vie associé à leurs habitats. Publications soignées, visuels de qualité et storytelling authentique : chaque post renforce la communauté et attire de nouveaux prospects qualifiés. Une stratégie éditoriale pensée pour générer de l'engagement et de la notoriété sur le long terme.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/mobile-house/mockup5.webp',
      width: 1600,
      height: 1066,
    },
    quote:
      "« Kameo a su parfaitement capturer l'essence de notre marque et la retranscrire en un site qui nous ressemble vraiment. Le résultat dépasse nos attentes. »",
    quoteAuthor: 'Direction, Mobile House',
    fullImg: {
      src: '/images/projects/mobile-house/mockup6.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'compagnie-des-autocars-lyonnais',
    title: 'Compagnie des Autocars Lyonnais',
    order: 9,
    description: 'CAL, une présence digitale complète pour un acteur majeur du transport autocar.',
    siteUrl: 'https://cal69.fr/',
    client: 'Compagnie des Autocars Lyonnais',
    service: 'Site Web, Fiche GMB',
    duree: 'Depuis 1 an et demi',
    hero: {
      src: '/images/projects/compagnie-des-autocars-lyonnais/asset%206.webp',
      width: 1066,
      height: 1600,
    },
    sections: [
      {
        title: "Un site web professionnel qui valorise l'offre de location d'autocars",
        body: "Nous avons développé un site vitrine clair et structuré pour la Compagnie des Autocars Lyonnais, mettant en avant l'ensemble de leurs services de location d'autocars avec chauffeur : transport scolaire, voyages d'entreprise, transferts et excursions. L'enjeu était de donner à CAL une image professionnelle et rassurante face à une clientèle exigeante, directeurs d'établissements scolaires, responsables logistiques d'entreprises, comités d'entreprise : tout en simplifiant au maximum la prise de contact et les demandes de devis.",
        img1: {
          src: '/images/projects/compagnie-des-autocars-lyonnais/siteWeb_LandingPage.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/compagnie-des-autocars-lyonnais/mobile_Ecrans.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une fiche Google My Business optimisée pour la visibilité locale',
        body: "En parallèle du site, nous gérons la fiche Google My Business de la Compagnie des Autocars Lyonnais pour maximiser leur visibilité sur les recherches locales. Optimisation de toutes les sections (description, catégories, horaires, photos), encouragement des avis clients, publication régulière de posts : la fiche est devenue un levier d'acquisition direct, positionnant CAL en tête des résultats sur les requêtes « transport autocar Lyon », « location autocar Rhône » et « transfert scolaire Lyon ».",
        img1: {
          src: '/images/projects/compagnie-des-autocars-lyonnais/mobile_Services.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/compagnie-des-autocars-lyonnais/fiche_Gmb.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une stratégie digitale coordonnée pour générer des demandes de devis',
        body: "En combinant site web de conversion et fiche Google My Business optimisée, nous avons construit pour CAL un écosystème digital cohérent où chaque point de contact génère des opportunités commerciales concrètes. Le référencement local naturel, renforcé par l'ancienneté de la relation et la régularité des publications, positionne aujourd'hui la Compagnie des Autocars Lyonnais comme acteur incontournable du transport collectif dans la région lyonnaise.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/compagnie-des-autocars-lyonnais/siteWeb_Apropos.webp',
      width: 1600,
      height: 1066,
    },
    quote:
      '"Kameo a transformé notre présence en ligne en véritable outil commercial. On reçoit désormais des demandes de devis directement depuis le site et via Google, c\'est un gain concret au quotidien."',
    quoteAuthor: 'Direction CAL, Compagnie des Autocars Lyonnais',
    fullImg: {
      src: '/images/projects/compagnie-des-autocars-lyonnais/siteWeb_Contact.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'qunfil',
    title: 'Qunfil',
    order: 10,
    description: "Qunfil, une identité visuelle et un site vitrine pour une marque d'art textile d'exception.",
    siteUrl: 'https://qunfil.art/',
    client: 'Qunfil',
    service: 'Direction Artistique, Site Web',
    duree: '2 mois',
    hero: {
      src: '/images/projects/qunfil/asset%207.webp',
      width: 1600,
      height: 1066,
    },
    sections: [
      {
        title: "Une identité visuelle créée de A à Z pour un art d'exception",
        body: "Nous avons conçu l'identité visuelle complète de Qunfil, marque spécialisée dans les tableaux en string art fabriqués 100% en France. Logotype, palette chromatique, typographie, charte graphique, supports print et signalétique : chaque élément traduit la technicité et le caractère unique de ces œuvres textiles, à mi-chemin entre l'art contemporain et la décoration intérieure haut de gamme. Un univers visuel cohérent, élégant et différenciant, conçu pour s'adresser aussi bien aux amateurs d'art qu'aux prescripteurs en décoration.",
        img1: {
          src: '/images/projects/qunfil/IdVisu_folder_cropped.webp',
          width: 1313,
          height: 1600,
        },
        img2: {
          src: '/images/projects/qunfil/brading_Sign.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: "Un site vitrine qui raconte l'histoire d'un artisanat local",
        body: "Nous avons structuré le site pour valoriser le savoir-faire artisanal et l'authenticité de Qunfil. Fabrication 100% française, fils tendus à la main sur cadre : chaque tableau est une pièce unique, fruit d'une technicité précise et d'un geste répété des centaines de fois. L'architecture du site guide le visiteur de la découverte du concept jusqu'aux collections (portraits, paysages, animaux, architecture), en passant par l'histoire de la marque, un parcours pensé pour susciter l'émotion et déclencher la prise de contact.",
        img1: {
          src: '/images/projects/qunfil/siteWeb_LandingPage%20%281%29.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/qunfil/siteWeb_Boutique.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une plateforme conçue pour la conversion et la personnalisation',
        body: "Au-delà de l'esthétique, le site Qunfil est un outil de conversion : présentation claire des collections, mise en avant des œuvres sur mesure, galerie photo optimisée et CTAs pensés à chaque étape du parcours client. L'ensemble du dispositif, identité visuelle + site web, construit une présence en ligne capable de transformer la curiosité d'un visiteur en commande d'un tableau unique. Un projet livré dans des délais serrés, sans compromis sur la qualité.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/qunfil/siteWeb_Histoire.webp',
      width: 1600,
      height: 1066,
    },
    quote:
      '"Excellent travail malgré un délai imposé de réalisation très court ! Des échanges constructifs tout au long de toute la prestation. Très professionnel et recommandé !"',
    quoteAuthor: 'Malcom Pereira, Fondateur & Gérant',
    fullImg: {
      src: '/images/projects/qunfil/siteWeb_LandingPage%20%281%29.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'villa-de-luxe-bonifacio',
    title: 'Villa de Luxe Bonifacio',
    order: 11,
    description: "Villa Luxe Bonifacio, le site vitrine premium pour des villas d'exception en Corse.",
    siteUrl: 'https://villaluxebonifacio.com/',
    client: 'Villa de Luxe Bonifacio',
    service: 'Site Web',
    duree: '2 mois',
    hero: {
      src: '/images/projects/villa-de-luxe-bonifacio/asset%208.webp',
      width: 1600,
      height: 1431,
    },
    sections: [
      {
        title: "Un site élégant qui capture le luxe et l'exclusivité",
        body: "Nous avons développé un site vitrine haut de gamme pour Villa Luxe Bonifacio, présentant leurs propriétés d'exception au cœur du Golfe de Bonifacio, dans l'un des sites naturels et archéologiques les plus protégés du sud de la Corse. Le design raffiné et épuré s'harmonise avec le positionnement très premium des villas : mise en page photographique soignée, typographie élégante et navigation fluide pour capter immédiatement l'attention d'une clientèle internationale exigeante à la recherche d'un séjour d'exception.",
        img1: {
          src: '/images/projects/villa-de-luxe-bonifacio/siteWeb_LandingPage%20%282%29.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/villa-de-luxe-bonifacio/mobile_SectionDetails.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une présentation détaillée des atouts exclusifs',
        body: "Le site structure l'information autour des atouts distinctifs de chaque villa : superficies généreuses, environnements préservés, design d'architecte, piscines à débordement, vue panoramique sur la mer et les falaises de Bonifacio. Chaque fiche villa détaille ses équipements, sa galerie photo et ses disponibilités, avec une attention particulière portée aux garanties de service : conciergerie, transferts privés et accueil personnalisé pour une réservation en toute confiance.",
        img1: {
          src: '/images/projects/villa-de-luxe-bonifacio/mobile_SectionGallery.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/villa-de-luxe-bonifacio/siteWeb_VillaGiova.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une plateforme conçue pour la location de luxe',
        body: "La plateforme Villa Luxe Bonifacio agit comme un véritable outil de réservation haut de gamme : fiches propriétés immersives, formulaire de demande personnalisé, mise en avant des services additionnels (véhicules de prestige, boat trips, expériences locales) et tunnel de conversion pensé pour rassurer et convaincre une clientèle premium internationale. Chaque détail, de l'architecture de l'information à la sélection typographique, véhicule un positionnement unique en son genre sur la destination Bonifacio.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/villa-de-luxe-bonifacio/siteWeb_Reservation.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/villa-de-luxe-bonifacio/siteWeb_Vehicules.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'valeos',
    title: 'Valeos',
    order: 12,
    description: "Valeos, un site sur mesure pour l'essor des solutions énergétiques économiques et écologiques.",
    siteUrl: 'https://valeos.fr/',
    client: 'Valeos',
    service: 'Site Web, Logo',
    duree: '2 mois',
    hero: {
      src: '/images/projects/valeo/asset%209.webp',
      width: 1600,
      height: 1066,
    },
    sections: [
      {
        title: 'Une maquette graphique créée de toutes pièces pour se démarquer',
        body: "Nous avons développé un site vitrine moderne et épuré pour Valeos, en partant d'une page blanche. Le design traduit le positionnement de la marque : sérieux, clarté et innovation au service des particuliers et professionnels qui cherchent à réduire leur facture énergétique grâce au solaire. Chaque choix graphique, palette, typographie, mise en page, renforce la crédibilité et la proximité que Valeos souhaitait projeter auprès de ses prospects.",
        img1: {
          src: '/images/projects/valeo/siteWeb_LandingPage%20%283%29.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/valeo/mobile_Ecrans%20%281%29.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Un site web structuré pour orienter et rassurer les prospects',
        body: "Le site organise l'offre complète de Valeos : panneaux solaires, pompes à chaleur et bornes de recharge, en présentant chaque solution d'installation solaire. Chaque catégorie est présentée avec ses avantages chiffrés (économies réalisées, aides disponibles, retour sur investissement) et les informations essentielles pour convaincre un prospect indécis. Un tunnel de confiance construit autour de la réassurance technique, commerciale et écologique, qui guide naturellement vers la demande de devis ou de renseignements.",
        img1: {
          src: '/images/projects/valeo/mobile_solaire.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/valeo/siteWeb_Solaire.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: "Une plateforme qui communique l'engagement économique et écologique",
        body: "Au-delà du design, le site Valeos est un outil de conviction : il articule les bénéfices économiques (économies sur la facture, aides de l'État, TVA réduite) et les bénéfices environnementaux (réduction de l'empreinte carbone, autonomie énergétique) pour positionner Valeos comme un partenaire de long terme, pas seulement un installateur. La valeur long terme de chaque installation est mise en avant à chaque étape pour pousser à la prise de contact.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/valeo/siteWeb_Contacter.webp',
      width: 1600,
      height: 1066,
    },
    quote:
      '"Une équipe très professionnelle pour créer un site internet de qualité. L\'équipe est très structurée et à l\'écoute accueil, je recommande vivement la prestation."',
    quoteAuthor: 'Benjamin, Fondateur & Gérant',
    fullImg: {
      src: '/images/projects/valeo/mobile_contacter.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'casajaia',
    title: 'CasaJaia',
    order: 13,
    description: "Casa Jaïa, une boutique e-commerce complète pour l'univers de la maison et de la convivialité.",
    siteUrl: 'https://casajaia.fr/',
    client: 'CasaJaia',
    service: 'Site Web',
    duree: '2 mois',
    hero: {
      src: '/images/projects/casajaia/asset%2011.webp',
      width: 1600,
      height: 1067,
    },
    sections: [
      {
        title: 'Une plateforme e-commerce élégante pour des produits lifestyle premium',
        body: "Nous avons développé un site e-commerce sur mesure pour Casa Jaïa, boutique en ligne proposant une sélection de produits pour la maison : vaisselle, couverts en bois, linge de table et accessoires. Le design épuré et sophistiqué met en valeur les collections avec une navigation claire bien structurée. Intégration des fonctionnalités essentielles d'un e-commerce moderne : gestion du catalogue, filtres produits, panier et paiement sécurisé Paypal, et système de fidélisation pour inspirer confiance.",
        img1: {
          src: '/images/projects/casajaia/siteWeb_LandingPage%20%284%29.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/casajaia/mobile_ProduitLandingPage.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: "Des fonctionnalités avancées pour optimiser l'expérience client",
        body: "Le site intègre l'ensemble des outils indispensables pour les achats en ligne : avis clients, paiement en ligne sécurisé, gestion de compte, panier et livraison. L'interface propose également un service d'emballage cadeau personnalisé et une communication directe via le blog tendance et la newsletter. Ces fonctionnalités coordonnées créent une expérience d'achat soignée et encouragent les commandes de nouvelles clientèles.",
        img1: {
          src: '/images/projects/casajaia/mobile_Blog.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/casajaia/siteWeb_APropos%20%281%29.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une boutique qui valorise une sélection curated et tendance',
        body: "Au-delà du technique, le site communique sur le positionnement de Casa Jaïa : une marque française, propriétaire d'une collection artisanale choisie avec soin, aux côtés des meilleures collections en matière de table et de décor. Les fiches produits détaillées, les actualités du blog et les pages de marques créent un univers cohérent pour sublimer leur intérieur et leurs tables, offrir qualité, esthétisme et service bien personnalisé.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/casajaia/siteWeb_Connexion.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/casajaia/siteWeb_Contact%20%281%29.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'axistone-capital',
    title: 'Axistone Capital',
    order: 14,
    description:
      "Axistone Capital, un site vitrine professionnel pour un fonds d'investissement immobilier à l'approche technologique innovante.",
    siteUrl: 'https://axistonecapital.com/',
    client: 'Axistone Capital',
    service: 'Site Web',
    duree: '4 mois',
    hero: {
      src: '/images/projects/axistone-capital/asset%2012.webp',
      width: 1600,
      height: 931,
    },
    sections: [
      {
        title: 'Un site web sobre et élégant qui inspire confiance institutionnelle',
        body: "Nous avons développé un site vitrine professionnel et sobre pour Axistone Capital, fonds d'investissement spécialisé dans l'immobilier. L'enjeu était de construire une crédibilité visuelle immédiate auprès de partenaires financiers et d'investisseurs institutionnels. Chaque arbitrage graphique, palette sombre et sobre, typographie rigoureuse, mise en page structurée, véhicule sérieux, expertise et ambition : tout en se différenciant des acteurs logistiques et bâtiments réactifs institutionnels jusqu'à 15 000.",
        img1: {
          src: '/images/projects/axistone-capital/siteWeb_LandingPage%20%285%29.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/axistone-capital/mobile_LandingPageSectionConversion.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: "Une présentation claire d'une approche technologique innovante",
        body: "Le site communique sur le positionnement différenciant d'Axistone Capital : l'alliance entre expertise immobilière et maîtrise technologique pour générer des rendements supérieurs au marché. Candidature à la plateforme de gestion propriétaire en ligne, tableaux de bord actifs, reporting dynamique, les outils technologiques d'Axistone sont mis en avant comme un avantage concurrentiel décisif. Les détails chiffrés et informationnels précis aident à renforcer la confiance et à accélérer la décision.",
        img1: {
          src: '/images/projects/axistone-capital/siteWeb_NosForces%20%281%29.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/axistone-capital/mobile_Contact.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une plateforme orientée vers deux cibles distinctes',
        body: "Le site s'adresse simultanément à deux profils différents : les investisseurs institutionnels qui recherchent des opportunités dans l'immobilier commercial, et les particuliers patrimoniaux qui souhaitent diversifier leurs actifs. Nous proposons une architecture stratégique de long terme : le site communique une ambition claire, une différenciation par la data et l'algorithmie pour positionner Axistone Capital comme partenaire de référence pour toute clientèle immobilière.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/axistone-capital/siteWeb_Actif.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/axistone-capital/siteWeb_APropos%20%282%29.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'paris-production-services',
    title: 'Paris Production Services',
    order: 15,
    description:
      'Paris Production Services, un site vitrine complet pour un acteur spécialisé dans les services de production audiovisuelle en France.',
    siteUrl: 'https://parisproductionservices.eu/',
    client: 'Paris Production Services',
    service: 'Site Web',
    duree: '2 mois',
    hero: {
      src: '/images/projects/paris-production-services/asset%2013.webp',
      width: 1600,
      height: 1066,
    },
    sections: [
      {
        title: 'Positionner un acteur de référence dans le secteur audiovisuel français',
        body: "Nous avons conçu un site vitrine professionnel et immersif pour Paris Production Services, société spécialisée dans l'accompagnement de tournages en France. L'enjeu était de refléter l'expertise et la polyvalence de l'équipe auprès d'une clientèle internationale, réalisateurs, producteurs, chaînes TV, à la recherche d'un partenaire local fiable. Chaque choix graphique communique sérieux, réactivité et maîtrise du terrain : typographie affirmée, mise en page dynamique, visuels immersifs.",
        img1: {
          src: '/images/projects/paris-production-services/siteWeb_LandingPage%20%286%29.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/paris-production-services/mobile_Ecrans%20%282%29.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une offre de services claire, structurée pour convertir',
        body: "La page services détaille l'ensemble des prestations proposées, fixeur, location d'équipement, gestion logistique, coordination de plateau, avec une architecture pensée pour que chaque visiteur identifie rapidement ce dont il a besoin. La section projets valorise le track record de l'équipe : des productions référencées qui crédibilisent l'offre et rassurent les nouvelles productions avant même le premier contact.",
        img1: {
          src: '/images/projects/paris-production-services/siteWeb_Services.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/paris-production-services/siteWeb_Projets.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Des lieux de tournage soigneusement sélectionnés à travers la France',
        body: "La rubrique lieux de tournage constitue un atout différenciant majeur du site : elle présente un catalogue visuel de décors disponibles à Paris et en région, avec fiches techniques et disponibilités. Ce catalogue renforce la proposition de valeur globale de Paris Production Services et positionne la société comme un interlocuteur capable de couvrir l'intégralité des besoins d'une production, du repérage de décors jusqu'au dernier jour de tournage.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/paris-production-services/siteWeb_LieuxTournage.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/paris-production-services/mobile_Contact%20%281%29.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'ohvale',
    title: 'Ohvale',
    order: 16,
    description:
      'Ohvale France, le site officiel du distributeur officiel des mini-motos de compétition italiennes en France.',
    siteUrl: 'https://ohvale-france.fr/',
    client: 'Ohvale',
    service: 'Site Web',
    duree: '3 mois',
    hero: {
      src: '/images/projects/ohvale/asset%2014.webp',
      width: 1600,
      height: 1066,
    },
    sections: [
      {
        title: "Un site web dynamique qui valorise l'univers de la compétition jeune",
        body: "Nous avons développé un site vitrine pour Ohvale France, distributeur officiel des mini-motos italiennes Ohvale en France. Le site est autant une plateforme d'information sur la compétition et le championnat qu'une vitrine digitale pour les jeunes pilotes de 4 à 14 ans. Le design saisit l'énergie et l'adrénaline de la course, tout en permettant aux parents et coachs de ces coureurs de comprendre l'univers pour les aider à se lancer.",
        img1: {
          src: '/images/projects/ohvale/siteWeb_LandingPage%20%287%29.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/ohvale/mobile_Ecrans%20%283%29.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: "Une plateforme d'information sur les MiniGP World Series",
        body: "Le site structure l'information autour du championnat MiniGP France, avec la marque des MiniGP World Series organisées et promues par Ohvale. La plateforme couvre l'offre d'accès au MiniGP pour les jeunes pilotes français, règlement, catégories, calendrier des épreuves, ainsi que la liste des distributeurs, les dernières actualités du championnat et les fiches détaillées des modèles disponibles, pour guider chaque famille vers le bon choix.",
        img1: {
          src: '/images/projects/ohvale/siteWeb_Presentation.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/ohvale/siteWeb_Modeles.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Un outil commercial connecté au réseau de revendeurs',
        body: "La plateforme est pensée pour connecter les mini-motos et la compétition au réseau international de revendeurs officiels Ohvale. Le site propose une section dédiée aux distributeurs France, aux points de contact et aux accessoires disponibles, alliant plaisir, perfectionnement et accompagnement dans la passion sportive. Un outil digital conçu pour simplifier le parcours d'achat et fidéliser une communauté de jeunes pilotes et de familles passionnées.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/ohvale/siteWeb_AccessoiresContenu.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/ohvale/mobile_Pilotage.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'wineguide',
    title: 'WineGuide',
    order: 17,
    description:
      "Wine Guide Provence, un site élégant pour des expériences œnologiques sur mesure en Provence et sur la Côte d'Azur.",
    siteUrl: 'https://wineguide-provence.com/',
    client: 'WineGuide',
    service: 'Site Web',
    duree: '2 mois',
    hero: {
      src: '/images/projects/wineguide/asset%2015.webp',
      width: 1066,
      height: 1600,
    },
    sections: [
      {
        title: "Un site web raffiné qui capture l'art du vin provençal",
        body: "Nous avons développé un site élégant pour Wine Guide, spécialiste des expériences œnologiques en Provence et sur la Côte d'Azur. Le design épuré et sophistiqué reflète le positionnement premium du service : mise en avant photographique soignée des vignobles, des domaines et des expériences de dégustation. La palette éditoriale met en valeur l'authenticité du terroir, l'univers familial des domaines et l'art de vivre provençal.",
        img1: {
          src: '/images/projects/wineguide/siteWeb_LandingPage.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/wineguide/mobile_EventsEntreprise.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une présentation claire des services pour différentes clientèles',
        body: "Le site structure l'offre en plusieurs formats adaptés à différentes attentes : circuits en van avec visites de domaines sélectionnés, dégustations tout public ou privatisées, et événements sur mesure pour entreprises. Guide certifiée Wine & Spirit (WSET3), la fondatrice positionne Wine Guide comme une solution flexible pour les particuliers, groupes d'amis, touristes et professionnels, avec des tarifs et formats clairement détaillés pour faciliter la réservation.",
        img1: {
          src: '/images/projects/wineguide/siteWeb_ToutPublic.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/wineguide/siteWeb_ToutPrive.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: "Une approche personnalisée portée par l'expertise de la fondatrice",
        body: "Le site met humainement en avant Camille, la fondatrice, et son engagement personnel pour l'œnologie, transmettant sa passion auprès de toutes les formes de tourisme. Sa présentation est accompagnée d'éléments biographiques détaillés, d'une certification WSET3 mise en avant comme gage de sérieux, et d'un contenu contextualisé pour illustrer son expertise, accords mets-vins, sélection de domaines confidentiels, associations avec des expériences sensorielles et un engagement fort pour les terroirs responsables.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/wineguide/siteWeb_ClubDegustation.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/wineguide/ipad_Camille.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'agence-marnat',
    title: 'Agence Marnat',
    order: 18,
    description: 'Marnat, un site vitrine professionnel pour une agence de communication globale.',
    siteUrl: 'https://marnat.fr/',
    client: 'Agence Marnat',
    service: 'Site Web',
    duree: '2 mois',
    hero: {
      src: '/images/projects/agence-marnat/asset%2017.webp',
      width: 1599,
      height: 1066,
    },
    sections: [
      {
        title: "Un site web élégant qui valorise 30 ans d'expertise",
        body: 'Nous avons conçu une plateforme claire et élégante pour Marnat, agence de communication fondée en 1994 et reconnue pour ses expertises transversales en conseil stratégique, marketing digital, développement web, vidéo et rédaction de contenu. Le site capture le professionnalisme de leurs métiers et traduit leur approche sur-mesure, ancrée dans une relation client durable, pour refléter leur capacité à accompagner aussi bien les projets print que digitaux.',
        img1: {
          src: '/images/projects/agence-marnat/siteWeb_LandingPage.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/agence-marnat/mobile_Histoire.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: "Une présentation claire d'une offre de services complète",
        body: "Le site structure l'expertise Marnat autour de ses cinq piliers : marketing digital, stratégie de marque, création graphique et identité visuelle, supports de communication, rédaction de contenu et relations médias. Cette présentation modulaire met en lumière la capacité de l'agence à gérer l'intégralité d'un projet de communication, du print au digital, et à multiplier les prestations selon les besoins de chaque client.",
        img1: {
          src: '/images/projects/agence-marnat/mobile_Realisations.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/agence-marnat/siteWeb_Ecran.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une plateforme qui communique professionnalisme et adaptabilité',
        body: "Le site structure l'ensemble des informations adaptées à chaque type de client, TPE, ETI, grands comptes, depuis l'accompagnement stratégique jusqu'à l'exécution opérationnelle. Les références clés, les valeurs de l'agence et la présentation des équipes renforcent la crédibilité et la confiance. Une plateforme pensée pour transformer chaque visite en opportunité commerciale concrète et durable.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/agence-marnat/siteWeb_Valeurs.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/agence-marnat/mobile_Contact.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'imperatrice-developpement',
    title: 'Impératrice Développement',
    order: 19,
    description: "Impératrice Développement, un site vitrine professionnel pour l'intelligence économique.",
    siteUrl: 'https://imperatrice-developpement.com/',
    client: 'Impératrice développement',
    service: 'Site Web',
    duree: '2 mois',
    hero: {
      src: '/images/projects/imperatrice-developpement/asset%2018.webp',
      width: 1600,
      height: 1525,
    },
    sections: [
      {
        title: "Un site web sobre qui reflète l'expertise en intelligence économique",
        body: "Nous avons développé un site vitrine sobre et professionnel pour Impératrice Développement, organisme spécialisé dans la formation en intelligence économique et en business développement. Le site valorise l'expertise de la structure dans un contexte stratégique, tout en facilitant la prise de contact directe avec les prospects, dirigeants et PME. Cette approche sobre et affirmée renforce la crédibilité auprès d'une clientèle corporate exigeante.",
        img1: {
          src: '/images/projects/imperatrice-developpement/siteWeb_landingPage.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/imperatrice-developpement/siteWeb_APropos.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une plateforme orientée vers la génération de contacts qualifiés BtoB',
        body: "Le site est structuré pour transformer les visiteurs qualifiés, dirigeants, cadres et décideurs, en prospects actifs. La page services détaille l'ensemble des formations proposées en intelligence économique, veille stratégique et leadership. La navigation simplifiée et les appels à l'action clairs permettent aux entreprises d'identifier rapidement les formations adaptées à leurs enjeux et d'engager la conversation directement.",
        img1: {
          src: '/images/projects/imperatrice-developpement/siteWeb_Services.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/imperatrice-developpement/mobile_landingPage.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une vitrine digitale pour un acteur de la formation stratégique',
        body: 'La plateforme positionne Impératrice Développement comme un partenaire de confiance pour les entreprises souhaitant développer leurs compétences en intelligence économique, veille concurrentielle, analyse stratégique et prise de décision. La discrétion et le sérieux propres à ce secteur sont au cœur de chaque arbitrage éditorial, afin de bâtir une relation de confiance durable avec les dirigeants et les entreprises accompagnées.',
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/imperatrice-developpement/siteWeb_landingPageSectionServices.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/imperatrice-developpement/mobile_Contact.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'serrurier-24',
    title: 'Serrurier 24',
    order: 20,
    description: "Serrurier 24, un site web d'urgence optimisé pour la conversion immédiate.",
    siteUrl: 'https://serrurier-24.com/',
    client: 'Serrurier 24',
    service: 'Site Web',
    duree: '2 mois',
    hero: {
      src: '/images/projects/serrurier-24/asset%2020.webp',
      width: 1200,
      height: 1600,
    },
    sections: [
      {
        title: "Un site vitrine conçu pour les situations d'urgence",
        body: "Nous avons développé un site web spécialement pensé pour les personnes confrontées à une porte claquée, une clé bloquée ou une serrure forcée, et qui ont besoin d'un professionnel immédiatement. Les informations essentielles sont visibles dès l'atterrissage : intervention en 30 minutes, disponibilité 24h/24 et 7j/7, numéro de téléphone en évidence sur chaque page, couverture de Paris et de toute l'Île-de-France. Chaque élément du site vise la réassurance et facilite la prise de contact en situation de stress.",
        img1: {
          src: '/images/projects/serrurier-24/siteWeb_LandingPage.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/serrurier-24/mobile_Ecrans.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une présentation des services qui répond aux recherches urgentes',
        body: "Le site structure l'ensemble de l'offre : ouverture de porte bloquée ou claquée, intervention sur clé cassée, remplacement et changement de serrure, blindage et sécurisation. La présentation est pensée pour rassurer rapidement l'utilisateur en situation de stress. Une FAQ complète répond aux questions les plus courantes, dissipe les frictions et accélère la décision de contact, pour transformer chaque visite en appel entrant.",
        img1: {
          src: '/images/projects/serrurier-24/mobile_FAQ.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/serrurier-24/mobile_APropos.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Un positionnement local fort pour capter les recherches géolocalisées',
        body: "Le site est optimisé pour apparaître sur les recherches locales « serrurier urgence Paris » et dans l'ensemble des départements d'Île-de-France (75, 77, 78, 91, 92, 93, 94, 95). La mise en avant de la couverture géographique complète, combinée aux signaux de confiance, certifications, avis clients, années d'expérience, positionne Serrurier 24 comme l'acteur de référence disponible à toute heure dans toute la région parisienne.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/serrurier-24/siteWeb_LandingPageSectionServices.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/serrurier-24/siteWeb_Serrurerie.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'sed-paris',
    title: 'Sed Paris',
    order: 21,
    description: 'SED Manutention, une plateforme e-commerce technique au service des professionnels.',
    siteUrl: 'https://www.sed-manutention.com/',
    client: 'SED',
    service: 'Site Web',
    duree: '2 mois',
    hero: {
      src: '/images/projects/sed-paris/asset%2022.webp',
      width: 1600,
      height: 1068,
    },
    sections: [
      {
        title: 'Un site e-commerce robuste pour un catalogue industriel complexe',
        body: "Nous avons développé une plateforme e-commerce technique capable de présenter un vaste catalogue de produits spécialisés en manutention et levage : palettes, pinces, chariots, équipements de stockage et de manutention lourde. Le site structure intelligemment des centaines de références avec leurs caractéristiques techniques, fiches produits détaillées et documentation téléchargeable, pour une expérience d'achat fluide adaptée aux besoins des professionnels du secteur industriel et BTP.",
        img1: {
          src: '/images/projects/sed-paris/siteWeb_LandingPage.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/sed-paris/mobile_Telechargements.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une architecture pensée pour la recherche produit et la conversion BtoB',
        body: "Le site intègre des fonctionnalités avancées permettant aux clients professionnels de trouver rapidement l'équipement adapté à leurs besoins : filtres techniques par catégorie et usage, fiches produits avec caractéristiques précises et visuels haute définition, système de devis en ligne et gestion de commandes. Cette approche facilite la réassurance, réduit les frictions et optimise le parcours d'achat d'une clientèle industrielle exigeante.",
        img1: {
          src: '/images/projects/sed-paris/siteWeb_Boutique.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/sed-paris/mobile_Videos.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: "Une vitrine digitale pour 70 ans d'expertise en manutention",
        body: "Au-delà du catalogue, le site met en valeur l'histoire et l'expertise de SED, acteur de référence dans la manutention depuis plusieurs décennies. La présentation des équipes, des certifications et des marques partenaires renforce la crédibilité auprès d'une clientèle professionnelle qui attend un service fiable, un accompagnement personnalisé et des produits de haute qualité, du premier devis au service après-vente.",
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/sed-paris/siteWeb_ProductPage.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/sed-paris/siteWeb_APropos.webp',
      width: 1600,
      height: 1066,
    },
  },
  {
    slug: 'ecompetences',
    title: 'E-competences',
    order: 22,
    description: 'E-Competences Formations, un site vitrine professionnel pour un organisme certifié Qualiopi.',
    siteUrl: 'https://www.ecompetences-formations.fr/',
    client: 'E-competences',
    service: 'Site Web',
    duree: '2 mois',
    hero: {
      src: '/images/projects/e-comptence/asset%2024.webp',
      width: 1600,
      height: 1066,
    },
    sections: [
      {
        title: 'Un site web clair qui inspire confiance et crédibilité',
        body: "Nous avons conçu un site vitrine professionnel pour E-Competences, organisme de formation spécialisé en bureautique, graphisme et français professionnel. Le design épuré et structuré reflète le positionnement sérieux et la certification Qualiopi de l'organisme, tout en valorisant les formations phares, Excel, Word, PowerPoint, Photoshop, Français actif. Cette approche visuelle rassure les apprenants potentiels et les responsables de formation et facilite la prise de décision.",
        img1: {
          src: '/images/projects/e-comptence/siteWeb_LandingPage.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/e-comptence/mobile_APropos.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: 'Une architecture pensée pour la génération de leads',
        body: "Le site est structuré pour transformer les visiteurs en prospects qualifiés : présentation de la valeur ajoutée des formations pour le marché du travail, catalogue accessible et bien organisé, témoignages clients. Les informations sur la certification Qualiopi et le financement CPF sont mis en avant pour lever les freins à l'inscription. Chaque section guide naturellement l'utilisateur vers la prise de contact et la conversion.",
        img1: {
          src: '/images/projects/e-comptence/mobile_Formation.webp',
          width: 1600,
          height: 1066,
        },
        img2: {
          src: '/images/projects/e-comptence/siteWeb_fomration.webp',
          width: 1600,
          height: 1066,
        },
      },
      {
        title: "Un parcours utilisateur optimisé pour valoriser l'expertise",
        body: 'Nous avons conçu une expérience de navigation fluide qui met en avant la valeur de chaque formation et permet leur découverte de manière naturelle. La présentation accessible, prérequis, durée, programme, modalités de financement, combinée aux témoignages et à la certification Qualiopi mise en avant tout au long du parcours, renforce la confiance et facilite la conversion en inscription ou demande de contact.',
        img1: null,
        img2: null,
      },
    ],
    solo: {
      src: '/images/projects/e-comptence/siteWeb_Formations02.webp',
      width: 1600,
      height: 1066,
    },
    quote: '',
    quoteAuthor: '',
    fullImg: {
      src: '/images/projects/e-comptence/siteWeb_Contact.webp',
      width: 1600,
      height: 1066,
    },
  },
];

export const getRealisation = (slug: string) => REALISATIONS.find((r) => r.slug === slug);
