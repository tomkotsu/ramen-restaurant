import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import darumaIcon from '../imgs/icons/daruma-icon.svg'

const Navbar = () => {
  return (
    <nav className="w-full h-[100px] z-10 md:block relative p-6 mx-auto xl:px-80 bg-zinc-800 border-b-2 border-red-600">
      <div className="flex nav__wrapper text-white font-bold text-xl justify-center md:justify-between items-center w-full h-full p-6">
        <a href="https://www.linkedin.com/in/tom-binnie/" target="_blank" className="bg-red-600 rounded-full hover:bg-yellow-500">
          <img src={darumaIcon} className="w-20 h-20"/>
        </a>
        <div className="nav-links hidden md:flex gap-12">
          <a href="#myRamen" className="hover:text-red-600">
            マイラーメン
          </a>
          <a href="#menu" className="hover:text-red-600">
            メニュー
          </a>
          <a href="#contact" className="hover:text-red-600">
            問い合わせ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
