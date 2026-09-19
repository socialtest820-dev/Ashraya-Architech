export type ProjectImage = {
  src: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  sector: string;
  location: string;
  year: string;
  status: "Completed" | "Ongoing" | "Under Construction" | "Concept";
  services: string[];
  area: string;
  summary: string;
  story: string[];
  cover: string;
  video?: string;
  featured?: boolean;
  images: ProjectImage[];
};

const img = (name: string) => `/assets/projects/${name}.jpg`;

export const projects: Project[] = [
  {
    slug: "nilkanth-skyline",
    title: "Nilkanth Skyline",
    type: "Residential Development",
    sector: "Real Estate Development",
    location: "Surat, Gujarat",
    year: "2025 — Ongoing",
    status: "Under Construction",
    services: ["Architecture", "3D Development / Architectural Visualization", "Real-estate Design Communication"],
    area: "Multi-tower residential development",
    summary:
      "A high-rise residential development composed as a series of slender vertical volumes, shaped by light, rhythm and long city views.",
    story: [
      "Nilkanth Skyline is a flagship residential development that condenses Ashraya's design thinking into a vertical format: clear planning, calm facades and homes oriented toward light and ventilation.",
      "The massing is organised as slender vertical volumes rather than a single heavy block. This keeps every apartment corner-oriented, shortens internal corridors and gives the development a light, rhythmic presence on the skyline.",
      "Facade bays are sized to shade glazing from the high Gujarat sun while preserving open views. Balcony lines and vertical fins establish a repeated rhythm that reads clearly from a distance and scales down to intimate detail at street level.",
      "As the practice's featured launch case study, the project also demonstrates our visualization capability — the rendered views shown here were developed in-house as design and communication tools, not afterthoughts."
    ],
    cover: img("skyline-01"),
    featured: true,
    images: [
      { src: img("skyline-01"), caption: "Development skyline — tower cluster view" },
      { src: img("skyline-02"), caption: "Arrival elevation at dusk" },
      { src: img("skyline-03"), caption: "Tower base and podium landscape" },
      { src: img("skyline-04"), caption: "Facade rhythm and vertical fins" },
      { src: img("skyline-05"), caption: "Residence balcony detail" },
      { src: img("skyline-06"), caption: "Podium court and amenity deck" },
      { src: img("skyline-07"), caption: "Corner living space toward the city" },
      { src: img("skyline-08"), caption: "Evening ambience, amenity level" },
      { src: img("skyline-09"), caption: "Towers in context, day view" },
      { src: img("skyline-10"), caption: "Vertical circulation study" },
      { src: img("skyline-11"), caption: "Pool court between volumes" },
      { src: img("skyline-12"), caption: "Twilight view from the approach road" }
    ]
  },
  {
    slug: "swarnbhumi",
    title: "Swarnbhumi",
    type: "Township Planning",
    sector: "Township / Urban Development",
    location: "Gujarat, India",
    year: "2024 — Ongoing",
    status: "Ongoing",
    services: ["Urban Design", "Master Planning", "Architecture", "3D Development / Architectural Visualization"],
    area: "Township master plan",
    summary:
      "A township master plan organised around green corridors, slow movement and a clear hierarchy of plots, streets and shared open space.",
    story: [
      "Swarnbhumi extends Ashraya's work to the scale of urban structure. The master plan sets a clear hierarchy: primary movement spines, quiet residential clusters and a connected network of green open space.",
      "The plan prioritises walkability. Schools, daily retail and community facilities sit within short walking distances of residential clusters, and shaded pedestrian paths follow the natural desire lines between them.",
      "Landscape is treated as infrastructure — the green corridors manage monsoon water, temper the microclimate and give the township its identity, rather than acting as leftover space between plots.",
      "The walkthrough film shown on this page was produced in-house to communicate the character of the place to stakeholders and future residents."
    ],
    cover: img("swarnbhumi-01"),
    video: "/assets/hero/swarnbhumi-walkthrough.mp4",
    featured: true,
    images: [
      { src: img("swarnbhumi-01"), caption: "Central green and community spine" },
      { src: img("swarnbhumi-02"), caption: "Residential cluster edge" },
      { src: img("swarnbhumi-03"), caption: "Primary street character" },
      { src: img("swarnbhumi-04"), caption: "Water court and monsoon landscape" },
      { src: img("swarnbhumi-05"), caption: "Community pavilion" },
      { src: img("swarnbhumi-06"), caption: "Pedestrian promenade" },
      { src: img("swarnbhumi-07"), caption: "Township entry sequence" }
    ]
  },
  {
    slug: "the-empire",
    title: "The Empire",
    type: "Commercial Building",
    sector: "Commercial / Office Buildings",
    location: "Surat, Gujarat",
    year: "2026 — Concept",
    status: "Concept",
    services: ["Architecture", "Interior Design", "3D Development / Architectural Visualization"],
    area: "Commercial / office development",
    summary:
      "A commercial address with a strong vertical identity — layered stone, deep vertical glazing and a calm, businesslike presence.",
    story: [
      "The Empire is a commercial development concept designed to project stability and clarity. The building reads as a single confident volume, articulated by a disciplined facade of vertical fins and glazing.",
      "The ground level is designed as a public threshold — a double-height lobby and covered approach that gives tenants a dignified arrival and separates service movement from visitor movement.",
      "Floor plates favour planning efficiency: regular structural grids, full-floor flexibility and service cores positioned to keep maximum frontage usable. Material studies pair warm stone tones with deep glazing to balance solidity with daylight.",
      "Concept visualisations shown here were developed in-house to test massing, material character and street presence with the client."
    ],
    cover: img("empire-01"),
    featured: true,
    images: [
      { src: img("empire-01"), caption: "Concept massing — corner presence" },
      { src: img("empire-02"), caption: "Facade material study" },
      { src: img("empire-03"), caption: "Street elevation, daylight study" },
      { src: img("empire-04"), caption: "Entrance and approach sequence" },
      { src: img("empire-05"), caption: "Vertical fin detail study" },
      { src: img("empire-06"), caption: "Evening lighting concept" },
      { src: img("empire-07"), caption: "Building in urban context" }
    ]
  },
  {
    slug: "valsad-bungalow",
    title: "Valsad Bungalow",
    type: "Private Residence",
    sector: "Residential / Housing",
    location: "Valsad, Gujarat",
    year: "2024 — Ongoing",
    status: "Ongoing",
    services: ["Architecture", "Interior Design", "Tendering & Construction Documentation"],
    area: "Private bungalow",
    summary:
      "A private bungalow composed around a shaded central volume, with deep verandahs mediating between garden and interior.",
    story: [
      "Valsad Bungalow is a private residence for a family that wanted openness without exposure. The plan wraps living spaces around a shaded central volume, with verandahs deep enough to make the garden usable through Gujarat's long summers.",
      "Openings are grouped to pull cross-ventilation through the main rooms, and the verandah roof throws deep shadow across the inner facade during the hottest hours.",
      "The material palette keeps to a quiet register — plaster, stone and timber — so that the garden and the changing light carry the visual life of the house.",
      "Ashraya is delivering the project from concept through tendering and construction documentation, maintaining design intent into working drawings."
    ],
    cover: img("vimal-01"),
    featured: true,
    images: [
      { src: img("vimal-01"), caption: "Garden elevation — verandah edge" },
      { src: img("vimal-02"), caption: "Principal facade with shaded openings" }
    ]
  },
  {
    slug: "tithal-farmhouse",
    title: "Tithal Farmhouse",
    type: "Weekend Retreat",
    sector: "Hospitality",
    location: "Tithal, Gujarat",
    year: "Concept stage",
    status: "Concept",
    services: ["Architecture", "Master Planning"],
    area: "Weekend retreat",
    summary:
      "A weekend retreat near the coast, planned as a loose cluster of shaded pavilions that open to the landscape between them.",
    story: [
      "Tithal Farmhouse is conceived as a retreat that dissolves the boundary between shelter and landscape. Rather than a single mass, the plan proposes a loose cluster of pavilions — living, resting and gathering — connected by shaded walkways.",
      "Roof forms are calibrated for monsoon rainfall and sea-air exposure, and each pavilion orients to its own frame of garden and sky.",
      "The project is currently in early design; imagery and site details will be published as the design develops."
    ],
    cover: "",
    images: []
  },
  {
    slug: "uttam-bungalow",
    title: "Uttam Bungalow",
    type: "Private Residence",
    sector: "Residential / Housing",
    location: "Gujarat, India",
    year: "Ongoing",
    status: "Ongoing",
    services: ["Architecture", "Interior Design", "3D Development / Architectural Visualization"],
    area: "Private bungalow",
    summary:
      "A family residence organised around a clear central axis, pairing formal arrival with informal garden-facing living spaces.",
    story: [
      "Uttam Bungalow separates the formal and informal life of the house along a single clear axis: arrival and reception on one side, garden-facing family spaces on the other.",
      "Bedroom volumes are placed to catch morning light while remaining shielded from afternoon heat, and service zones are consolidated into a compact rear band.",
      "The project is in active documentation; imagery will follow as construction progresses."
    ],
    cover: "",
    images: []
  },
  {
    slug: "casa-ceilo",
    title: "Casa Ceilo",
    type: "Villa",
    sector: "Residential / Housing",
    location: "Gujarat, India",
    year: "Concept stage",
    status: "Concept",
    services: ["Architecture", "3D Development / Architectural Visualization"],
    area: "Private villa",
    summary:
      "A villa concept composed of stacked horizontal slabs, opening every principal room to sky and terrace.",
    story: [
      "Casa Ceilo studies how far a villa can open itself to the sky while keeping privacy from its neighbours. Stacked horizontal slabs carry deep overhangs, and the principal rooms extend into covered terraces.",
      "The section steps with the site so that each level keeps a clear view line over the roof below.",
      "The project is in concept development; visuals will be published when the design direction is approved."
    ],
    cover: "",
    images: []
  }
];

export const allProjectImages = projects.flatMap((project) =>
  project.images.map((imageItem, imageIndex) => ({
    ...imageItem,
    projectTitle: project.title,
    projectSlug: project.slug,
    imageIndex
  }))
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const sectors = [
  "Residential / Housing",
  "Commercial / Office Buildings",
  "Real Estate Development",
  "Township / Urban Development",
  "Hospitality"
];

export const projectStatuses = ["Completed", "Ongoing", "Under Construction", "Concept"] as const;
