import { ReactNode, createContext, useState } from "react";
import { formatPrice } from "../utils/formatPrice";

interface ICartProps {
  id: number;
  image: string;
  title: string;
  price: number;
  amount: number;
  total: number;
}

export interface ICartContext {
  cart: ICartProps[];
  cartAmount: number;
  total: string;
  addToCart: (newItem: IProduct) => void;
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export const CartContext = createContext({} as ICartContext);

interface ICartProvider {
  children: ReactNode;
}

export const CartProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<ICartProps[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState("");

  const totalCart = (items: ICartProps[]) => {
    let myCart = items;
    let result = myCart.reduce((acc, item) => {
      return acc + item.total;
    }, 0);

    setTotal(formatPrice(result));
  };

  const addToCart = (newItem: IProduct) => {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      let cartList = cart;

      cartList[indexItem].amount = cart[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cart[indexItem].price;

      setCart(cartList);
      totalCart(cartList);
      setQuantity(0);
      return;
    }

    if (quantity > 0) {
      const data: ICartProps = {
        id: newItem.id,
        image: newItem.thumbnail[0],
        title: newItem.title,
        price: newItem.currentPrice,
        amount: quantity,
        total: newItem.currentPrice,
      };

      setCart([...cart, data]);
      totalCart([...cart, data]);
      setQuantity(0);
    }
  };

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addToCart,
        quantity,
        handleDecrement,
        handleIncrement,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
