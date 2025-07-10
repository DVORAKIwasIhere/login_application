export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
}

export interface ProductProps {
  products: Product;
}