import { formatPrice } from "../../utils/formatPrice";

export const ProductInfo = ({ data }: IProductData) => {
  return (
    <div>
      <h3 className="text-custom-primary text-base font-bold mb-5 md:mb-6">
        {data.brand}
      </h3>
      <h1 className="max-w-72 font-bold text-3xl text-custom-gray-dark mb-7 md:mb-11">
        {data.title}
      </h1>
      <p className="text-custom-gray-light font-medium mb-8">
        {data.description}
      </p>
      <div className="w-full flex justify-between mb-6 md:flex-col">
        <div className="w-32 justify-between flex items-center ">
          <p>{formatPrice(data.currentPrice)}</p>
          <span className="w-12 bg-custom-pale-primary rounded-md text-custom-primary font-bold text-sm text-center">
            50%
          </span>
        </div>
        <div className="md:mt-5">
          <p>{formatPrice(data.oldPrice)}</p>
        </div>
      </div>
    </div>
  );
};
