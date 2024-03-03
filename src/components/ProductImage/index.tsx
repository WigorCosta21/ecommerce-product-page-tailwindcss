import { useState } from "react";

export const ProductImage = ({ data }: IProductData) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleSelectedImage = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div>
      <div>
        <img
          className="rounded-md"
          src={data.images[selectedImage]}
          alt={`Produto ${selectedImage + 1}`}
        />
      </div>
      <div className="flex items-center gap-7 mt-7">
        {data.thumbnail.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer w-20 h-20 ${
              selectedImage === index
                ? "border-2 border-custom-primary rounded-md"
                : ""
            }`}
          >
            <img
              onClick={() => handleSelectedImage(index)}
              className={`w-20 h-20 rounded-md ${
                selectedImage === index ? "opacity-40" : ""
              }`}
              src={item}
              alt={`Thumbnail do produto ${selectedImage + 1}`}
              title="Clique para mudar a imagem de exibição"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
