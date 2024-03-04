import { Menu } from "../Menu";

import Avatar from "../../assets/images/image-avatar.png";
import IconCart from "../../assets/images/icon-cart.svg";
import Logo from "../../assets/images/logo.svg";
import { Cart } from "../Cart";
import { useCart } from "../../hooks/useCart";

export const Header = () => {
  const { isOpenCart, handleCloseCart, handleOpenCart, cartAmount } = useCart();

  return (
    <header className="relative max-w-5xl w-full mx-auto px-4">
      <div className="w-full flex justify-between items-center pt-10 pb-12 border-b border-custom-gray-light/20">
        <div className="flex flex-row-reverse md:flex-row items-center gap-12">
          <div>
            <img src={Logo} alt="Logo Sneakers" />
          </div>
          <Menu />
        </div>
        <div className="flex items-center gap-10">
          <button
            className="relative"
            onClick={isOpenCart ? handleCloseCart : handleOpenCart}
          >
            <img
              src={IconCart}
              alt="Ícone do carrinho de compras"
              title="Clique para exibir/fechar o menu"
            />
            {cartAmount > 0 && (
              <span className="absolute -top-1 -right-3 bg-custom-primary w-5 h-3 flex items-center justify-center rounded-full text-white text-xs">
                {cartAmount}
              </span>
            )}
          </button>
          <div>
            <img
              className="w-11 h-11 rounded-full"
              src={Avatar}
              alt="Foto do perfil do usuário"
            />
          </div>
        </div>
      </div>
      {isOpenCart && <Cart />}
    </header>
  );
};
