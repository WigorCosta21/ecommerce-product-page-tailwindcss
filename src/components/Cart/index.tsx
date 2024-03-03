import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

import IconDelete from "../../assets/images/icon-delete.svg";

export const Cart = () => {
  const { cart, total, handleDeleteCart } = useCart();

  return (
    <div className="absolute top-28 right-0 w-80 min-h-64 px-6 py-4 bg-white shadow-lg rounded-md flex flex-col ">
      <div className="border-b border-gray-400/85">
        <h3 className="font-bold mb-8">Cart</h3>
      </div>

      {cart.length === 0 && (
        <div className="flex center justify-center pt-20">
          <p className="text-custom-text-primary/70">You cart is empty.</p>
        </div>
      )}

      {cart.map((item) => (
        <div key={item.id} className="flex items-center gap-4 mt-7">
          <div>
            <img
              className="w-12 h-12 rounded-md"
              src={item.image}
              alt={item.title}
            />
          </div>
          <div>
            <h3 className="text-custom-text-primary/70 text-xs">
              {item.title}
            </h3>
            <div>
              <p className="text-custom-text-primary/70 text-xs mt-1">
                {formatPrice(item.price)} x {item.amount}{" "}
                <span className="text-custom-text-primary font-bold">
                  {total}
                </span>{" "}
              </p>
            </div>
          </div>
          <button onClick={() => handleDeleteCart(item)}>
            <img src={IconDelete} alt="Ícone de remover carrinho" />
          </button>
        </div>
      ))}

      {cart.length >= 1 && (
        <button className="w-full flex justify-center items-center bg-custom-primary rounded-md py-4 text-white mt-8">
          Checkout
        </button>
      )}
    </div>
  );
};
