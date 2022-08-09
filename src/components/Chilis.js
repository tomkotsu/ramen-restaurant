import React, { useState } from "react";
import chili from "../imgs/chili.png";
import chiliBw from "../imgs/chilibw.png";

const Chili = (props) => {
  const [chilis, setChilis] = useState(1);

  const onClickChili = (event) => {
    setChilis(event.target.id);
  };

  const chiliSender = (chilis) => {
    props.sendChilis(chilis)
  }

  const chiliCounts = Array.from({ length: 10 }, (_, i) => i + 1);
  const chiliDivs = chiliCounts.map((number) =>
    number <= chilis ? (
      <img
        id={number}
        key={number}
        className="chili w-12 h-12 lg:w-20 lg:h-20 cursor-pointer"
        src={chili}
        onClick={onClickChili}
        alt="red chili"
      />
    ) : (
      <img
        id={number}
        key={number}
        className="chili w-12 h-12 lg:w-20 lg:h-20 cursor-pointer"
        src={chiliBw}
        onClick={onClickChili}
        alt="chili outline"
      />
    )
  );
  chiliSender(chilis);
  return <div className="grid grid-cols-5 grid-rows-2 md:flex justify-center md:gap-8">{chiliDivs}</div>;
};

export default Chili;
