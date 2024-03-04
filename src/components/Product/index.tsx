import { useEffect, useState } from "react";
import { Carrossel } from "../Carrossel";
import { ProductAction } from "../ProductAction";
import { ProductImage } from "../ProductImage";
import { ProductInfo } from "../ProductInfo";

export const Product = ({ data }: IProductData) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-5xl w-full mx-auto  mt-7 md:mt-20">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-28">
        <div>
          {isMobile ? <Carrossel data={data} /> : <ProductImage data={data} />}
        </div>
        <div className="px-4">
          <ProductInfo data={data} />
          <ProductAction data={data} />
        </div>
      </div>
    </div>
  );
};
