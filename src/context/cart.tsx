import { ReactNode, createContext, useState } from "react";

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
  addToCart: (newItem: IProduct) => void;
}

export const CartContext = createContext({} as ICartContext);

interface ICartProvider {
  children: ReactNode;
}

export const CartProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<ICartProps[]>([]);

  const addToCart = (newItem: IProduct) => {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      let cartList = cart;

      cartList[indexItem].amount = cart[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cart[indexItem].price;
    }

    const data: ICartProps = {
      id: newItem.id,
      image: newItem.thumbnail[0],
      title: newItem.title,
      price: newItem.currentPrice,
      amount: 1,
      total: newItem.currentPrice,
    };

    setCart([...cart, data]);
  };

  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
