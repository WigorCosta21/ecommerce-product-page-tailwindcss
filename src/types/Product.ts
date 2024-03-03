interface IProduct {
  id: number;
  brand: string;
  title: string;
  description: string;
  oldPrice: number;
  currentPrice: number;
  images: string[];
  thumbnail: string[];
}

interface IProductData {
  data: IProduct;
}
