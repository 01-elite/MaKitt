export interface Product {
  id: string;
  name: string;
  price: number;
  tagline: string;
  shortDescription: string;
  images: string[];
  flatLayImage: string;
  journeyImages: string[];
  detailedDescription: string;
  inTheBox: string[];
  whatYoullLearn: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ShippingInfo {
    name: string;
    address: string;
    phone: string;
}

export interface Order {
    orderId: string;
    items: CartItem[];
    total: number;
    shippingInfo: ShippingInfo;
}