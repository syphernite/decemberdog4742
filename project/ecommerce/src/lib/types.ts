export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: ProductImage[];
  variants: ProductVariant[];
  collections: string[];
  tags: string[];
  materials: string[];
  care: string[];
  seo: {
    title?: string;
    description?: string;
  };
  inventory: {
    tracked: boolean;
    quantity: number;
    policy: 'deny' | 'continue';
  };
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  inventory: {
    quantity: number;
    policy: 'deny' | 'continue';
  };
  options: {
    [key: string]: string;
  };
  image?: ProductImage;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image?: ProductImage;
  products: string[];
  filters: CollectionFilter[];
  seo: {
    title?: string;
    description?: string;
  };
}

export interface CollectionFilter {
  id: string;
  label: string;
  type: 'select' | 'color' | 'range' | 'boolean';
  options?: FilterOption[];
  min?: number;
  max?: number;
}

export interface FilterOption {
  value: string;
  label: string;
  color?: string;
  count?: number;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  quantity: number;
  properties?: {
    [key: string]: string;
  };
}

export interface Cart {
  id: string;
  items: CartItem[];
  discounts: CartDiscount[];
  shipping?: ShippingRate;
  tax?: TaxInfo;
  subtotal: number;
  total: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartDiscount {
  id: string;
  code: string;
  type: 'percentage' | 'fixed' | 'free_shipping';
  value: number;
  title: string;
  savings: number;
}

export interface ShippingRate {
  id: string;
  title: string;
  price: number;
  estimatedDays: string;
  carrier?: string;
}

export interface TaxInfo {
  rate: number;
  amount: number;
  inclusive: boolean;
  jurisdiction: string;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  country: string;
  zip: string;
  phone?: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  number: string;
  email: string;
  status: 'pending' | 'paid' | 'fulfilled' | 'cancelled';
  items: OrderItem[];
  shipping: {
    address: Address;
    rate: ShippingRate;
  };
  billing?: {
    address: Address;
  };
  payment: {
    method: string;
    status: 'pending' | 'paid' | 'failed';
    transactionId?: string;
  };
  subtotal: number;
  shipping_cost: number;
  tax: number;
  total: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  variantId: string;
  title: string;
  image: ProductImage;
  price: number;
  quantity: number;
  properties?: {
    [key: string]: string;
  };
}