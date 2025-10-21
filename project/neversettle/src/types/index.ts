export interface MenuItem {
  id: string;
  name: string;
  category: 'shake' | 'tea' | 'snack' | 'waffle';
  base_cal: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  img_url: string;
  featured: boolean;
  description?: string;
}

export interface AddIn {
  id: string;
  name: string;
  type: 'protein' | 'vitamin' | 'collagen' | 'caffeine' | 'topping';
  macros: {
    protein: number;
    carbs: number;
    fat: number;
    calories: number;
  };
  compatible_with: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  body_markdown: string;
  tags: string[];
  status: 'published' | 'draft';
  image_url: string;
  read_time: number;
  created_at: string;
}
