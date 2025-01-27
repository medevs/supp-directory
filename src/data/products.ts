import { categories } from "./categories";

export type Product = {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviews: number;
  pricing: string;
  description: string;
  tags: string[];
  category: string;
  featured: boolean;
  dealUrl?: string;
  visitUrl: string;
  bookmarks: number;
  dosage?: string;
  benefits?: string[];
  providers?: {
    name: string;
    rating: number;
    url: string;
    price: string;
  }[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Vitamin D3 + K2",
    logo: "https://placehold.co/60x60",
    rating: 4.8,
    reviews: 128,
    pricing: "$24.99",
    description: "High-potency vitamin D3 with K2 for optimal calcium absorption and bone health.",
    tags: ["bone health", "immune support", "heart health"],
    category: "Vitamins",
    featured: true,
    visitUrl: "https://example.com/vitamin-d3-k2",
    bookmarks: 245,
    dosage: "1 capsule daily",
    benefits: ["Supports bone health", "Enhances immune function", "Promotes heart health"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.8,
        url: "https://example.com/healthstore/vitamin-d3-k2",
        price: "$24.99"
      },
      {
        name: "VitaminWorld",
        rating: 4.7,
        url: "https://example.com/vitaminworld/d3-k2",
        price: "$22.99"
      },
      {
        name: "NatureShop",
        rating: 4.9,
        url: "https://example.com/natureshop/vitamin-d3-k2",
        price: "$25.99"
      }
    ]
  },
  {
    id: "2",
    name: "Magnesium Complex",
    logo: "https://placehold.co/60x60",
    rating: 4.6,
    reviews: 89,
    pricing: "$19.99",
    description: "Complete magnesium complex supporting muscle and nerve function.",
    tags: ["muscle health", "sleep support", "stress relief"],
    category: "Minerals",
    featured: false,
    visitUrl: "https://example.com/magnesium-complex",
    bookmarks: 156,
    dosage: "2 capsules daily",
    benefits: ["Muscle relaxation", "Better sleep", "Stress reduction"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.6,
        url: "https://example.com/healthstore/magnesium",
        price: "$19.99"
      },
      {
        name: "VitaminWorld",
        rating: 4.5,
        url: "https://example.com/vitaminworld/magnesium",
        price: "$18.99"
      },
      {
        name: "NatureShop",
        rating: 4.7,
        url: "https://example.com/natureshop/magnesium",
        price: "$20.99"
      }
    ]
  },
  {
    id: "3",
    name: "Whey Protein Isolate",
    logo: "https://placehold.co/60x60",
    rating: 4.9,
    reviews: 342,
    pricing: "$54.99",
    description: "Premium whey protein isolate for muscle recovery and growth.",
    tags: ["muscle growth", "recovery", "protein"],
    category: "Sports Nutrition",
    featured: true,
    dealUrl: "https://example.com/deal",
    visitUrl: "https://example.com",
    bookmarks: 567,
    dosage: "1 scoop post-workout",
    benefits: ["Muscle recovery", "Lean muscle growth", "Improved strength"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.9,
        url: "https://example.com/healthstore/whey-protein-isolate",
        price: "$54.99"
      },
      {
        name: "VitaminWorld",
        rating: 4.8,
        url: "https://example.com/vitaminworld/whey-protein",
        price: "$52.99"
      },
      {
        name: "NatureShop",
        rating: 5.0,
        url: "https://example.com/natureshop/whey-protein-isolate",
        price: "$55.99"
      }
    ]
  },
  {
    id: "4",
    name: "Ashwagandha Extract",
    logo: "https://placehold.co/60x60",
    rating: 4.7,
    reviews: 213,
    pricing: "$29.99",
    description: "Traditional herb for stress relief and mental clarity.",
    tags: ["stress relief", "adaptogen", "mental clarity"],
    category: "Herbal",
    featured: false,
    visitUrl: "https://example.com/ashwagandha-extract",
    bookmarks: 324,
    dosage: "1 capsule twice daily",
    benefits: ["Stress reduction", "Better sleep", "Enhanced focus"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.7,
        url: "https://example.com/healthstore/ashwagandha",
        price: "$29.99"
      },
      {
        name: "VitaminWorld",
        rating: 4.6,
        url: "https://example.com/vitaminworld/ashwagandha",
        price: "$28.99"
      },
      {
        name: "NatureShop",
        rating: 4.8,
        url: "https://example.com/natureshop/ashwagandha",
        price: "$30.99"
      }
    ]
  },
  {
    id: "5",
    name: "Omega-3 Fish Oil",
    logo: "https://placehold.co/60x60",
    rating: 4.5,
    reviews: 167,
    pricing: "$34.99",
    description: "High-quality fish oil for heart and brain health.",
    tags: ["heart health", "brain function", "joint health"],
    category: "Supplements",
    featured: true,
    dealUrl: "https://example.com/deal",
    visitUrl: "https://example.com",
    bookmarks: 289,
    dosage: "2 softgels daily",
    benefits: ["Heart health", "Brain function", "Joint support"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.5,
        url: "https://example.com/healthstore/omega-3",
        price: "$34.99"
      },
      {
        name: "VitaminWorld",
        rating: 4.4,
        url: "https://example.com/vitaminworld/omega-3",
        price: "$33.99"
      },
      {
        name: "NatureShop",
        rating: 4.6,
        url: "https://example.com/natureshop/omega-3",
        price: "$35.99"
      }
    ]
  },
  {
    id: "6",
    name: "Zinc + Copper Balance",
    logo: "https://placehold.co/60x60",
    rating: 4.4,
    reviews: 78,
    pricing: "$15.99",
    description: "Balanced zinc and copper formula for immune support.",
    tags: ["immune health", "skin health", "mineral balance"],
    category: "Minerals",
    featured: false,
    visitUrl: "https://example.com/zinc-copper-balance",
    bookmarks: 134,
    dosage: "1 tablet daily",
    benefits: ["Immune support", "Skin health", "Enzyme function"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.4,
        url: "https://example.com/healthstore/zinc-copper",
        price: "$15.99"
      },
      {
        name: "VitaminWorld",
        rating: 4.3,
        url: "https://example.com/vitaminworld/zinc-copper",
        price: "$14.99"
      },
      {
        name: "NatureShop",
        rating: 4.5,
        url: "https://example.com/natureshop/zinc-copper",
        price: "$16.99"
      }
    ]
  },
  {
    id: "7",
    name: "Pre-Workout Energy",
    logo: "https://placehold.co/60x60",
    rating: 4.8,
    reviews: 256,
    pricing: "$39.99",
    description: "Advanced pre-workout formula for enhanced performance.",
    tags: ["energy", "focus", "performance"],
    category: "Sports Nutrition",
    featured: true,
    visitUrl: "https://example.com/pre-workout-energy",
    bookmarks: 445,
    dosage: "1 scoop 30min before workout",
    benefits: ["Enhanced energy", "Mental focus", "Improved performance"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.8,
        url: "https://example.com/healthstore/pre-workout",
        price: "$39.99"
      },
      {
        name: "VitaminWorld",
        rating: 4.7,
        url: "https://example.com/vitaminworld/pre-workout",
        price: "$38.99"
      },
      {
        name: "NatureShop",
        rating: 4.9,
        url: "https://example.com/natureshop/pre-workout",
        price: "$40.99"
      }
    ]
  },
  {
    id: "8",
    name: "Turmeric Curcumin",
    logo: "https://placehold.co/60x60",
    rating: 4.6,
    reviews: 189,
    pricing: "$27.99",
    description: "High-potency turmeric extract with enhanced absorption.",
    tags: ["inflammation", "joint health", "antioxidant"],
    category: "Herbal",
    featured: false,
    visitUrl: "https://example.com/turmeric-curcumin",
    bookmarks: 267,
    dosage: "2 capsules daily",
    benefits: ["Joint support", "Antioxidant protection", "Immune support"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.6,
        url: "https://example.com/healthstore/turmeric",
        price: "$27.99"
      },
      {
        name: "VitaminWorld",
        rating: 4.5,
        url: "https://example.com/vitaminworld/turmeric",
        price: "$26.99"
      },
      {
        name: "NatureShop",
        rating: 4.7,
        url: "https://example.com/natureshop/turmeric",
        price: "$28.99"
      }
    ]
  },
  {
    id: "9",
    name: "Fish Oil Complex",
    logo: "https://placehold.co/60x60",
    rating: 4.7,
    reviews: 178,
    pricing: "$32.99",
    description: "High-quality fish oil complex with EPA and DHA for heart and brain health.",
    tags: ["heart health", "brain health", "omega-3"],
    category: "Supplements",
    featured: true,
    visitUrl: "https://example.com/fish-oil-complex",
    bookmarks: 289,
    dosage: "2 softgels daily",
    benefits: ["Heart health", "Brain function", "Joint support"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.7,
        url: "https://example.com/healthstore/fish-oil",
        price: "$32.99"
      },
      {
        name: "VitaminWorld",
        rating: 4.6,
        url: "https://example.com/vitaminworld/fish-oil",
        price: "$31.99"
      }
    ]
  },
  {
    id: "10",
    name: "Calcium + D3",
    logo: "https://placehold.co/60x60",
    rating: 4.5,
    reviews: 145,
    pricing: "$19.99",
    description: "Complete calcium supplement with vitamin D3 for optimal absorption.",
    tags: ["bone health", "calcium", "vitamin d"],
    category: "Minerals",
    featured: false,
    visitUrl: "https://example.com/calcium-d3",
    bookmarks: 198,
    dosage: "2 tablets daily",
    benefits: ["Bone strength", "Teeth health", "Muscle function"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.5,
        url: "https://example.com/healthstore/calcium",
        price: "$19.99"
      }
    ]
  },
  {
    id: "11",
    name: "BCAA Recovery",
    logo: "https://placehold.co/60x60",
    rating: 4.8,
    reviews: 267,
    pricing: "$44.99",
    description: "Branched-chain amino acids for muscle recovery and growth.",
    tags: ["muscle recovery", "amino acids", "performance"],
    category: "Sports Nutrition",
    featured: true,
    visitUrl: "https://example.com/bcaa-recovery",
    bookmarks: 356,
    dosage: "1 scoop during workout",
    benefits: ["Muscle recovery", "Reduced soreness", "Muscle preservation"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.8,
        url: "https://example.com/healthstore/bcaa",
        price: "$44.99"
      }
    ]
  },
  {
    id: "12",
    name: "Probiotics Plus",
    logo: "https://placehold.co/60x60",
    rating: 4.6,
    reviews: 198,
    pricing: "$29.99",
    description: "Advanced probiotic blend for gut health and immune support.",
    tags: ["gut health", "immune support", "digestion"],
    category: "Supplements",
    featured: false,
    visitUrl: "https://example.com/probiotics-plus",
    bookmarks: 245,
    dosage: "1 capsule daily",
    benefits: ["Gut health", "Immune support", "Digestive balance"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.6,
        url: "https://example.com/healthstore/probiotics",
        price: "$29.99"
      }
    ]
  },
  {
    id: "13",
    name: "Green Tea Extract",
    logo: "https://placehold.co/60x60",
    rating: 4.5,
    reviews: 156,
    pricing: "$24.99",
    description: "Concentrated green tea extract for antioxidant support and metabolism.",
    tags: ["antioxidant", "metabolism", "energy"],
    category: "Herbal",
    featured: false,
    visitUrl: "https://example.com/green-tea-extract",
    bookmarks: 178,
    dosage: "1 capsule twice daily",
    benefits: ["Antioxidant protection", "Metabolism support", "Energy boost"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.5,
        url: "https://example.com/healthstore/green-tea",
        price: "$24.99"
      }
    ]
  },
  {
    id: "14",
    name: "Collagen Peptides",
    logo: "https://placehold.co/60x60",
    rating: 4.7,
    reviews: 210,
    pricing: "$39.99",
    description: "Hydrolyzed collagen peptides for skin, hair, and joint health.",
    tags: ["skin health", "joint support", "hair health"],
    category: "Supplements",
    featured: true,
    visitUrl: "https://example.com/collagen-peptides",
    bookmarks: 300,
    dosage: "1 scoop daily",
    benefits: ["Skin elasticity", "Joint support", "Hair strength"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.7,
        url: "https://example.com/healthstore/collagen",
        price: "$39.99"
      }
    ]
  },
  {
    id: "15",
    name: "Electrolyte Powder",
    logo: "https://placehold.co/60x60",
    rating: 4.6,
    reviews: 180,
    pricing: "$19.99",
    description: "Hydration support with essential electrolytes for optimal performance.",
    tags: ["hydration", "performance", "energy"],
    category: "Sports Nutrition",
    featured: false,
    visitUrl: "https://example.com/electrolyte-powder",
    bookmarks: 220,
    dosage: "1 scoop in water",
    benefits: ["Hydration", "Energy boost", "Muscle function"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.6,
        url: "https://example.com/healthstore/electrolyte",
        price: "$19.99"
      }
    ]
  },
  {
    id: "16",
    name: "Vitamin C + Zinc",
    logo: "https://placehold.co/60x60",
    rating: 4.8,
    reviews: 150,
    pricing: "$14.99",
    description: "Powerful immune support with vitamin C and zinc.",
    tags: ["immune support", "antioxidant", "vitamin c"],
    category: "Vitamins",
    featured: true,
    visitUrl: "https://example.com/vitamin-c-zinc",
    bookmarks: 190,
    dosage: "1 tablet daily",
    benefits: ["Immune support", "Antioxidant protection"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.8,
        url: "https://example.com/healthstore/vitamin-c",
        price: "$14.99"
      }
    ]
  },
  {
    id: "17",
    name: "Maca Root Powder",
    logo: "https://placehold.co/60x60",
    rating: 4.5,
    reviews: 130,
    pricing: "$22.99",
    description: "Natural energy booster and hormone balance support.",
    tags: ["energy", "hormone balance", "adaptogen"],
    category: "Herbal",
    featured: false,
    visitUrl: "https://example.com/maca-root",
    bookmarks: 160,
    dosage: "1 teaspoon daily",
    benefits: ["Energy boost", "Hormone balance", "Stress relief"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.5,
        url: "https://example.com/healthstore/maca",
        price: "$22.99"
      }
    ]
  },
  {
    id: "18",
    name: "L-Carnitine",
    logo: "https://placehold.co/60x60",
    rating: 4.6,
    reviews: 200,
    pricing: "$29.99",
    description: "Supports fat metabolism and energy production.",
    tags: ["fat loss", "energy", "performance"],
    category: "Sports Nutrition",
    featured: true,
    visitUrl: "https://example.com/l-carnitine",
    bookmarks: 250,
    dosage: "1 capsule daily",
    benefits: ["Fat metabolism", "Energy production"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.6,
        url: "https://example.com/healthstore/l-carnitine",
        price: "$29.99"
      }
    ]
  },
  {
    id: "19",
    name: "Chia Seeds",
    logo: "https://placehold.co/60x60",
    rating: 4.7,
    reviews: 175,
    pricing: "$12.99",
    description: "Rich in omega-3 fatty acids and fiber for overall health.",
    tags: ["fiber", "omega-3", "superfood"],
    category: "Supplements",
    featured: false,
    visitUrl: "https://example.com/chia-seeds",
    bookmarks: 210,
    dosage: "1 tablespoon daily",
    benefits: ["Heart health", "Digestive health", "Energy boost"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.7,
        url: "https://example.com/healthstore/chia-seeds",
        price: "$12.99"
      }
    ]
  },
  {
    id: "20",
    name: "Spirulina Powder",
    logo: "https://placehold.co/60x60",
    rating: 4.8,
    reviews: 190,
    pricing: "$24.99",
    description: "Nutrient-dense superfood for energy and immune support.",
    tags: ["superfood", "energy", "immune support"],
    category: "Herbal",
    featured: true,
    visitUrl: "https://example.com/spirulina",
    bookmarks: 230,
    dosage: "1 teaspoon daily",
    benefits: ["Energy boost", "Immune support"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.8,
        url: "https://example.com/healthstore/spirulina",
        price: "$24.99"
      }
    ]
  },
  {
    id: "21",
    name: "Beetroot Powder",
    logo: "https://placehold.co/60x60",
    rating: 4.6,
    reviews: 160,
    pricing: "$19.99",
    description: "Supports cardiovascular health and exercise performance.",
    tags: ["cardiovascular", "performance", "energy"],
    category: "Supplements",
    featured: false,
    visitUrl: "https://example.com/beetroot-powder",
    bookmarks: 180,
    dosage: "1 teaspoon daily",
    benefits: ["Heart health", "Exercise performance"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.6,
        url: "https://example.com/healthstore/beetroot",
        price: "$19.99"
      }
    ]
  },
  {
    id: "22",
    name: "Cinnamon Extract",
    logo: "https://placehold.co/60x60",
    rating: 4.5,
    reviews: 140,
    pricing: "$16.99",
    description: "Supports healthy blood sugar levels and metabolism.",
    tags: ["blood sugar", "metabolism", "herbal"],
    category: "Herbal",
    featured: false,
    visitUrl: "https://example.com/cinnamon-extract",
    bookmarks: 150,
    dosage: "1 capsule daily",
    benefits: ["Blood sugar support", "Metabolism boost"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.5,
        url: "https://example.com/healthstore/cinnamon",
        price: "$16.99"
      }
    ]
  },
  {
    id: "23",
    name: "Ginger Root Extract",
    logo: "https://placehold.co/60x60",
    rating: 4.7,
    reviews: 155,
    pricing: "$18.99",
    description: "Supports digestive health and reduces nausea.",
    tags: ["digestive health", "nausea", "herbal"],
    category: "Herbal",
    featured: true,
    visitUrl: "https://example.com/ginger-root",
    bookmarks: 170,
    dosage: "1 capsule daily",
    benefits: ["Digestive support", "Nausea relief"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.7,
        url: "https://example.com/healthstore/ginger",
        price: "$18.99"
      }
    ]
  },
  {
    id: "24",
    name: "Flaxseed Oil",
    logo: "https://placehold.co/60x60",
    rating: 4.6,
    reviews: 165,
    pricing: "$21.99",
    description: "Rich source of omega-3 fatty acids for heart health.",
    tags: ["heart health", "omega-3", "supplement"],
    category: "Supplements",
    featured: false,
    visitUrl: "https://example.com/flaxseed-oil",
    bookmarks: 190,
    dosage: "2 softgels daily",
    benefits: ["Heart health", "Omega-3 support"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.6,
        url: "https://example.com/healthstore/flaxseed",
        price: "$21.99"
      }
    ]
  },
  {
    id: "25",
    name: "Resveratrol",
    logo: "https://placehold.co/60x60",
    rating: 4.8,
    reviews: 200,
    pricing: "$29.99",
    description: "Powerful antioxidant for heart health and longevity.",
    tags: ["antioxidant", "heart health", "longevity"],
    category: "Supplements",
    featured: true,
    visitUrl: "https://example.com/resveratrol",
    bookmarks: 220,
    dosage: "1 capsule daily",
    benefits: ["Antioxidant protection", "Heart health"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.8,
        url: "https://example.com/healthstore/resveratrol",
        price: "$29.99"
      }
    ]
  },
  {
    id: "26",
    name: "CoQ10",
    logo: "https://placehold.co/60x60",
    rating: 4.7,
    reviews: 190,
    pricing: "$34.99",
    description: "Supports heart health and energy production.",
    tags: ["heart health", "energy", "antioxidant"],
    category: "Supplements",
    featured: false,
    visitUrl: "https://example.com/coq10",
    bookmarks: 210,
    dosage: "1 capsule daily",
    benefits: ["Heart health", "Energy production"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.7,
        url: "https://example.com/healthstore/coq10",
        price: "$34.99"
      }
    ]
  },
  {
    id: "27",
    name: "Vitamin B Complex",
    logo: "https://placehold.co/60x60",
    rating: 4.6,
    reviews: 180,
    pricing: "$19.99",
    description: "Essential B vitamins for energy and metabolism.",
    tags: ["energy", "metabolism", "vitamin b"],
    category: "Vitamins",
    featured: true,
    visitUrl: "https://example.com/vitamin-b-complex",
    bookmarks: 200,
    dosage: "1 tablet daily",
    benefits: ["Energy support", "Metabolism boost"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.6,
        url: "https://example.com/healthstore/vitamin-b",
        price: "$19.99"
      }
    ]
  },
  {
    id: "28",
    name: "Hyaluronic Acid",
    logo: "https://placehold.co/60x60",
    rating: 4.5,
    reviews: 150,
    pricing: "$24.99",
    description: "Supports skin hydration and joint health.",
    tags: ["skin health", "joint support", "hydration"],
    category: "Supplements",
    featured: false,
    visitUrl: "https://example.com/hyaluronic-acid",
    bookmarks: 170,
    dosage: "1 capsule daily",
    benefits: ["Skin hydration", "Joint support"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.5,
        url: "https://example.com/healthstore/hyaluronic",
        price: "$24.99"
      }
    ]
  },
  {
    id: "29",
    name: "Selenium",
    logo: "https://placehold.co/60x60",
    rating: 4.6,
    reviews: 160,
    pricing: "$15.99",
    description: "Essential mineral for antioxidant support and thyroid health.",
    tags: ["antioxidant", "thyroid health", "mineral"],
    category: "Minerals",
    featured: true,
    visitUrl: "https://example.com/selenium",
    bookmarks: 180,
    dosage: "1 tablet daily",
    benefits: ["Antioxidant support", "Thyroid health"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.6,
        url: "https://example.com/healthstore/selenium",
        price: "$15.99"
      }
    ]
  },
  {
    id: "30",
    name: "Milk Thistle",
    logo: "https://placehold.co/60x60",
    rating: 4.7,
    reviews: 170,
    pricing: "$22.99",
    description: "Supports liver health and detoxification.",
    tags: ["liver health", "detox", "herbal"],
    category: "Herbal",
    featured: false,
    visitUrl: "https://example.com/milk-thistle",
    bookmarks: 190,
    dosage: "1 capsule daily",
    benefits: ["Liver support", "Detoxification"],
    providers: [
      {
        name: "HealthStore",
        rating: 4.7,
        url: "https://example.com/healthstore/milk-thistle",
        price: "$22.99"
      }
    ]
  }
];
