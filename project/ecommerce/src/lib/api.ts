// Mock API layer - replace with real backend calls
import type { Product, Collection, Order, User, CartDiscount, ShippingRate, TaxInfo } from './types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data
export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Obsidian Statement Ring',
    description: 'A sculptural piece crafted from volcanic obsidian with champagne gold accents. Each ring is unique, featuring natural variations in the stone that catch light like captured starlight.',
    price: 2400,
    compareAtPrice: 3200,
    images: [
      {
        id: '1',
        url: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
        alt: 'Obsidian ring with gold accents',
        width: 800,
        height: 1000,
      },
      {
        id: '2',
        url: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
        alt: 'Obsidian ring detail view',
        width: 800,
        height: 800,
      },
    ],
    variants: [
      {
        id: '1-s',
        title: 'Size 6',
        price: 2400,
        sku: 'OSR-006',
        inventory: { quantity: 3, policy: 'deny' },
        options: { size: '6' },
      },
      {
        id: '1-m',
        title: 'Size 7',
        price: 2400,
        sku: 'OSR-007',
        inventory: { quantity: 5, policy: 'deny' },
        options: { size: '7' },
      },
      {
        id: '1-l',
        title: 'Size 8',
        price: 2400,
        sku: 'OSR-008',
        inventory: { quantity: 2, policy: 'deny' },
        options: { size: '8' },
      },
    ],
    collections: ['statement-jewelry', 'new-arrivals'],
    tags: ['luxury', 'statement', 'obsidian', 'gold'],
    materials: ['Natural Obsidian', '18k Gold Vermeil'],
    care: ['Store in provided pouch', 'Avoid contact with chemicals', 'Clean with soft cloth'],
    seo: {
      title: 'Obsidian Statement Ring | Luxury Volcanic Glass Jewelry',
      description: 'Sculptural obsidian ring with champagne gold accents. Unique volcanic glass jewelry piece.',
    },
    inventory: { tracked: true, quantity: 10, policy: 'deny' },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Crimson Onyx Necklace',
    description: 'An elegant cascade of deep crimson onyx stones, each hand-selected for its rich color and natural beauty. The champagne gold chain adds warmth to this striking piece.',
    price: 3800,
    compareAtPrice: 4500,
    images: [
      {
        id: '2-1',
        url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
        alt: 'Crimson onyx necklace',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '2-16',
        title: '16 inch',
        price: 3800,
        sku: 'CON-016',
        inventory: { quantity: 8, policy: 'deny' },
        options: { length: '16"' },
      },
      {
        id: '2-18',
        title: '18 inch',
        price: 3800,
        sku: 'CON-018',
        inventory: { quantity: 12, policy: 'deny' },
        options: { length: '18"' },
      },
    ],
    collections: ['statement-jewelry', 'necklaces'],
    tags: ['luxury', 'necklace', 'onyx', 'crimson'],
    materials: ['Crimson Onyx', '18k Gold Vermeil'],
    care: ['Store flat to prevent tangling', 'Clean with jewelry cloth', 'Avoid moisture'],
    seo: {
      title: 'Crimson Onyx Necklace | Luxury Statement Jewelry',
      description: 'Hand-selected crimson onyx stones on champagne gold chain.',
    },
    inventory: { tracked: true, quantity: 20, policy: 'deny' },
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    title: 'Midnight Obsidian Earrings',
    description: 'Dramatic drop earrings featuring polished obsidian teardrops suspended from delicate champagne gold hooks. These pieces catch and reflect light with mesmerizing depth.',
    price: 1800,
    images: [
      {
        id: '3-1',
        url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
        alt: 'Midnight obsidian drop earrings',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '3-default',
        title: 'Default',
        price: 1800,
        sku: 'MOE-001',
        inventory: { quantity: 15, policy: 'deny' },
        options: {},
      },
    ],
    collections: ['statement-jewelry', 'earrings', 'new-arrivals'],
    tags: ['luxury', 'earrings', 'obsidian', 'drops'],
    materials: ['Natural Obsidian', '18k Gold Vermeil'],
    care: ['Store in provided pouch', 'Clean with soft cloth', 'Handle with care'],
    seo: {
      title: 'Midnight Obsidian Drop Earrings | Luxury Volcanic Glass',
      description: 'Dramatic obsidian teardrop earrings with champagne gold hooks.',
    },
    inventory: { tracked: true, quantity: 15, policy: 'deny' },
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z',
  },
  {
    id: '4',
    title: 'Volcanic Glass Bracelet',
    description: 'A sophisticated tennis bracelet featuring alternating obsidian and champagne gold links. Each obsidian piece is carefully shaped and polished to perfection.',
    price: 2900,
    compareAtPrice: 3400,
    images: [
      {
        id: '4-1',
        url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
        alt: 'Volcanic glass tennis bracelet',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '4-s',
        title: 'Small (6.5")',
        price: 2900,
        sku: 'VGB-065',
        inventory: { quantity: 6, policy: 'deny' },
        options: { size: '6.5"' },
      },
      {
        id: '4-m',
        title: 'Medium (7")',
        price: 2900,
        sku: 'VGB-070',
        inventory: { quantity: 10, policy: 'deny' },
        options: { size: '7"' },
      },
      {
        id: '4-l',
        title: 'Large (7.5")',
        price: 2900,
        sku: 'VGB-075',
        inventory: { quantity: 4, policy: 'deny' },
        options: { size: '7.5"' },
      },
    ],
    collections: ['statement-jewelry', 'bracelets'],
    tags: ['luxury', 'bracelet', 'obsidian', 'tennis'],
    materials: ['Natural Obsidian', '18k Gold Vermeil'],
    care: ['Store flat', 'Clean with jewelry cloth', 'Avoid impact'],
    seo: {
      title: 'Volcanic Glass Tennis Bracelet | Luxury Obsidian Jewelry',
      description: 'Sophisticated tennis bracelet with obsidian and gold links.',
    },
    inventory: { tracked: true, quantity: 20, policy: 'deny' },
    createdAt: '2024-01-04T00:00:00Z',
    updatedAt: '2024-01-04T00:00:00Z',
  },
  {
    id: '5',
    title: 'Crimson Fire Pendant',
    description: 'A bold statement pendant featuring a large crimson onyx stone set in an intricate champagne gold setting. The stone seems to glow with inner fire.',
    price: 2200,
    images: [
      {
        id: '5-1',
        url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
        alt: 'Crimson fire pendant necklace',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '5-default',
        title: 'Default',
        price: 2200,
        sku: 'CFP-001',
        inventory: { quantity: 8, policy: 'deny' },
        options: {},
      },
    ],
    collections: ['statement-jewelry', 'necklaces', 'new-arrivals'],
    tags: ['luxury', 'pendant', 'crimson', 'onyx'],
    materials: ['Crimson Onyx', '18k Gold Vermeil'],
    care: ['Store in provided pouch', 'Clean with soft cloth', 'Avoid chemicals'],
    seo: {
      title: 'Crimson Fire Pendant | Luxury Onyx Statement Jewelry',
      description: 'Bold crimson onyx pendant in intricate champagne gold setting.',
    },
    inventory: { tracked: true, quantity: 8, policy: 'deny' },
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z',
  },
  {
    id: '6',
    title: 'Shadow Obsidian Cufflinks',
    description: 'Sophisticated cufflinks crafted from polished obsidian with champagne gold hardware. Perfect for formal occasions that demand understated luxury.',
    price: 1600,
    images: [
      {
        id: '6-1',
        url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
        alt: 'Shadow obsidian cufflinks',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '6-default',
        title: 'Default',
        price: 1600,
        sku: 'SOC-001',
        inventory: { quantity: 12, policy: 'deny' },
        options: {},
      },
    ],
    collections: ['mens-accessories', 'formal-wear'],
    tags: ['luxury', 'cufflinks', 'obsidian', 'formal'],
    materials: ['Natural Obsidian', '18k Gold Vermeil'],
    care: ['Store in provided box', 'Clean with soft cloth', 'Handle with care'],
    seo: {
      title: 'Shadow Obsidian Cufflinks | Luxury Mens Accessories',
      description: 'Sophisticated obsidian cufflinks with champagne gold hardware.',
    },
    inventory: { tracked: true, quantity: 12, policy: 'deny' },
    createdAt: '2024-01-06T00:00:00Z',
    updatedAt: '2024-01-06T00:00:00Z',
  },
  {
    id: '7',
    title: 'Ember Onyx Ring Set',
    description: 'A stunning set of three stackable rings featuring ember-colored onyx stones in varying sizes. Designed to be worn together or separately.',
    price: 3200,
    compareAtPrice: 3800,
    images: [
      {
        id: '7-1',
        url: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
        alt: 'Ember onyx ring set',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '7-5',
        title: 'Size 5',
        price: 3200,
        sku: 'EOR-005',
        inventory: { quantity: 3, policy: 'deny' },
        options: { size: '5' },
      },
      {
        id: '7-6',
        title: 'Size 6',
        price: 3200,
        sku: 'EOR-006',
        inventory: { quantity: 5, policy: 'deny' },
        options: { size: '6' },
      },
      {
        id: '7-7',
        title: 'Size 7',
        price: 3200,
        sku: 'EOR-007',
        inventory: { quantity: 7, policy: 'deny' },
        options: { size: '7' },
      },
      {
        id: '7-8',
        title: 'Size 8',
        price: 3200,
        sku: 'EOR-008',
        inventory: { quantity: 4, policy: 'deny' },
        options: { size: '8' },
      },
    ],
    collections: ['statement-jewelry', 'ring-sets', 'new-arrivals'],
    tags: ['luxury', 'rings', 'set', 'stackable', 'onyx'],
    materials: ['Ember Onyx', '18k Gold Vermeil'],
    care: ['Store separately to prevent scratching', 'Clean with soft cloth', 'Avoid impact'],
    seo: {
      title: 'Ember Onyx Ring Set | Luxury Stackable Rings',
      description: 'Stunning set of three stackable rings with ember-colored onyx.',
    },
    inventory: { tracked: true, quantity: 19, policy: 'deny' },
    createdAt: '2024-01-07T00:00:00Z',
    updatedAt: '2024-01-07T00:00:00Z',
  },
  {
    id: '8',
    title: 'Midnight Choker',
    description: 'An elegant choker necklace featuring alternating obsidian beads and champagne gold spacers. Modern sophistication meets timeless elegance.',
    price: 2600,
    images: [
      {
        id: '8-1',
        url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
        alt: 'Midnight obsidian choker',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '8-default',
        title: 'Default',
        price: 2600,
        sku: 'MC-001',
        inventory: { quantity: 9, policy: 'deny' },
        options: {},
      },
    ],
    collections: ['statement-jewelry', 'necklaces', 'chokers'],
    tags: ['luxury', 'choker', 'obsidian', 'modern'],
    materials: ['Natural Obsidian', '18k Gold Vermeil'],
    care: ['Store flat', 'Clean with jewelry cloth', 'Avoid moisture'],
    seo: {
      title: 'Midnight Obsidian Choker | Luxury Statement Necklace',
      description: 'Elegant choker with obsidian beads and champagne gold spacers.',
    },
    inventory: { tracked: true, quantity: 9, policy: 'deny' },
    createdAt: '2024-01-08T00:00:00Z',
    updatedAt: '2024-01-08T00:00:00Z',
  },
  {
    id: '9',
    title: 'Volcanic Ash Brooch',
    description: 'An artistic brooch inspired by volcanic formations, featuring textured obsidian with champagne gold accents. A conversation piece for the discerning collector.',
    price: 1900,
    images: [
      {
        id: '9-1',
        url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
        alt: 'Volcanic ash artistic brooch',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '9-default',
        title: 'Default',
        price: 1900,
        sku: 'VAB-001',
        inventory: { quantity: 6, policy: 'deny' },
        options: {},
      },
    ],
    collections: ['artistic-pieces', 'brooches'],
    tags: ['luxury', 'brooch', 'artistic', 'volcanic', 'collector'],
    materials: ['Textured Obsidian', '18k Gold Vermeil'],
    care: ['Store in provided box', 'Clean with soft brush', 'Handle with care'],
    seo: {
      title: 'Volcanic Ash Brooch | Artistic Luxury Jewelry',
      description: 'Artistic brooch inspired by volcanic formations with textured obsidian.',
    },
    inventory: { tracked: true, quantity: 6, policy: 'deny' },
    createdAt: '2024-01-09T00:00:00Z',
    updatedAt: '2024-01-09T00:00:00Z',
  },
  {
    id: '10',
    title: 'Crimson Crown Tiara',
    description: 'A regal tiara featuring cascading crimson onyx stones set in an intricate champagne gold framework. The ultimate statement piece for special occasions.',
    price: 8500,
    compareAtPrice: 10000,
    images: [
      {
        id: '10-1',
        url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
        alt: 'Crimson crown tiara',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '10-default',
        title: 'Default',
        price: 8500,
        sku: 'CCT-001',
        inventory: { quantity: 2, policy: 'deny' },
        options: {},
      },
    ],
    collections: ['statement-jewelry', 'bridal', 'luxury-collection'],
    tags: ['luxury', 'tiara', 'bridal', 'crimson', 'statement'],
    materials: ['Crimson Onyx', '18k Gold Vermeil', 'Silk Lining'],
    care: ['Professional cleaning recommended', 'Store in provided case', 'Handle with extreme care'],
    seo: {
      title: 'Crimson Crown Tiara | Luxury Bridal Statement Piece',
      description: 'Regal tiara with cascading crimson onyx stones in champagne gold.',
    },
    inventory: { tracked: true, quantity: 2, policy: 'deny' },
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z',
  },
  {
    id: '11',
    title: 'Shadow Walker Anklet',
    description: 'A delicate anklet featuring small obsidian beads interspersed with champagne gold charms. Perfect for adding a touch of luxury to any look.',
    price: 1200,
    images: [
      {
        id: '11-1',
        url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
        alt: 'Shadow walker obsidian anklet',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '11-s',
        title: 'Small (8")',
        price: 1200,
        sku: 'SWA-008',
        inventory: { quantity: 15, policy: 'deny' },
        options: { size: '8"' },
      },
      {
        id: '11-m',
        title: 'Medium (9")',
        price: 1200,
        sku: 'SWA-009',
        inventory: { quantity: 20, policy: 'deny' },
        options: { size: '9"' },
      },
      {
        id: '11-l',
        title: 'Large (10")',
        price: 1200,
        sku: 'SWA-010',
        inventory: { quantity: 12, policy: 'deny' },
        options: { size: '10"' },
      },
    ],
    collections: ['delicate-jewelry', 'anklets'],
    tags: ['luxury', 'anklet', 'obsidian', 'delicate'],
    materials: ['Natural Obsidian', '18k Gold Vermeil'],
    care: ['Store flat', 'Clean with soft cloth', 'Avoid moisture'],
    seo: {
      title: 'Shadow Walker Anklet | Delicate Obsidian Jewelry',
      description: 'Delicate anklet with obsidian beads and champagne gold charms.',
    },
    inventory: { tracked: true, quantity: 47, policy: 'deny' },
    createdAt: '2024-01-11T00:00:00Z',
    updatedAt: '2024-01-11T00:00:00Z',
  },
  {
    id: '12',
    title: 'Ember Essence Hair Pin Set',
    description: 'A set of three elegant hair pins featuring ember onyx stones. Perfect for creating sophisticated updos with a touch of luxury.',
    price: 1400,
    images: [
      {
        id: '12-1',
        url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
        alt: 'Ember essence hair pin set',
        width: 800,
        height: 1000,
      },
    ],
    variants: [
      {
        id: '12-default',
        title: 'Set of 3',
        price: 1400,
        sku: 'EHP-003',
        inventory: { quantity: 18, policy: 'deny' },
        options: {},
      },
    ],
    collections: ['hair-accessories', 'bridal'],
    tags: ['luxury', 'hair-pins', 'bridal', 'ember', 'set'],
    materials: ['Ember Onyx', '18k Gold Vermeil'],
    care: ['Store in provided pouch', 'Clean with soft cloth', 'Handle gently'],
    seo: {
      title: 'Ember Essence Hair Pin Set | Luxury Bridal Accessories',
      description: 'Set of three elegant hair pins with ember onyx stones.',
    },
    inventory: { tracked: true, quantity: 18, policy: 'deny' },
    createdAt: '2024-01-12T00:00:00Z',
    updatedAt: '2024-01-12T00:00:00Z',
  },
];

