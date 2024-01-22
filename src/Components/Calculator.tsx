import { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [values, setValues] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className="calculator main bg-black h-[65vh] w-[20vw] rounded-2xl">
      {values.map((value, idx) => {
        return <Button value={value} key={idx} />;
      })}
    </div>
  );
};

export default Calculator;
