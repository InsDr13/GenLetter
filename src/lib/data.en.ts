// English translations keyed by slug (services/projects) or by french t (other lists).
// Same shapes as src/lib/data.ts. Used by the i18n helpers in src/lib/use-content.ts.

import type { Project, Service } from "./data";

export const SERVICES_EN: Service[] = [
  {
    slug: "expertise-immobiliere",
    n: "01",
    t: "Real estate expertise",
    short: "Analysis, diagnosis and valuation — market, rental, mortgage.",
    d: "We deliver rigorous appraisals of real estate assets: document review, location study and value proposition. Our expert reports cover mortgage lending valuations, land values, expropriations, bank guarantees, successions and technical compliance diagnostics.",
    img: "" as unknown as string,
    objectives: [
      "Determine the true value of a property",
      "Secure transactions, guarantees and financing",
      "Provide an independent, enforceable technical opinion",
      "Support institutions, banks and individuals in their decisions",
    ],
    deliverables: [
      "Property valuation (market & rental)",
      "Reports for bank guarantees & mortgage loans",
      "Estate and expropriation appraisals",
      "Contradictory inventories of fixtures",
    ],
    advantages: [
      "Sworn real estate expert at the Kinshasa Gombe Court of Appeal",
      "Reports compliant with international standards",
      "Confidentiality and independence of opinions",
      "Controlled lead times and personalized support",
    ],
    gallery: [],
    process: [
      { k: "Framing", v: "Document review, scope, constraints." },
      { k: "Investigation", v: "Site visit, measurements, comparative analysis." },
      { k: "Valuation", v: "Modeling, scenarios, recommendations." },
      { k: "Deliverable", v: "Sworn report and presentation." },
    ],
  },
  {
    slug: "etudes-architecturales",
    n: "02",
    t: "Architectural studies",
    short: "From design plans to construction site supervision.",
    d: "Architectural design, feasibility studies and development projects. Full support up to obtaining the building permit and site supervision — for buildings that fit their site, use and budget.",
    img: "",
    objectives: [
      "Design functional, aesthetic and sustainable buildings",
      "Optimize use of the site and resources",
      "Ensure regulatory and technical compliance",
      "Support the client owner from first sketch to handover",
    ],
    deliverables: [
      "Feasibility studies & programming",
      "Sketches, schematic and detailed design, execution drawings",
      "Building permit application",
      "Tender packages & owner's representative services",
      "Site supervision and acceptance of works",
    ],
    advantages: [
      "Architect registered with the DRC National Order of Architects",
      "Multidisciplinary approach — architecture, engineering, urbanism",
      "Sustainable solutions adapted to the Congolese context",
      "Strict respect for deadlines and budget",
    ],
    gallery: [],
    process: [
      { k: "Diagnosis", v: "Site, program, regulatory constraints." },
      { k: "Sketch", v: "Architectural parti, volumes, atmospheres." },
      { k: "Project", v: "Technical details, materials, project economics." },
      { k: "Site", v: "Construction management, acceptance, reserve resolution." },
    ],
  },
  {
    slug: "design-interieur",
    n: "03",
    t: "Interior design",
    short: "Tailor-made interior architecture: materials, light, furniture.",
    d: "A sensory approach to space: we compose materials, light and volumes for interiors that tell a story and support daily use — private homes, offices and welcoming spaces.",
    img: "",
    objectives: [
      "Create unique interiors aligned with the client's identity",
      "Optimize ergonomics, comfort and quality of use",
      "Select durable materials and furniture",
      "Control the budget and the fit-out schedule",
    ],
    deliverables: [
      "Mood concept & moodboard",
      "Layout plans and detail sections",
      "Materials, furniture and lighting specification",
      "Artistic direction of the site until delivery",
    ],
    advantages: [
      "Experienced interior designers and architects",
      "Network of local and international suppliers",
      "Personalized approach project by project",
      "Full coordination of all trades",
    ],
    gallery: [],
    process: [
      { k: "Brief", v: "Lifestyle, uses, references." },
      { k: "Concept", v: "Moodboards, palette, sketches." },
      { k: "Detail", v: "Furniture, lighting, finishes." },
      { k: "Delivery", v: "Suppliers, installation, handover." },
    ],
  },
  {
    slug: "amenagement-urbanisme",
    n: "04",
    t: "Planning & urbanism",
    short: "Feasibility studies, public spaces, safety coordination.",
    d: "Feasibility studies, public-space design, masterplans and construction safety coordination — for resilient neighborhoods and infrastructure, integrated into their urban and social context.",
    img: "",
    objectives: [
      "Design coherent and functional urban spaces",
      "Anticipate growth and future uses",
      "Integrate environmental and social dimensions",
      "Facilitate regulatory approvals for projects",
    ],
    deliverables: [
      "Urban feasibility studies",
      "Masterplans & use schemes",
      "Programming & operational phasing",
      "Health and Safety Coordination (CSPS)",
    ],
    advantages: [
      "Qualified urban planner on the team",
      "Sharp reading of the Congolese and African context",
      "Participatory approach with stakeholders",
      "Sustainable and resilient solutions",
    ],
    gallery: [],
    process: [
      { k: "Reading", v: "Site, flows, social context." },
      { k: "Strategy", v: "Programming, phasing." },
      { k: "Plan", v: "Urban composition, amenities." },
      { k: "Implementation", v: "Coordination & safety monitoring." },
    ],
  },
  {
    slug: "audits-techniques",
    n: "05",
    t: "Technical audits",
    short: "Regulatory diagnostics and defect inspection.",
    d: "Regulatory diagnostics, compliance analyses, detection of defects and anomalies affecting the safety and durability of a structure. Full inspections, instrumentation and a costed remediation plan.",
    img: "",
    objectives: [
      "Identify pathologies and anomalies in a structure",
      "Assess safety and regulatory compliance",
      "Propose a costed remediation plan",
      "Secure the client's real estate investment",
    ],
    deliverables: [
      "Detailed technical audit report",
      "Remediation plan and cost estimate",
      "Findings, photos and recommendations",
      "Monitoring of corrective work",
    ],
    advantages: [
      "Civil engineers experienced in building pathology",
      "Rigorous instrumentation and methodology",
      "Independent reports enforceable against third parties",
      "Full support until reserves are lifted",
    ],
    gallery: [],
    process: [
      { k: "Survey", v: "Full inspection & instrumentation." },
      { k: "Analysis", v: "Comparison to standards, criticality." },
      { k: "Report", v: "Findings, photos, recommendations." },
      { k: "Follow-up", v: "Support for corrective measures." },
    ],
  },
  {
    slug: "construction-execution",
    n: "06",
    t: "Construction & civil engineering",
    short: "Building delivery, from civil works to finishes.",
    d: "Full execution of works: structural, civil engineering, finishing trades and finishes. Contractor management, quality control, cost management and on-time delivery — from tender to final acceptance.",
    img: "",
    objectives: [
      "Deliver durable works that match the design",
      "Master quality, cost and schedule",
      "Lead and coordinate all contractors",
      "Keep the site and its workers safe",
    ],
    deliverables: [
      "Tender package (DCE)",
      "Master schedule & package management",
      "Quality control and regular reporting",
      "Acceptance of works and reserve resolution",
    ],
    advantages: [
      "Experienced engineers and site managers",
      "Proven methodology on complex projects",
      "Transparent reporting to the client owner",
      "Strong grip on local suppliers and subcontractors",
    ],
    gallery: [],
    process: [
      { k: "Preparation", v: "Tender, bids, master schedule." },
      { k: "Execution", v: "Daily coordination of stakeholders." },
      { k: "Control", v: "Quality, safety, costs." },
      { k: "Delivery", v: "Acceptance, reserve resolution." },
    ],
  },
];