export const mockCollections: Collection[] = [
  {
    id: 'statement-jewelry',
    title: 'Statement Jewelry',
    description: 'Bold pieces that define your presence. Each item in our statement collection is designed to be the focal point of your ensemble.',
    image: {
      id: 'collection-1',
      url: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      alt: 'Statement jewelry collection',
      width: 1200,
      height: 800,
    },
    products: ['1', '2', '3', '5', '7', '8', '10'],
    filters: [
      {
        id: 'material',
        label: 'Material',
        type: 'select',
        options: [
          { value: 'obsidian', label: 'Obsidian', count: 5 },
          { value: 'gold', label: 'Gold', count: 8 },
          { value: 'silver', label: 'Silver', count: 3 },
          { value: 'onyx', label: 'Onyx', count: 4 },
        ],
      },
      {
        id: 'price',
        label: 'Price',
        type: 'range',
        min: 0,
        max: 10000,
      },
    ],
    seo: {
      title: 'Statement Jewelry Collection | Bold Luxury Pieces',
      description: 'Discover our curated collection of statement jewelry pieces designed to elevate any look.',
    },
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    description: 'The latest additions to our collection, featuring cutting-edge designs and timeless elegance.',
    image: {
      id: 'collection-2',
      url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
      alt: 'New arrivals collection',
      width: 1200,
      height: 800,
    },
    products: ['3', '5', '7'],
    filters: [
      {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: [
          { value: 'rings', label: 'Rings', count: 2 },
          { value: 'necklaces', label: 'Necklaces', count: 1 },
          { value: 'earrings', label: 'Earrings', count: 1 },
        ],
      },
    ],
    seo: {
      title: 'New Arrivals | Latest Luxury Jewelry',
      description: 'Discover our newest luxury jewelry pieces featuring obsidian and onyx.',
    },
  },
  {
    id: 'bridal',
    title: 'Bridal Collection',
    description: 'Exquisite pieces for your most important moments. Timeless elegance meets modern sophistication.',
    image: {
      id: 'collection-3',
      url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
      alt: 'Bridal jewelry collection',
      width: 1200,
      height: 800,
    },
    products: ['10', '12'],
    filters: [
      {
        id: 'occasion',
        label: 'Occasion',
        type: 'select',
        options: [
          { value: 'ceremony', label: 'Ceremony', count: 1 },
          { value: 'reception', label: 'Reception', count: 1 },
        ],
      },
    ],
    seo: {
      title: 'Bridal Jewelry Collection | Wedding Luxury Pieces',
      description: 'Exquisite bridal jewelry for your most important moments.',
    },
  },
  {
    id: 'mens-accessories',
    title: 'Men\'s Accessories',
    description: 'Sophisticated accessories for the modern gentleman. Understated luxury with impeccable craftsmanship.',
    image: {
      id: 'collection-4',
      url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
      alt: 'Men\'s accessories collection',
      width: 1200,
      height: 800,
    },
    products: ['6'],
    filters: [
      {
        id: 'type',
        label: 'Type',
        type: 'select',
        options: [
          { value: 'cufflinks', label: 'Cufflinks', count: 1 },
        ],
      },
    ],
    seo: {
      title: 'Men\'s Luxury Accessories | Sophisticated Jewelry',
      description: 'Sophisticated accessories for the modern gentleman.',
    },
  },
];

