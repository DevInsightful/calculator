import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const Calculator = () => {
  const [options, _setOptions] = useState([
    "AC",
    "+-",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ]);
  return (
    <div className="calculator main bg-black h-[65vh] w-[20vw] rounded-2xl flex flex-wrap gap-4 justify-center">
      <Screen />
      {options.map((options, idx) => {
        return <Button value={options} key={idx} />;
      })}
    </div>
  );
};

export default Calculator;