export const PROJECTS_EN: Partial<Project>[] = [
  {
    slug: "residence-durable",
    title: "Sustainable residence",
    cat: "Architecture",
    location: "Kinshasa, DRC",
    status: "Delivered",
    client: "Private developer",
    summary: "A residence designed for the equatorial climate — natural ventilation, shading, local materials.",
    description: "The project arranges three volumes around a planted patio. Ventilated facades, deep eaves and local wood claustras reduce thermal gains while filtering light. Particular attention has been paid to rainwater harvesting and low-carbon materials.",
    context: "Construction of a high-end family residence in a residential area of Kinshasa, in a hot and humid equatorial climate requiring bioclimatic design.",
    objectives: [
      "Design a sustainable residence adapted to the climate",
      "Optimize natural lighting and passive ventilation",
      "Showcase local materials and know-how",
      "Master budget and schedule",
    ],
    prestations: [
      "Feasibility study & programming",
      "Full architectural design",
      "Building permit",
      "Site supervision until handover",
    ],
    results: [
      "Estimated 35% reduction in cooling needs",
      "Delivered on the initial schedule",
      "Client satisfaction confirmed at handover",
    ],
  },
  {
    slug: "maison-m1",
    title: "House M1",
    cat: "Résidentiel",
    location: "Kinshasa, DRC",
    status: "Delivered",
    client: "Private individual",
    summary: "A contemporary family house, open to the garden.",
    description: "L-shaped plan, double-height living room, outdoor extension under a pergola. Materials: raw concrete, dark wood, lime render. A refined writing for a young family.",
    context: "Construction of a family villa on a gently sloping plot, with an open view over the existing garden.",
    objectives: [
      "Create a bright, family-friendly living environment",
      "Organize spaces around a central garden",
      "Propose a contemporary architectural style",
    ],
    prestations: [
      "Architectural design",
      "Execution drawings & details",
      "Trades coordination",
      "Acceptance and reserve monitoring",
    ],
    results: [
      "Bright, comfortable volumes year-round",
      "Budget kept at 100%",
      "Strong reference of the firm in high-end residential",
    ],
  },
  {
    slug: "complexe-m2",
    title: "Complex M2",
    cat: "Mixte",
    location: "Gombe, Kinshasa",
    status: "Under construction",
    client: "Institutional investor",
    summary: "Mixed-use program: offices, retail, housing.",
    description: "An active retail base, an intermediate belvedere and penthouse housing with distant views. The compact plan favors circulation and limits the footprint.",
    context: "Mixed-use project at the heart of the Gombe business district, combining retail, offices and premium housing in a single complex.",
    objectives: [
      "Design a profitable, high-quality mixed-use program",
      "Densify without sacrificing quality of use",
      "Integrate the project into the urban fabric of Gombe",
      "Anticipate maintenance and operations",
    ],
    prestations: [
      "Urban and financial feasibility study",
      "Full architectural design",
      "Building permit application",
      "Owner's representative services on site",
    ],
    results: [
      "Construction underway, controlled progress",
      "Pre-leasing engaged on offices",
      "A showcase of mixed urbanism in the DRC",
    ],
  },
  {
    slug: "villa-m3",
    title: "Villa M3",
    cat: "Résidentiel",
    location: "Kinshasa, DRC",
    status: "Delivered",
    client: "Private individual",
    summary: "Private villa — horizontal composition in mineral and plant bands.",
    description: "A succession of patios punctuates the entry sequence. Local stone dialogues with wood and glass. The house stretches along the ground to better capture the prevailing breezes.",
    context: "Private villa on a large flat plot, requiring a strongly grounded horizontal parti.",
    objectives: [
      "Compose a strong horizontality on the plot",
      "Create a sequence of semi-outdoor spaces",
      "Work with local stone and wood",
    ],
    prestations: [
      "Architectural design & interior design",
      "Execution drawings",
      "Construction management",
      "Finish supervision and handover",
    ],
    results: [
      "Thermal comfort without continuous cooling",
      "Delivery over 14 months as planned",
      "Project awarded internally for its style",
    ],
  },
  {
    slug: "pavillon-p2",
    title: "Pavilion P2",
    cat: "Intérieur",
    location: "Kinshasa, DRC",
    status: "Delivered",
    client: "Services company",
    summary: "Interior fit-out of a welcome pavilion — warm materials.",
    description: "Patinated leather, oiled wood, brushed brass. Indirect lighting traces a sensory path to welcome clients and partners in a calm setting.",
    context: "Full refit of a client welcome pavilion for a premium services company.",
    objectives: [
      "Offer a calm, high-quality atmosphere",
      "Improve the client welcome experience",
      "Highlight the brand's identity",
    ],
    prestations: [
      "Mood concept and artistic direction",
      "Interior layout plans",
      "Furniture and lighting selection",
      "Installation coordination and delivery",
    ],
    results: [
      "New welcome identity praised by clients",
      "Schedule met over 8 weeks of work",
    ],
  },
  {
    slug: "design-interieur-residentiel",
    title: "Residential interior design",
    cat: "Intérieur",
    location: "Kinshasa, DRC",
    status: "Delivered",
    client: "Private individual",
    summary: "Full refurbishment of a family apartment.",
    description: "Open plan, integrated kitchen, full-height library. Earth, ecru and deep-black palette for a timeless and warm interior.",
    context: "Interior restructuring of an existing family apartment, with optimized circulation and storage.",
    objectives: [
      "Open up the living spaces",
      "Optimize storage and ergonomics",
      "Create a warm and timeless atmosphere",
    ],
    prestations: [
      "Layout study and technical plans",
      "Custom furniture design",
      "Artistic direction on site",
    ],
    results: [
      "Notable gains in usability on the same surface",
      "Delivery over 10 weeks",
    ],
  },
];

