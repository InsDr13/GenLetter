import heroArch from "@/assets/hero-architecture.jpg";
import heroGenie from "@/assets/hero-genie-civil.jpg";
import heroExpertise from "@/assets/hero-expertise.jpg";
import heroChantier from "@/assets/hero-chantier.jpg";
import heroModern from "@/assets/hero-modern.jpg";

// Re-exported hero images used by the home carousel
export const HERO_IMAGES = [
  { src: heroArch, alt: "Architecture contemporaine — façade béton et bois", title: "Architecture contemporaine", tag: "Conception architecturale", to: "/services/etudes-architecturales" },
  { src: heroExpertise, alt: "Expertise immobilière — analyse de plans et de documents", title: "Expertise immobilière", tag: "Évaluation & diagnostic", to: "/services/expertise-immobiliere" },
  { src: heroGenie, alt: "Génie civil — structure, coffrage et ferraillage sur chantier", title: "Génie civil", tag: "Structure & ouvrages", to: "/services/construction-execution" },
  { src: heroChantier, alt: "Suivi de chantier — tour résidentielle en construction", title: "Suivi de chantier", tag: "Pilotage & contrôle", to: "/services/audits-techniques" },
  { src: heroModern, alt: "Bâtiment moderne — façade verre et acier", title: "Bâtiments modernes", tag: "Conception & réalisation", to: "/projects" },
];

