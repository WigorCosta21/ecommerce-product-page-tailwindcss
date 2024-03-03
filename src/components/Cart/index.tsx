import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

export const Cart = () => {
  const { cart, total } = useCart();

  return (
    <div className="absolute top-28 -right-24 w-80 min-h-64 bg-white shadow-xl rounded-md  py-6">
      <h3 className="px-6 font-bold">Cart</h3>
      <div className="w-full h-px my-7 bg-custom-gray-light/10"></div>

      {cart.length === 0 && (
        <p className="flex justify-center mt-16 font-bold text-custom-gray-light">
          Your cart is empty
        </p>
      )}

      {cart.map((item) => (
        <div key={item.id} className="flex items-center gap-4 pb-6 px-6">
          <div>
            <img
              className="w-12 h-12 rounded-md"
              src={item.image}
              alt={item.title}
            />
          </div>
          <div>
            <div>
              <h3 className="text-custom-gray-light text-sm">{item.title}</h3>
            </div>
            <div>
              <p className="text-custom-gray-light">
                {formatPrice(item.price)} x {item.amount}
                <span className="text-custom-gray-dark font-bold ml-2">
                  {total}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}

      {cart.length >= 1 && (
        <div className="px-6">
          <button className="bg-custom-primary w-full text-white font-bold py-4 rounded-md">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};