export const MISSIONS_EN = [
  { n: "01", t: "Design", d: "Imagine sustainable, functional and meaningful spaces, anchored in their context." },
  { n: "02", t: "Appraise", d: "Evaluate, diagnose and advise with the rigor of a sworn firm." },
  { n: "03", t: "Build", d: "Lead every project with demand — quality, costs and schedules under control." },
  { n: "04", t: "Pass on", d: "Train, mentor and share a demanding building culture in the DRC." },
];

export const VALUES_EN = [
  { n: "I", t: "Professionalism", d: "Rigor, method and respect of commitments at every project stage." },
  { n: "II", t: "Technical excellence", d: "A demand for precision, from first sketch to final delivery." },
  { n: "III", t: "Integrity & transparency", d: "Independent opinions, clear reports, kept promises." },
  { n: "IV", t: "Innovation & satisfaction", d: "Tailor-made solutions geared to lasting client satisfaction." },
];

export const TEAM_MEMBERS_EN = [
  { role: "Real estate experts", icon: "ClipboardCheck", d: "Independent appraisal, diagnosis and opinions on any type of asset." },
  { role: "Architects", icon: "Compass", d: "Design, drawings and artistic direction of projects." },
  { role: "Civil engineers", icon: "HardHat", d: "Structure, civil engineering and technical site monitoring." },
  { role: "Urban planner", icon: "Map", d: "Urban feasibility studies and programming." },
  { role: "Graphic designer", icon: "Palette", d: "Visual direction, illustrations and 3D renderings." },
  { role: "Front desk", icon: "Smile", d: "Reception, coordination and day-to-day client relations." },
];

