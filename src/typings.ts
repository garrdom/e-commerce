export type ResponseProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

export type ResponseObj = {
  products: Array<ResponseProduct>;
  total: number;
  skip: number;
  limit: number;
};

export type CustomProduct = Pick<ResponseProduct, 'id' | 'thumbnail' | 'title' | 'price'>;

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system'
}
