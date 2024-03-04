import { useState } from "react";
import IconNextImg from "../../assets/images/icon-next.svg";
import IconPrevImg from "../../assets/images/icon-previous.svg";

export const Carrossel = ({ data }: IProductData) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handlePrevImage = () => {
    setSelectedImage(
      selectedImage === data.images.length - 1 ? 0 : selectedImage + 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage(
      selectedImage === 0 ? data.images.length - 1 : selectedImage - 1
    );
  };

  return (
    <div className="relative max-w-3xl">
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 ">
        <button
          onClick={handlePrevImage}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
        >
          <img src={IconPrevImg} alt="" />
        </button>
      </div>
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 ">
        <button
          onClick={handleNextImage}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
        >
          <img src={IconNextImg} alt="" />
        </button>
      </div>
      <div className="overflow-x-hidden">
        <div className="flex flex-nowrap">
          {data.images.map((image, index) => (
            <img
              className={`w-full ${index === selectedImage ? "" : "hidden"}`}
              key={index}
              src={image}
              alt={`Imagem do produto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
