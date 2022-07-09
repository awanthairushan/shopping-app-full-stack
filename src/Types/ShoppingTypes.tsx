export interface IProduct {
  name: string;
  price: string;
  oldPrice: string | null;
  img: string;
  category: string;
}

export interface ICart {
  name: string;
  price: string;
  quantity: number;
  img: string;
}
