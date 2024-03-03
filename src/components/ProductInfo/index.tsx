import { formatPrice } from "../../utils/formatPrice";

export const ProductInfo = ({ data }: IProductData) => {
  return (
    <div>
      <h3 className="text-custom-primary text-xs font-bold mb-6">
        {data.brand}
      </h3>
      <h1 className="max-w-72 font-bold text-3xl text-custom-gray-dark mb-11">
        {data.title}
      </h1>
      <p className="text-custom-gray-light font-medium mb-8">
        {data.description}
      </p>
      <div className="flex items-center gap-5 mb-5">
        <p className="text-custom-gray-dark font-bold">
          {formatPrice(data.currentPrice)}
        </p>
        <span className="flex bg-custom-pale-primary px-1 rounded-md">50%</span>
      </div>
      <p className="text-custom-gray-light line-through font-medium">
        {formatPrice(data.oldPrice)}
      </p>
    </div>
  );
};
