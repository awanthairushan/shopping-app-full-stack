export interface IProduct {
  name: string;
  price: string;
  oldprice: string | null;
  img: string;
  category: string;
}

export interface ICart {
  name: string;
  price: string;
  quentity: number;
  img: string;
}