export type Service = {
  slug: string;
  n: string;
  t: string;
  short: string;
  d: string;
  img: string;
  objectives: string[];
  deliverables: string[];
  advantages: string[];
  gallery: string[];
  process: { k: string; v: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "expertise-immobiliere",
    n: "01",
    t: "Expertise immobilière",
    short: "Analyse, diagnostic et valorisation — vénale, locative, hypothécaire.",
    d: "Nous menons des évaluations rigoureuses d'actifs immobiliers : analyse documentaire, étude de l'emplacement et proposition de valeur. Nos rapports d'expertise couvrent les évaluations pour prêts hypothécaires, valeurs foncières, expropriations, garanties bancaires, successions et diagnostics techniques de conformité.",
    img: heroExpertise,
    objectives: [
      "Déterminer la valeur réelle d'un bien immobilier",
      "Sécuriser les transactions, garanties et financements",
      "Apporter un avis technique indépendant et opposable",
      "Accompagner les institutions, banques et particuliers dans leurs décisions",
    ],
    deliverables: [
      "Évaluation immobilière (vénale & locative)",
      "Rapports pour garanties bancaires & crédits hypothécaires",
      "Expertises successorales & expropriations",
      "États des lieux contradictoires",
    ],
    advantages: [
      "Expert immobilier agréé près la Cour d'Appel de Kinshasa Gombe",
      "Rapports conformes aux standards internationaux",
      "Confidentialité et indépendance des avis",
      "Délais maîtrisés et accompagnement personnalisé",
    ],
    gallery: [heroExpertise, heroModern, heroArch],
    process: [
      { k: "Cadrage", v: "Recueil documentaire, périmètre, contraintes." },
      { k: "Investigation", v: "Visite terrain, mesures, analyse comparative." },
      { k: "Valorisation", v: "Modélisation, scénarios, recommandations." },
      { k: "Livrable", v: "Rapport assermenté et soutenance." },
    ],
  },
  {
    slug: "etudes-architecturales",
    n: "02",
    t: "Études architecturales",
    short: "De la conception des plans à la supervision du chantier.",
    d: "Conception architecturale, études de faisabilité et projets d'aménagement. Suivi complet jusqu'à l'obtention du permis de construire et la supervision du chantier — pour des ouvrages cohérents avec leur site, leur usage et leur budget.",
    img: heroArch,
    objectives: [
      "Concevoir des bâtiments fonctionnels, esthétiques et durables",
      "Optimiser l'usage du site et des ressources",
      "Garantir la conformité réglementaire et technique",
      "Accompagner le maître d'ouvrage de la première esquisse à la réception",
    ],
    deliverables: [
      "Études de faisabilité & programmation",
      "Esquisses, APS / APD et plans d'exécution",
      "Dossier de permis de construire",
      "Dossiers d'appel d'offres & assistance à maîtrise d'ouvrage",
      "Suivi de chantier et réception des ouvrages",
    ],
    advantages: [
      "Architecte inscrit à l'Ordre National des Architectes de la RDC",
      "Approche multidisciplinaire — architecture, ingénierie, urbanisme",
      "Solutions durables adaptées au contexte congolais",
      "Respect rigoureux des délais et du budget",
    ],
    gallery: [heroArch, heroModern, heroChantier],
    process: [
      { k: "Diagnostic", v: "Site, programme, contraintes réglementaires." },
      { k: "Esquisse", v: "Parti architectural, volumétries, ambiances." },
      { k: "Projet", v: "Détails techniques, matériaux, économie du projet." },
      { k: "Chantier", v: "Direction des travaux, réception, levée de réserves." },
    ],
  },
  {
    slug: "design-interieur",
    n: "03",
    t: "Design d'intérieur",
    short: "Architecture intérieure sur-mesure : matériaux, lumière, mobilier.",
    d: "Une approche sensorielle de l'espace : nous composons matières, lumières et volumes pour des intérieurs qui racontent une histoire et soutiennent l'usage quotidien — résidences privées, bureaux et espaces d'accueil.",
    img: heroModern,
    objectives: [
      "Créer des intérieurs uniques alignés à l'identité du client",
      "Optimiser ergonomie, confort et qualité d'usage",
      "Sélectionner matériaux et mobilier durables",
      "Maîtriser le budget et le calendrier d'aménagement",
    ],
    deliverables: [
      "Concept d'ambiance & moodboard",
      "Plans d'aménagement et coupes de détail",
      "Cahier des matières, mobilier et éclairage",
      "Direction artistique de chantier jusqu'à la livraison",
    ],
    advantages: [
      "Designers et architectes d'intérieur expérimentés",
      "Réseau de fournisseurs locaux et internationaux",
      "Approche personnalisée projet par projet",
      "Coordination complète des corps d'état",
    ],
    gallery: [heroModern, heroArch, heroExpertise],
    process: [
      { k: "Brief", v: "Style de vie, usages, références." },
      { k: "Concept", v: "Moodboards, palette, croquis." },
      { k: "Détail", v: "Mobilier, éclairage, finitions." },
      { k: "Réalisation", v: "Fournisseurs, pose, livraison." },
    ],
  },
  {
    slug: "amenagement-urbanisme",
    n: "04",
    t: "Aménagement & urbanisme",
    short: "Études de faisabilité, espaces publics, coordination sécurité.",
    d: "Études de faisabilité, conception d'espaces publics, plans masse et coordination sécurité chantier — pour des quartiers et infrastructures résilients, intégrés à leur contexte urbain et social.",
    img: heroChantier,
    objectives: [
      "Concevoir des espaces urbains cohérents et fonctionnels",
      "Anticiper la croissance et les usages futurs",
      "Intégrer la dimension environnementale et sociale",
      "Faciliter l'instruction réglementaire des projets",
    ],
    deliverables: [
      "Études de faisabilité urbaine",
      "Plans masse & schémas d'usages",
      "Programmation & phasage opérationnel",
      "Coordination Sécurité et Protection de la Santé (SPS)",
    ],
    advantages: [
      "Urbaniste qualifié au sein de l'équipe",
      "Lecture fine du contexte congolais et africain",
      "Approche participative avec les parties prenantes",
      "Solutions durables et résilientes",
    ],
    gallery: [heroChantier, heroArch, heroModern],
    process: [
      { k: "Lecture", v: "Site, flux, contexte social." },
      { k: "Stratégie", v: "Programmation, phasage." },
      { k: "Plan", v: "Composition urbaine, équipements." },
      { k: "Mise en œuvre", v: "Coordination & suivi sécurité." },
    ],
  },
  {
    slug: "audits-techniques",
    n: "05",
    t: "Audits techniques",
    short: "Diagnostics réglementaires et contrôle des malfaçons.",
    d: "Diagnostics réglementaires, analyses de conformité, détection des malfaçons et anomalies affectant la sécurité et la durabilité d'un ouvrage. Inspections complètes, instrumentation et plan de remédiation chiffré.",
    img: heroChantier,
    objectives: [
      "Identifier les pathologies et anomalies d'un ouvrage",
      "Évaluer la sécurité et la conformité réglementaire",
      "Proposer un plan de remédiation chiffré",
      "Sécuriser l'investissement immobilier du client",
    ],
    deliverables: [
      "Rapport d'audit technique détaillé",
      "Plan de remédiation et estimation des coûts",
      "Constats, photos et recommandations",
      "Suivi des travaux correctifs",
    ],
    advantages: [
      "Ingénieurs civils expérimentés en pathologie du bâtiment",
      "Instrumentation et méthodologie rigoureuse",
      "Rapports indépendants opposables aux tiers",
      "Accompagnement complet jusqu'à la levée des réserves",
    ],
    gallery: [heroChantier, heroExpertise, heroArch],
    process: [
      { k: "Relevé", v: "Inspection complète & instrumentation." },
      { k: "Analyse", v: "Comparaison normes, criticité." },
      { k: "Rapport", v: "Constats, photos, recommandations." },
      { k: "Suivi", v: "Accompagnement des correctifs." },
    ],
  },
  {
    slug: "construction-execution",
    n: "06",
    t: "Construction & génie civil",
    short: "Réalisation d'ouvrages, du génie civil au second œuvre.",
    d: "Réalisation complète d'ouvrages : gros œuvre, génie civil, second œuvre et finitions. Pilotage des entreprises, contrôle qualité, gestion des coûts et respect des délais — du DCE jusqu'à la réception définitive.",
    img: heroGenie,
    objectives: [
      "Livrer des ouvrages durables et conformes au projet",
      "Maîtriser la qualité, les coûts et les délais",
      "Piloter et coordonner l'ensemble des entreprises",
      "Sécuriser le chantier et ses intervenants",
    ],
    deliverables: [
      "Dossier de Consultation des Entreprises (DCE)",
      "Planning maître & pilotage des lots",
      "Contrôle qualité et reporting régulier",
      "Réception des ouvrages et levée de réserves",
    ],
    advantages: [
      "Ingénieurs et conducteurs de travaux expérimentés",
      "Méthodologie éprouvée sur des projets complexes",
      "Reporting transparent au maître d'ouvrage",
      "Maîtrise des fournisseurs et sous-traitants locaux",
    ],
    gallery: [heroGenie, heroChantier, heroArch],
    process: [
      { k: "Préparation", v: "DCE, appels d'offres, planning maître." },
      { k: "Exécution", v: "Coordination quotidienne des intervenants." },
      { k: "Contrôle", v: "Qualité, sécurité, coûts." },
      { k: "Livraison", v: "Réception, levée de réserves." },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  cat: "Architecture" | "Intérieur" | "Mixte" | "Résidentiel" | "Animation 3D";
  year: string;
  location: string;
  surface: string;
  status: string;
  client: string;
  cover: string;
  gallery: string[];
  summary: string;
  description: string;
  context: string;
  objectives: string[];
  prestations: string[];
  results: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "residence-durable",
    title: "Résidence durable",
    cat: "Architecture",
    year: "2024",
    location: "Kinshasa, RDC",
    surface: "1 240 m²",
    status: "Livré",
    client: "Promoteur privé",
    cover: heroArch,
    gallery: [heroArch, heroModern, heroChantier, heroExpertise],
    summary: "Une résidence pensée pour le climat équatorial — ventilation naturelle, ombrage, matériaux locaux.",
    description: "Le projet articule trois volumes autour d'un patio planté. Les façades ventilées, les casquettes profondes et les claustras en bois local réduisent les apports thermiques tout en filtrant la lumière. Une attention particulière a été portée à la récupération des eaux pluviales et à l'utilisation de matériaux à faible empreinte carbone.",
    context: "Construction d'une résidence familiale haut de gamme en zone résidentielle de Kinshasa, dans un climat équatorial chaud et humide imposant une conception bioclimatique.",
    objectives: [
      "Concevoir une résidence durable adaptée au climat",
      "Optimiser l'éclairage naturel et la ventilation passive",
      "Valoriser les matériaux et savoir-faire locaux",
      "Maîtriser le budget et les délais",
    ],
    prestations: [
      "Étude de faisabilité & programmation",
      "Conception architecturale complète",
      "Permis de construire",
      "Suivi de chantier jusqu'à la réception",
    ],
    results: [
      "Réduction estimée de 35 % des besoins en climatisation",
      "Livraison conforme au planning initial",
      "Satisfaction client confirmée à la réception",
    ],
  },
  {
    slug: "maison-m1",
    title: "Maison M1",
    cat: "Résidentiel",
    year: "2023",
    location: "Kinshasa, RDC",
    surface: "320 m²",
    status: "Livré",
    client: "Particulier",
    cover: heroModern,
    gallery: [heroModern, heroArch, heroExpertise],
    summary: "Une maison familiale contemporaine, ouverte sur jardin.",
    description: "Plan en L, double hauteur dans le séjour, prolongement extérieur sous pergola. Matériaux : béton brut, bois sombre, enduit chaux. Une écriture épurée pour une famille jeune.",
    context: "Construction d'une villa familiale sur une parcelle en pente douce, avec vue dégagée sur le jardin existant.",
    objectives: [
      "Créer un cadre de vie lumineux et familial",
      "Articuler les espaces autour d'un jardin central",
      "Proposer une écriture architecturale contemporaine",
    ],
    prestations: [
      "Conception architecturale",
      "Plans d'exécution & détails",
      "Coordination des corps d'état",
      "Réception et suivi des réserves",
    ],
    results: [
      "Volumes lumineux et confortables toute l'année",
      "Budget tenu à 100 %",
      "Référence forte du cabinet en résidentiel haut de gamme",
    ],
  },
  {
    slug: "complexe-m2",
    title: "Complexe M2",
    cat: "Mixte",
    year: "2024",
    location: "Gombe, Kinshasa",
    surface: "4 800 m²",
    status: "En chantier",
    client: "Investisseur institutionnel",
    cover: heroChantier,
    gallery: [heroChantier, heroArch, heroModern, heroGenie, heroExpertise],
    summary: "Programme mixte : bureaux, commerces, logements.",
    description: "Un socle commerçant actif, un belvédère intermédiaire et des logements en attique avec vues lointaines. La compacité du plan favorise les circulations et limite l'emprise au sol.",
    context: "Projet mixte au cœur du quartier d'affaires de la Gombe, mêlant retail, bureaux et logements premium dans un seul ensemble.",
    objectives: [
      "Concevoir un programme mixte rentable et qualitatif",
      "Densifier sans sacrifier la qualité d'usage",
      "Intégrer le projet au tissu urbain de la Gombe",
      "Anticiper la maintenance et l'exploitation",
    ],
    prestations: [
      "Étude de faisabilité urbaine et financière",
      "Conception architecturale complète",
      "Dossier de permis de construire",
      "Assistance à maîtrise d'ouvrage en phase chantier",
    ],
    results: [
      "Chantier en cours, taux d'avancement maîtrisé",
      "Pré-commercialisation engagée sur les bureaux",
      "Démonstrateur d'un urbanisme mixte en RDC",
    ],
  },
  {
    slug: "villa-m3",
    title: "Villa M3",
    cat: "Résidentiel",
    year: "2023",
    location: "Kinshasa, RDC",
    surface: "540 m²",
    status: "Livré",
    client: "Particulier",
    cover: heroModern,
    gallery: [heroModern, heroArch, heroExpertise],
    summary: "Villa privée — composition horizontale en bandes minérales et végétales.",
    description: "Une succession de patios ponctue le parcours d'entrée. Les pierres locales dialoguent avec le bois et le verre. La maison s'étire au sol pour mieux capter les brises dominantes.",
    context: "Villa privée sur un grand terrain plat, demande d'un parti horizontal très ancré au sol.",
    objectives: [
      "Composer une horizontalité forte sur le terrain",
      "Créer une succession d'espaces semi-extérieurs",
      "Travailler avec la pierre et le bois locaux",
    ],
    prestations: [
      "Conception architecturale & design intérieur",
      "Plans d'exécution",
      "Direction des travaux",
      "Suivi des finitions et de la livraison",
    ],
    results: [
      "Confort thermique sans climatisation continue",
      "Livraison sur 14 mois conformément au planning",
      "Projet primé en interne pour son écriture",
    ],
  },
  {
    slug: "pavillon-p2",
    title: "Pavillon P2",
    cat: "Intérieur",
    year: "2023",
    location: "Kinshasa, RDC",
    surface: "180 m²",
    status: "Livré",
    client: "Société de services",
    cover: heroExpertise,
    gallery: [heroExpertise, heroModern, heroArch],
    summary: "Aménagement intérieur d'un pavillon d'accueil — matières chaleureuses.",
    description: "Cuirs patinés, bois huilé, laiton brossé. L'éclairage indirect dessine un parcours sensoriel pour accueillir clients et partenaires dans un cadre apaisé.",
    context: "Réaménagement complet d'un pavillon d'accueil clients pour une société de services premium.",
    objectives: [
      "Proposer une atmosphère apaisée et qualitative",
      "Améliorer l'expérience d'accueil des clients",
      "Mettre en valeur l'identité de la marque",
    ],
    prestations: [
      "Concept d'ambiance et direction artistique",
      "Plans d'aménagement intérieur",
      "Sélection mobilier et éclairage",
      "Coordination de pose et livraison",
    ],
    results: [
      "Nouvelle identité d'accueil saluée par les clients",
      "Délais respectés sur 8 semaines de chantier",
    ],
  },
  {
    slug: "design-interieur-residentiel",
    title: "Design intérieur résidentiel",
    cat: "Intérieur",
    year: "2024",
    location: "Kinshasa, RDC",
    surface: "210 m²",
    status: "Livré",
    client: "Particulier",
    cover: heroModern,
    gallery: [heroModern, heroExpertise, heroArch],
    summary: "Réaménagement complet d'un appartement familial.",
    description: "Plan ouvert, cuisine intégrée, bibliothèque toute hauteur. Palette terre, écru et noir profond pour un intérieur intemporel et chaleureux.",
    context: "Restructuration intérieure d'un appartement familial existant, avec optimisation des circulations et du rangement.",
    objectives: [
      "Décloisonner les espaces de vie",
      "Optimiser rangements et ergonomie",
      "Créer une atmosphère chaleureuse et intemporelle",
    ],
    prestations: [
      "Étude d'aménagement et plans techniques",
      "Conception du mobilier sur-mesure",
      "Direction artistique du chantier",
    ],
    results: [
      "Gain d'usage notable sur la même surface",
      "Livraison sur 10 semaines",
    ],
  },
];

export const PARTNERS: { name: string; tag: string }[] = [
  { name: "FINACTU", tag: "Maroc" },
  { name: "SCPT RDC", tag: "Télécoms" },
  { name: "FINCA RDC", tag: "Microfinance" },
  { name: "BG FIBANK", tag: "Banque" },
  { name: "SOS Villages d'Enfants", tag: "RDC" },
  { name: "KPMG RDC", tag: "Audit & conseil" },
  { name: "MEDIASPAUL SARL", tag: "Édition" },
  { name: "TECPRO BUSINESS SARLU", tag: "Services" },
  { name: "Conservateur Titres Immobiliers", tag: "Gombe" },
  { name: "Ordre des Architectes", tag: "RDC" },
  { name: "Cour d'Appel Kinshasa Gombe", tag: "Expert assermenté" },
  { name: "FEC", tag: "Fédération des Entreprises" },
];

export const TESTIMONIALS = [
  { q: "Grâce à BETAREX, le projet Bakassi a pris forme dans les délais, avec une qualité irréprochable.", a: "André T.", r: "Architecte — Projet Bakassi" },
  { q: "Une équipe disponible, compétente et tournée vers la satisfaction du client.", a: "Gaëtan Batteux", r: "Client résidentiel" },
  { q: "Leur approche innovante et collaborative fait réellement la différence sur le terrain.", a: "Yvon M.", r: "Chef d'entreprise" },
  { q: "Le sérieux des expertises et la précision des rapports nous ont convaincus dès la première mission.", a: "Priso K.", r: "Directeur immobilier" },
  { q: "Un cabinet qui conjugue rigueur technique et sensibilité architecturale. Rare.", a: "Jeannot L.", r: "Maître d'ouvrage" },
  { q: "Du cadrage au chantier, BETAREX a tenu chaque promesse. Notre référence en RDC.", a: "Yohorkem N.", r: "Investisseur" },
  { q: "Des intérieurs habités par la lumière. Nous y travaillons mieux, nous y vivons mieux.", a: "Clarisse M.", r: "Cliente — Pavillon P2" },
  { q: "Une équipe qui écoute, propose et exécute. Nous recommandons sans réserve.", a: "Henri B.", r: "Promoteur" },
];

export const MISSIONS = [
  { n: "01", t: "Concevoir", d: "Imaginer des espaces durables, fonctionnels et porteurs de sens, ancrés dans leur contexte." },
  { n: "02", t: "Expertiser", d: "Évaluer, diagnostiquer et conseiller avec la rigueur d'un cabinet assermenté." },
  { n: "03", t: "Réaliser", d: "Piloter chaque chantier avec exigence — qualité, coûts, délais maîtrisés." },
  { n: "04", t: "Transmettre", d: "Former, accompagner, partager une culture du bâti exigeante en RDC." },
];

export const VALUES = [
  { n: "I", t: "Professionnalisme", d: "Rigueur, méthode et respect des engagements à chaque étape du projet." },
  { n: "II", t: "Excellence technique", d: "Une exigence de précision, du premier croquis à la livraison finale." },
  { n: "III", t: "Intégrité & transparence", d: "Indépendance des avis, clarté des rapports, parole tenue." },
  { n: "IV", t: "Innovation & satisfaction", d: "Des solutions sur-mesure tournées vers la satisfaction durable du client." },
];

// Équipe BETAREX (effectif par profil)
export const TEAM_MEMBERS = [
  { role: "Experts immobiliers", count: 5, icon: "ClipboardCheck", d: "Évaluation, diagnostic et avis indépendants sur tout type d'actif." },
  { role: "Architectes", count: 3, icon: "Compass", d: "Conception, plans et direction artistique des projets." },
  { role: "Ingénieurs civils", count: 2, icon: "HardHat", d: "Structure, génie civil et suivi technique des ouvrages." },
  { role: "Urbaniste", count: 1, icon: "Map", d: "Études de faisabilité urbaine et programmation." },
  { role: "Graphiste", count: 1, icon: "Palette", d: "Direction visuelle, illustrations et rendus 3D." },
  { role: "Réceptionniste", count: 1, icon: "Smile", d: "Accueil, coordination et relation client au quotidien." },
];

// Domaines d'intervention détaillés
export const DOMAINS = [
  {
    t: "Expertise immobilière",
    icon: "Building2",
    items: [
      "Évaluation immobilière",
      "Valeur vénale",
      "Valeur locative",
      "États des lieux",
      "Garanties bancaires",
      "Crédits hypothécaires",
      "Successions",
      "Expropriations",
    ],
  },
  {
    t: "Architecture & Construction",
    icon: "Ruler",
    items: [
      "Conception architecturale",
      "Études de faisabilité",
      "Urbanisme",
      "Permis de construire",
      "Suivi des travaux",
      "Assistance à maîtrise d'ouvrage",
      "Dossiers d'appel d'offres",
      "Réception des ouvrages",
    ],
  },
];

// Méthodologie BETAREX (frise chronologique)
export const METHODOLOGY = [
  { n: "01", t: "Analyse des besoins", d: "Cadrage des attentes, du périmètre et des contraintes du projet." },
  { n: "02", t: "Collecte des documents", d: "Réunion des titres, plans, contrats et données techniques utiles." },
  { n: "03", t: "Visite du site", d: "Reconnaissance terrain, relevés et premières observations." },
  { n: "04", t: "Analyse technique", d: "Étude critique des données, identification des points clés." },
  { n: "05", t: "Étude et conception", d: "Élaboration des scénarios, plans et solutions techniques." },
  { n: "06", t: "Rédaction du rapport", d: "Synthèse des analyses et recommandations argumentées." },
  { n: "07", t: "Présentation des résultats", d: "Restitution claire et soutenance auprès du client." },
  { n: "08", t: "Accompagnement", d: "Suivi post-livraison et appui à la mise en œuvre des décisions." },
];

// Pourquoi choisir BETAREX
export const REASONS = [
  { t: "Une équipe hautement qualifiée", d: "Architectes, ingénieurs, experts et urbanistes au service de votre projet.", icon: "Users" },
  { t: "Une expertise reconnue", d: "Près d'une décennie d'interventions auprès d'institutions, banques et particuliers.", icon: "Award" },
  { t: "Une connaissance fine du marché", d: "Maîtrise du contexte réglementaire et économique congolais.", icon: "Globe2" },
  { t: "Indépendance et transparence", d: "Des avis libres, documentés et opposables aux tiers.", icon: "ShieldCheck" },
  { t: "Accompagnement personnalisé", d: "Chaque projet bénéficie d'un interlocuteur dédié, du cadrage à la livraison.", icon: "Handshake" },
  { t: "Standards internationaux", d: "Méthodologie rigoureuse, respect des délais et des normes du métier.", icon: "BadgeCheck" },
];