// API functions
export const api = {
  products: {
    getAll: async (): Promise<Product[]> => {
      await delay(300);
      return mockProducts;
    },
    getById: async (id: string): Promise<Product | null> => {
      await delay(200);
      return mockProducts.find(p => p.id === id) || null;
    },
    search: async (query: string): Promise<Product[]> => {
      await delay(400);
      return mockProducts.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
    },
  },
  
  collections: {
    getAll: async (): Promise<Collection[]> => {
      await delay(300);
      return mockCollections;
    },
    getById: async (id: string): Promise<Collection | null> => {
      await delay(200);
      return mockCollections.find(c => c.id === id) || null;
    },
  },
  
  cart: {
    calculateTotals: async (items: any[]): Promise<{ subtotal: number; tax: TaxInfo; total: number }> => {
      await delay(100);
      const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const tax = {
        rate: 0.08,
        amount: subtotal * 0.08,
        inclusive: false,
        jurisdiction: 'CA',
      };
      return {
        subtotal,
        tax,
        total: subtotal + tax.amount,
      };
    },
  },
  
  shipping: {
    getRates: async (address: any): Promise<ShippingRate[]> => {
      await delay(500);
      return [
        {
          id: 'standard',
          title: 'Standard Shipping',
          price: 0,
          estimatedDays: '3-5 business days',
          carrier: 'USPS',
        },
        {
          id: 'express',
          title: 'Express Shipping',
          price: 1500,
          estimatedDays: '1-2 business days',
          carrier: 'FedEx',
        },
      ];
    },
  },
  
  discounts: {
    validate: async (code: string): Promise<CartDiscount | null> => {
      await delay(400);
      const discounts: { [key: string]: CartDiscount } = {
        'WELCOME10': {
          id: 'welcome10',
          code: 'WELCOME10',
          type: 'percentage',
          value: 10,
          title: '10% Off Welcome',
          savings: 0,
        },
        'FREESHIP': {
          id: 'freeship',
          code: 'FREESHIP',
          type: 'free_shipping',
          value: 0,
          title: 'Free Shipping',
          savings: 0,
        },
      };
      return discounts[code.toUpperCase()] || null;
    },
  },
  
  orders: {
    create: async (orderData: any): Promise<Order> => {
      await delay(1000);
      return {
        id: `order-${Date.now()}`,
        number: `LUX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        email: orderData.email,
        status: 'paid',
        items: orderData.items,
        shipping: orderData.shipping,
        billing: orderData.billing,
        payment: {
          method: orderData.paymentMethod,
          status: 'paid',
          transactionId: `tx-${Date.now()}`,
        },
        subtotal: orderData.subtotal,
        shipping_cost: orderData.shippingCost,
        tax: orderData.tax,
        total: orderData.total,
        currency: 'USD',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    },
  },
  
  user: {
    create: async (userData: any): Promise<User> => {
      await delay(800);
      return {
        id: `user-${Date.now()}`,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        addresses: [],
        orders: [],
        wishlist: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    },
    signIn: async (email: string, password: string): Promise<User | null> => {
      await delay(800);
      // Mock sign in - always succeed for demo
      return {
        id: 'demo-user',
        email,
        firstName: 'Demo',
        lastName: 'User',
        addresses: [],
        orders: [],
        wishlist: [],
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: new Date().toISOString(),
      };
    },
  },
};