import { useState } from "react";

import IconMenu from "../../assets/images/icon-menu.svg";
import IconCloseMenu from "../../assets/images/icon-close.svg";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-7 text-custom-gray-light">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={handleOpenMenu}
        className="md:hidden"
        title="Clique para abri o menu"
      >
        <img src={IconMenu} alt="Ícone do meu hambuguer" />
      </button>

      {isMenuOpen && (
        <div className="max-w-60 w-full  h-screen absolute top-0 left-0 px-7 pt-6 block z-10 bg-white md:hidden">
          <button onClick={handleCloseMenu} className="mb-14">
            <img src={IconCloseMenu} alt="Ícone para fechar o menu" />
          </button>
          <nav>
            <ul className=" flex flex-col gap-8 font-bold text-custom-gray-dark">
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
