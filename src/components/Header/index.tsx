import { Menu } from "../Menu";

import Avatar from "../../assets/images/image-avatar.png";
import IconCart from "../../assets/images/icon-cart.svg";
import Logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <header className="max-w-5xl w-full mx-auto">
      <div className="w-full flex justify-between items-center pt-10 pb-12 border-b border-custom-gray-light/20">
        <div className="flex items-center gap-12">
          <div>
            <img src={Logo} alt="Logo Sneakers" />
          </div>
          <Menu />
        </div>
        <div className="flex items-center gap-10">
          <button>
            <img
              src={IconCart}
              alt="Ícone do carrinho de compras"
              title="Clique para exibir/fechar o menu"
            />
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
    </header>
  );
};
