import React from "react";
import ramenTitle from "../imgs/myramen-title.png";

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
  const [chosen, setChosen] = React.useState({
    size: "medium",
    soup: "tonkotsu",
    pig: false,
    chicken: true,
    tofu: false,
    negi: true,
    enoki: false,
    wakame: false,
    egg: false,
  });

  const [chiliCount, setChiliCount] = React.useState(1);

  const [totalPrice, setTotalPrice] = React.useState(540);

  const costCalculator = (chosen, chiliCount) => {
    let total = 0;
    if (chosen.size === "medium") {
      total += 200;
    } else {
      total += 300;
    }
    if (chosen.soup === "tonkotsu") {
      total += 200;
    } else {
      total += 150;
    }
    if (chosen.pig) {
      total += 150;
    }
    if (chosen.chicken) {
      total += 100;
    }
    if (chosen.tofu) {
      total += 50;
    }
    if (chosen.negi) {
      total += 30;
    }
    if (chosen.enoki) {
      total += 75;
    }
    if (chosen.wakame) {
      total += 50;
    }
    if (chosen.egg) {
      total += 100;
    }
    total += chiliCount * 10;
    return total;
  };

  return (
    <div
      className="my-ramen bg-black flex flex-col justify-center items-center p-6 md:p-24 border-t border-white"
      id="myRamen"
    >
      <img src={ramenTitle} alt="" className="md:h-24 w-auto mb-12" />
      <div className="ramen__wrapper flex flex-col gap-10 justify-center items-center pt-12 border border-red-600 rounded-3xl">
        <div className="choices flex flex-wrap text-3xl justify-evenly gap-10">
          <div className="choice rounded-tl-3xl">
            <h1 className="text-xl md:text-3xl">サイズ </h1>
            <div className="choice-icons">
              <img
                src={baseballIcon}
                alt=""
                className={`builder-icon-blue ${
                  chosen["size"] === "medium" ? "bg-blue-600" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    size: "medium",
                  }));
                }}
              />
              <img
                src={sumoIcon}
                alt=""
                className={`builder-icon-blue ${
                  chosen["size"] === "large" ? "bg-blue-600" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    size: "large",
                  }));
                }}
              />
            </div>
          </div>
          <div className="choice">
            <h1 className="text-xl md:text-3xl">スープ</h1>
            <div className="choice-icons">
              <img
                src={boneIcon}
                alt=""
                className={`builder-icon-blue ${
                  chosen["soup"] === "tonkotsu" ? "bg-blue-600" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    soup: "tonkotsu",
                  }));
                }}
              />
              <img
                src={soyIcon}
                alt=""
                className={`builder-icon-blue ${
                  chosen["soup"] === "shoyu" ? "bg-blue-600" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    soup: "shoyu",
                  }));
                }}
              />
              <img
                src={misoIcon}
                alt=""
                className={`builder-icon-blue ${
                  chosen["soup"] === "miso" ? "bg-blue-600" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    soup: "miso",
                  }));
                }}
              />
            </div>
          </div>
          <div className="choice">
            <h1 className="text-xl md:text-3xl">肉・豆腐</h1>
            <div className="choice-icons">
              <img
                src={pigIcon}
                alt=""
                className={`builder-icon ${
                  chosen["pig"] === true ? "active" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    pig: !prevState.pig,
                  }));
                }}
              />
              <img
                src={chickenIcon}
                alt=""
                className={`builder-icon ${
                  chosen["chicken"] === true ? "active" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    chicken: !prevState.chicken,
                  }));
                }}
              />
              <img
                src={tofuIcon}
                alt=""
                className={`builder-icon ${
                  chosen["tofu"] === true ? "active" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    tofu: !prevState.tofu,
                  }));
                }}
              />
            </div>
          </div>
          <div className="choice">
            <h1 className="text-xl md:text-3xl">トッピング</h1>
            <div className="choice-icons">
              <img
                src={spronionIcon}
                alt=""
                className={`builder-icon ${
                  chosen["negi"] === true ? "active" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    negi: !prevState.negi,
                  }));
                }}
              />
              <img
                src={enokiIcon}
                alt=""
                className={`builder-icon ${
                  chosen["enoki"] === true ? "active" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    enoki: !prevState.enoki,
                  }));
                }}
              />
              <img
                src={seaweedIcon}
                alt=""
                className={`builder-icon ${
                  chosen["wakame"] === true ? "active" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    wakame: !prevState.wakame,
                  }));
                }}
              />
            </div>
          </div>
          <div className="choice rounded-tr-3xl">
            <h1 className="text-xl md:text-3xl">味玉</h1>
            <div className="choice-icons">
              <img
                src={eggIcon}
                alt=""
                className={`builder-icon ${
                  chosen["egg"] === true ? "active" : ""
                }`}
                onClick={() => {
                  setChosen((prevState) => ({
                    ...prevState,
                    egg: !prevState.egg,
                  }));
                }}
              />
            </div>
          </div>
        </div>
        <div className="rounded-full bg-yellow-600 flex justify-center items-center h-20 w-20 md:h-96 md:w-96">
          <img
            src={RamenIcon}
            alt="ramen bowl illustration"
            className="md:translate-x-4"
          />
        </div>
        <Chilis sendChilis={setChiliCount} />
        <div className="price text-white text-center text-4xl font-bold mb-10 flex flex-col gap-6">
          <h1>{costCalculator(chosen, chiliCount)}円</h1>
          <h1>お店でご注文ください</h1>
        </div>
      </div>
    </div>
  );
};

export default MyRamen;
