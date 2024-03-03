import Product1 from "../assets/images/image-product-1.jpg";
import Product2 from "../assets/images/image-product-2.jpg";
import Product3 from "../assets/images/image-product-3.jpg";
import Product4 from "../assets/images/image-product-4.jpg";
import Thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

export const products: IProduct[] = [
  {
    id: 1,
    brand: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
      "  These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    oldPrice: 250,
    currentPrice: 125,
    images: [Product1, Product2, Product3, Product4],
    thumbnail: [Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4],
  },
];
