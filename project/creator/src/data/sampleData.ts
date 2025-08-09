export const videos = [
  {
    id: 1,
    title: "Latest Tech Review: MacBook Pro M3",
    platform: "youtube",
    thumbnail: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "2.1M",
    duration: "12:45",
    date: "2024-01-15",
    category: "tech"
  },
  {
    id: 2,
    title: "Day in My Life as a Creator",
    platform: "tiktok",
    thumbnail: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "3.4M",
    duration: "0:58",
    date: "2024-01-14",
    category: "lifestyle"
  },
  {
    id: 3,
    title: "Best Camera Setup for Creators",
    platform: "instagram",
    thumbnail: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "856K",
    duration: "1:24",
    date: "2024-01-12",
    category: "tech"
  },
  {
    id: 4,
    title: "Unboxing the Latest Gaming Setup",
    platform: "youtube",
    thumbnail: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "1.8M",
    duration: "18:32",
    date: "2024-01-10",
    category: "gaming"
  },
  {
    id: 5,
    title: "Quick Productivity Tips",
    platform: "tiktok",
    thumbnail: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "2.7M",
    duration: "0:45",
    date: "2024-01-08",
    category: "productivity"
  },
  {
    id: 6,
    title: "Behind the Scenes: Photo Shoot",
    platform: "instagram",
    thumbnail: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "654K",
    duration: "2:15",
    date: "2024-01-06",
    category: "lifestyle"
  }
];

export const services = [
  {
    id: 1,
    title: "Sponsored Post",
    description: "High-impact social media post featuring your brand",
    deliverables: ["1 Feed Post", "3 Story Slides", "Usage Rights Included"],
    timeline: "3-5 business days",
    usageRights: "1 year commercial use",
    startingRate: "$2,500",
    icon: "📱"
  },
  {
    id: 2,
    title: "UGC Bundle",
    description: "Authentic user-generated content package",
    deliverables: ["5 Raw Videos", "10 High-Res Photos", "Creative Concepts"],
    timeline: "7-10 business days",
    usageRights: "Unlimited commercial use",
    startingRate: "$1,800",
    icon: "🎥"
  },
  {
    id: 3,
    title: "Product Review",
    description: "Comprehensive product review with honest insights",
    deliverables: ["Long-form Video", "Written Review", "Social Promotion"],
    timeline: "10-14 business days",
    usageRights: "6 months promotional use",
    startingRate: "$3,200",
    icon: "⭐"
  },
  {
    id: 4,
    title: "Event Appearance",
    description: "Personal appearance at your event or activation",
    deliverables: ["4-hour Appearance", "Live Social Coverage", "Meet & Greet"],
    timeline: "Subject to availability",
    usageRights: "Event footage rights",
    startingRate: "$5,000",
    icon: "🎪"
  },
  {
    id: 5,
    title: "Speaking/Workshop",
    description: "Educational speaking engagement or workshop",
    deliverables: ["60-min Presentation", "Q&A Session", "Resource Materials"],
    timeline: "2-3 weeks preparation",
    usageRights: "Recording rights available",
    startingRate: "$4,500",
    icon: "🎤"
  },
  {
    id: 6,
    title: "Brand Partnership",
    description: "Long-term brand collaboration package",
    deliverables: ["Monthly Content", "Story Features", "Exclusivity Period"],
    timeline: "Ongoing collaboration",
    usageRights: "Full commercial rights",
    startingRate: "$8,000/month",
    icon: "🤝"
  }
];

export const products = [
  {
    id: 1,
    title: "Cinematic LUTs Pack",
    description: "Professional color grading LUTs for that cinematic look",
    price: 49,
    originalPrice: 79,
    category: "luts",
    image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600",
    downloads: 1247,
    rating: 4.9,
    variants: [
      { name: "Basic Pack", price: 49, files: 25 },
      { name: "Pro Pack", price: 99, files: 50 },
      { name: "Ultimate Pack", price: 149, files: 100 }
    ]
  },
  {
    id: 2,
    title: "Lightroom Presets Bundle",
    description: "Instagram-ready presets for stunning photo edits",
    price: 29,
    originalPrice: 49,
    category: "presets",
    image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
    downloads: 2156,
    rating: 4.8,
    variants: [
      { name: "Mobile Presets", price: 29, files: 15 },
      { name: "Desktop Presets", price: 39, files: 20 },
      { name: "Complete Bundle", price: 59, files: 35 }
    ]
  },
  {
    id: 3,
    title: "Creator Notion Template",
    description: "Complete creator business management system",
    price: 39,
    originalPrice: 69,
    category: "templates",
    image: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=600",
    downloads: 892,
    rating: 4.9,
    variants: [
      { name: "Basic Template", price: 39, files: 1 },
      { name: "Pro Template", price: 69, files: 1 },
      { name: "Team Template", price: 99, files: 1 }
    ]
  },
  {
    id: 4,
    title: "Content Creation E-Book",
    description: "Complete guide to building your creator empire",
    price: 19,
    originalPrice: 29,
    category: "ebooks",
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
    downloads: 3421,
    rating: 4.7,
    variants: [
      { name: "PDF Version", price: 19, files: 1 },
      { name: "PDF + Audio", price: 29, files: 2 }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "TechFlow Inc.",
    role: "Marketing Director",
    content: "Working with them was incredible. The content quality exceeded our expectations and drove amazing engagement.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Johnson",
    company: "StyleBrand Co.",
    role: "Brand Manager",
    content: "Professional, creative, and delivered exactly what we needed. The ROI on our collaboration was fantastic.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    company: "GrowthLab",
    role: "CEO",
    content: "Their authentic approach to brand partnerships is refreshing. Highly recommend for any serious brand.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  }
];

export const stats = {
  youtube: { followers: "2.4M", avgViews: "850K" },
  instagram: { followers: "1.8M", avgViews: "340K" },
  tiktok: { followers: "3.1M", avgViews: "1.2M" },
  twitter: { followers: "456K", avgViews: "89K" }
};

export const brandLogos = [
  "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=200"
];