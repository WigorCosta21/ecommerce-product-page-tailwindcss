import { ProductAction } from "../ProductAction";
import { ProductImage } from "../ProductImage";
import { ProductInfo } from "../ProductInfo";

export const Product = ({ data }: IProductData) => {
  return (
    <div className="max-w-5xl w-full mx-auto mt-20">
      <div className="flex items-center justify-between gap-28">
        <div>
          <ProductImage data={data} />
        </div>
        <div>
          <ProductInfo data={data} />
          <ProductAction />
        </div>
      </div>
    </div>
  );
};
