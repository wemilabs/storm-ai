export const AREAS = [
  { value: "iot", label: "Internet of Things (IoT)" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "ai", label: "Artificial Intelligence" },
  { value: "law", label: "Legal Tech" },
  { value: "health", label: "Healthcare" },
  { value: "finance", label: "Finance" },
  { value: "education", label: "Education" },
  { value: "gaming", label: "Gaming" },
  { value: "other", label: "Other" },
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
