import { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [values, _setValues] = useState([
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
      {values.map((value, idx) => {
        return <Button value={value} key={idx} />;
      })}
    </div>
  );
};

export default Calculator;
