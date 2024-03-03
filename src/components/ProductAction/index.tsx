import IconCart from "../../assets/images/icon-cart.svg";
import IconMinus from "../../assets/images/icon-minus.svg";
import IconPlus from "../../assets/images/icon-plus.svg";
import { useCart } from "../../hooks/useCart";

export const ProductAction = ({ data }: IProductData) => {
  const { addToCart } = useCart();

  const handleAddToCart = (item: IProduct) => {
    addToCart(item);
  };

  return (
    <div className="flex gap-6 items-center mt-10">
      <div className="flex items-center justify-center gap-10 p-7 rounded-md bg-custom-gray-light/10 font-bold">
        <button>
          <img
            src={IconMinus}
            alt="Ícone para diminuri quantidade"
            title="Clique para diminuir a quantidade de itens"
          />
        </button>
        <span>0</span>
        <button>
          <img
            src={IconPlus}
            alt="Ícone para aumentar quantidade"
            title="Clique para aumentar a quantidade de itens"
          />
        </button>
      </div>
      <div>
        <button
          className="flex items-center gap-5 bg-custom-primary text-white px-20 py-6 rounded-md font-bold text-lg"
          title="Clique para adicionar o produto ao carrinho"
          onClick={() => handleAddToCart(data)}
        >
          <img src={IconCart} alt="Ícone do carrinho de compras" />
          Add to cart
        </button>
      </div>
    </div>
  );
};