export const DOMAINS_EN = [
  {
    t: "Real estate expertise",
    icon: "Building2",
    items: [
      "Property valuation",
      "Market value",
      "Rental value",
      "Inventories of fixtures",
      "Bank guarantees",
      "Mortgage loans",
      "Successions",
      "Expropriations",
    ],
  },
  {
    t: "Architecture & Construction",
    icon: "Ruler",
    items: [
      "Architectural design",
      "Feasibility studies",
      "Urbanism",
      "Building permits",
      "Site supervision",
      "Owner's representative",
      "Tender packages",
      "Acceptance of works",
    ],
  },
];

export const METHODOLOGY_EN = [
  { n: "01", t: "Needs analysis", d: "Frame expectations, scope and project constraints." },
  { n: "02", t: "Document collection", d: "Gather titles, plans, contracts and useful technical data." },
  { n: "03", t: "Site visit", d: "Field survey, measurements and initial observations." },
  { n: "04", t: "Technical analysis", d: "Critical review of data, identification of key points." },
  { n: "05", t: "Study & design", d: "Development of scenarios, plans and technical solutions." },
  { n: "06", t: "Report drafting", d: "Synthesis of analyses and reasoned recommendations." },
  { n: "07", t: "Presentation of results", d: "Clear restitution and presentation to the client." },
  { n: "08", t: "Support", d: "Post-delivery follow-up and support implementing decisions." },
];

export const REASONS_EN = [
  { t: "A highly qualified team", d: "Architects, engineers, experts and planners serving your project.", icon: "Users" },
  { t: "Recognized expertise", d: "Nearly a decade of work with institutions, banks and individuals.", icon: "Award" },
  { t: "Deep market knowledge", d: "Mastery of the Congolese regulatory and economic context.", icon: "Globe2" },
  { t: "Independence and transparency", d: "Free, documented opinions, enforceable against third parties.", icon: "ShieldCheck" },
  { t: "Personalized support", d: "Each project gets a dedicated contact, from framing to delivery.", icon: "Handshake" },
  { t: "International standards", d: "Rigorous methodology, respect for deadlines and trade standards.", icon: "BadgeCheck" },
];

export const TESTIMONIALS_EN = [
  { q: "Thanks to BETAREX, the Bakassi project came to life on time, with flawless quality.", a: "André T.", r: "Architect — Bakassi project" },
  { q: "An available, competent team focused on client satisfaction.", a: "Gaëtan Batteux", r: "Residential client" },
  { q: "Their innovative and collaborative approach truly makes a difference on the ground.", a: "Yvon M.", r: "Business owner" },
  { q: "The seriousness of the expertise and the precision of the reports convinced us from day one.", a: "Priso K.", r: "Real estate director" },
  { q: "A firm that blends technical rigor and architectural sensitivity. Rare.", a: "Jeannot L.", r: "Project owner" },
  { q: "From framing to construction, BETAREX kept every promise. Our reference in the DRC.", a: "Yohorkem N.", r: "Investor" },
  { q: "Interiors filled with light. We work better there — we live better there.", a: "Clarisse M.", r: "Client — Pavilion P2" },
  { q: "A team that listens, proposes and executes. We recommend without reservation.", a: "Henri B.", r: "Developer" },
];

export const PARTNER_TAGS_EN: Record<string, string> = {
  "Maroc": "Morocco",
  "Télécoms": "Telecoms",
  "Microfinance": "Microfinance",
  "Banque": "Bank",
  "RDC": "DRC",
  "Audit & conseil": "Audit & consulting",
  "Édition": "Publishing",
  "Services": "Services",
  "Gombe": "Gombe",
  "Expert assermenté": "Sworn expert",
  "Fédération des Entreprises": "Business Federation",
};

export const CAT_EN: Record<string, string> = {
  "Architecture": "Architecture",
  "Résidentiel": "Residential",
  "Mixte": "Mixed-use",
  "Intérieur": "Interior",
  "Animation 3D": "3D animation",
};
