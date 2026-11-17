export type PhoneBrand = 'Apple' | 'Samsung' | 'Google' | 'OnePlus';

export type CameraLayout = 'iphone-triple' | 'iphone-dual' | 'samsung-vertical' | 'pixel-visor' | 'oneplus-round';

export interface PhoneModelOption {
  id: string;
  name: string;
  brand: PhoneBrand;
  cameraLayout: CameraLayout;
  aspectRatio: string;
}

export type CollectionType = 'funky' | 'minimal';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  collection: CollectionType;
  subStyle: string;
  price: number;
  originalPrice?: number;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  description: string;
  aestheticStory: string;
  materialFeatures: string[];
  primaryColor: string;
  accentColor: string;
  bgHex: string;
  patternType: 
    | 'retro-cat' 
    | 'funky-dino' 
    | 'groovy-eyes' 
    | 'bubble-ghost' 
    | 'celestial-sun'
    | 'matcha-club'
    | 'lucky-cat'
    | 'cherry-pop'
    | 'groovy-checker'
    | 'happy-pills'
    | 'french-stripes' 
    | 'botanical-wildflower' 
    | 'olive-flora' 
    | 'linear-terracotta'
    | 'cherry-blossom-bloom'
    | 'matisse-lineart'
    | 'copenhagen-grid'
    | 'botanica-fern'
    | 'tortoise-luxe';
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  verifiedPurchase: boolean;
  phoneModel: string;
  casePurchased: string;
  title: string;
  text: string;
  helpfulCount: number;
}

export interface CreatorVideo {
  id: string;
  creatorHandle: string;
  creatorName: string;
  city: string;
  caption: string;
  caseTagged: string;
  caseId: string;
  views: string;
  duration: string;
  gradient: string;
  thumbnailAesthetic: string;
}

export interface CartItem {
  product: Product;
  selectedModel: PhoneModelOption;
  quantity: number;
}

export interface OrderReservation {
  orderId: string;
  date: string;
  status: 'Reserved' | 'Quality Check' | 'Printing & QA' | 'Dispatched';
  items: {
    product: Product;
    phoneModelName: string;
    quantity: number;
    price: number;
  }[];
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  city: string;
  pincode: string;
  totalAmount: number;
  trackingNumber: string;
  estimatedDelivery: string;
}
