import IconCart from "../../assets/images/icon-cart.svg";
import IconMinus from "../../assets/images/icon-minus.svg";
import IconPlus from "../../assets/images/icon-plus.svg";
import { useCart } from "../../hooks/useCart";

export const ProductAction = ({ data }: IProductData) => {
  const {
    addToCart,
    quantity,
    handleDecrement,
    handleIncrement,
    handleOpenCart,
  } = useCart();

  const handleAddToCart = (item: IProduct) => {
    addToCart(item);
    handleOpenCart();
  };

  return (
    <div className="flex gap-6 items-center mt-10">
      <div className="bg-custom-gray-light/10 flex justify-around rounded-md items-center p-4 w-1/3">
        <button onClick={handleDecrement}>
          <img
            src={IconMinus}
            alt="Ícone para diminuri quantidade"
            title="Clique para diminuir a quantidade de itens"
          />
        </button>
        <span className="font-bold">{quantity}</span>
        <button onClick={handleIncrement}>
          <img
            src={IconPlus}
            alt="Ícone para aumentar quantidade"
            title="Clique para aumentar a quantidade de itens"
          />
        </button>
      </div>
      <div className="w-full">
        <button
          className="w-2/3 bg-custom-primary flex items-center justify-center text-white gap-5 rounded-md p-4 font-bold"
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
