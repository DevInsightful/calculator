import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const Calculator = () => {
  const [query, setQuery] = useState("");
  const [options, _setOptions] = useState([
    "AC",
    "+-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ]);
  return (
    <div className="calculator main bg-black h-[80vh] w-[20vw] rounded-3xl flex flex-wrap gap-4 justify-center overflow-hidden">
      <Screen query={query} />
      {options.map((options, idx) => {
        return <Button value={options} key={idx} query={setQuery} />;
      })}
    </div>
  );
};

export default Calculator;
