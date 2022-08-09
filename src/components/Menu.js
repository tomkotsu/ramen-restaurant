import React from "react";
import menu1 from "../imgs/menu-1.jpg";
import menu2 from "../imgs/menu-2.jpg";
import menu3 from "../imgs/menu-3.jpg";
import menuTitle from "../imgs/menu-title.png";

const Menu = () => {
  return (
    <div className="bg-zinc-800 text-white p-16" id="menu">
      <div className="menu__wrapper mx-auto flex flex-col justify-center items-center gap-24">
        <img src={menuTitle} alt="" className="w-64 h-auto" />
        <div className="menu-item">
          <div className="menu-textbox">
            <h1 className="text-2xl font-bold">だるま豚骨</h1>
            <p>
              ４００円　ー　へええええええええええええええ
              ええええええええええええええええええええええ
              ええええええええええええええええええええええ
              ええええええええええええええええええええええ
            </p>
          </div>
          <img src={menu1} alt="" className="menu-image" />
        </div>
        <div className="menu-item md:flex-row-reverse">
          <div class="menu-textbox">
            <h1 className="text-2xl font-bold">醤油デラックス</h1>
            <p>
              ４００円　ー　ほおおおおおおおおおおおおおおお
              おおおおおおおおおおおおおおおおおおおおおお
              おおおおおおおおおおおおおおおおおおおおおお
            </p>
          </div>
          <img src={menu2} alt="" className="menu-image" />
        </div>
        <div className="menu-item">
          <div class="menu-textbox">
            <h1 className="text-2xl font-bold">激辛ダルマ</h1>
            <p>
              ５００円　ー わあああああああああああああああ
              ああああああああああああああああああああああ
              ああああああああああああああああああああああ
              ああああああああああああああああああああああ　
            </p>
          </div>
          <img src={menu3} alt="" className="menu-image" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
