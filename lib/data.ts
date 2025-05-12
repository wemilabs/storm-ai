export const AREAS = [
  { value: "iot", label: "Internet of Things (IoT)" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "ai", label: "Artificial Intelligence (AI)" },
  { value: "law", label: "Legal Tech" },
  { value: "health", label: "Healthcare" },
  { value: "finance", label: "Finance" },
  { value: "education", label: "Education" },
  { value: "gaming", label: "Gaming" },
  { value: "other", label: "Other" },
];

export const DEGREE_LEVELS = [
  { value: "bachelor", label: "Bachelor (BSc, BEng, etc.)" },
  { value: "master", label: "Master (MSc, MEng, etc.)" },
  { value: "doctorate", label: "Doctorate (PhD, etc.)" },
];

export const COUNTRY_CONTEXTS = [
  { value: "rwanda", label: "Rwanda (RW)" },
  { value: "united-states", label: "United States (US)" },
  { value: "gabon", label: "Gabon (GA)" },
  { value: "uganda", label: "Uganda (UG)" },
  { value: "kenya", label: "Kenya (KE)" },
  { value: "tanzania", label: "Tanzania (TZ)" },
  { value: "united-kingdom", label: "United Kingdom (UK)" },
  { value: "canada", label: "Canada (CA)" },
  { value: "australia", label: "Australia (AU)" },
  { value: "germany", label: "Germany (DE)" },
  { value: "france", label: "France (FR)" },
  { value: "spain", label: "Spain (ES)" },
  { value: "italy", label: "Italy (IT)" },
];

export const COMPLEXITY_LEVELS = [
  { value: "simple", label: "Simple" },
  { value: "medium", label: "Medium" },
  { value: "advanced", label: "Advanced" },
  { value: "expert", label: "Expert" },
  { value: "research", label: "Research" },
];

export const SUBMIT_LABELS = [
  "Brainstorming...",
  "Generating...",
  "Cooking up...",
  "Kicking off...",
  "Grokking...",
  "Thinking...",
  "Analyzing...",
  "Cracking...",
  "Looking for...",
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals exploring new ideas",
    features: [
      "10 AI-powered idea generations",
      "Basic idea refinement",
      "Export to PDF",
      "30-day access to results",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    description: "Ideal for professionals and small teams",
    features: [
      "50 AI-powered idea generations",
      "Advanced idea refinement",
      "Export to multiple formats",
      "Unlimited access to results",
      "Priority support",
    ],
    cta: "Buy Now",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For businesses with serious innovation needs",
    features: [
      "Unlimited AI-powered idea generations",
      "Premium idea refinement & analysis",
      "Custom export options",
      "Team collaboration features",
      "Dedicated support",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];
