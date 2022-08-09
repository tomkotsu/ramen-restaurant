import React from "react";
import RamenIcon from "../imgs/icons/ramen-icon.svg";
import Chilis from "./Chilis";
import baseballIcon from "../imgs/icons/baseball-icon.svg";
import sumoIcon from "../imgs/icons/sumo-icon.svg";
import pigIcon from "../imgs/icons/pig-icon.svg";
import boneIcon from "../imgs/icons/bone-icon.svg";
import soyIcon from "../imgs/icons/soy-icon.svg";
import misoIcon from "../imgs/icons/miso-icon.svg";
import chickenIcon from "../imgs/icons/chicken-icon.svg";
import tofuIcon from "../imgs/icons/tofu-icon.svg";
import spronionIcon from "../imgs/icons/spronion-icon.svg";
import enokiIcon from "../imgs/icons/enoki-icon.svg";
import seaweedIcon from "../imgs/icons/seaweed-icon.svg";
import eggIcon from "../imgs/icons/egg-icon.svg";
const MyRamen = (props) => {
  return (
    <div className="my-ramen bg-zinc-700 flex flex-col justify-center items-center p-24" id="myRamen">
      <h1 className="text-4xl mb-10 font-extrabold text-red-500">
        マイーラメン！
      </h1>
      <div className="ramen__wrapper flex flex-col gap-10 justify-center items-center pt-0 border rounded-3xl">
        <div className="choices flex text-3xl justify-between">
          <div className="choice rounded-tl-3xl">
            <h1>大きさ</h1>
            <div className="choice-icons">
                <img
                  src={baseballIcon}
                  alt=""
                  className="builder-icon"
                />
                <img
                  src={sumoIcon}
                  alt=""
                  className="builder-icon"
                />
            </div>
          </div>
          <div className="choice">
          <h1>スープ</h1>
            <div className="choice-icons">
                <img
                  src={boneIcon}
                  alt=""
                  className="builder-icon"
                />
                <img
                  src={soyIcon}
                  alt=""
                  className="builder-icon"
                />
                <img
                  src={misoIcon}
                  alt=""
                  className="builder-icon"
                />
                          </div>
            </div>
          <div className="choice">
          <h1>肉・豆腐</h1>
            <div className="choice-icons">
                <img
                  src={pigIcon}
                  alt=""
                  className="builder-icon"
                />
                <img
                  src={chickenIcon}
                  alt=""
                  className="builder-icon"
                />
                <img
                  src={tofuIcon}
                  alt=""
                  className="builder-icon"
                />
            </div>
          </div>
          <div className="choice">
          <h1>トッピング</h1>
            <div className="choice-icons">
                <img
                  src={spronionIcon}
                  alt=""
                  className="builder-icon"
                />
                <img
                  src={enokiIcon}
                  alt=""
                  className="builder-icon"
                />
                <img
                  src={seaweedIcon}
                  alt=""
                  className="builder-icon"
                />
            </div>
          </div>
          <div className="choice rounded-tr-3xl">
          <h1>味玉</h1>
            <div className="choice-icons">
                <img
                  src={eggIcon}
                  alt=""
                  className="builder-icon"
                />
            </div>
          </div>
        </div>
        <div className="rounded-full bg-red-700 flex justify-center items-center h-96 w-96">
          <img
            src={RamenIcon}
            alt="ramen bowl illustration"
            className="translate-x-4"
          />
        </div>
        <Chilis />
        <div className="price text-white text-center text-4xl font-bold mb-10"><h1>900円</h1></div>
      </div>
    </div>
  );
};

export default MyRamen;
