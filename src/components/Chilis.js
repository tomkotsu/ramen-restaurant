import React, { useState } from "react";
import chili from "../imgs/chili.png";
import chiliBw from "../imgs/chilibw.png";

const Chili = (props) => {
  const [chilis, setChilis] = useState(1);

  const onClickChili = (event) => {
    setChilis(event.target.id);
  };

  const chiliCounts = Array.from({ length: 10 }, (_, i) => i + 1);
  const chiliDivs = chiliCounts.map((number) =>
    number <= chilis ? (
      <img
        id={number}
        key={number}
        className="chili w-12 h-12 cursor-pointer"
        src={chili}
        onClick={onClickChili}
        alt="red chili"
      />
    ) : (
      <img
        id={number}
        key={number}
        className="chili w-12 h-12 cursor-pointer"
        src={chiliBw}
        onClick={onClickChili}
        alt="chili outline"
      />
    )
  );
  return <div className="flex justify-center gap-4">{chiliDivs}</div>;
};

export default Chili;
