import { useState } from "react";

interface val {
  value: number | string;
}
const Button: React.FC<val> = ({ value }) => {
  const [yellow] = useState(["/", "X", "-", "+", "="]);
  const [gray] = useState(["AC", "+-", "%"]);

  const isYellow = yellow.includes(value as any);
  const isGray = yellow.includes(gray as any);
  const handleClick = (value: any) => {
    console.log(value);
    // first task is to manage these colors and then to add the display after all work on the functionality
  };
  return (
    <button
      onClick={() => handleClick(value)}
      className={` text-white h-[3.5rem] rounded-full flex justify-center items-center font-semibold text-2xl 
    ${value == 0 ? "w-[8.2rem]" : "w-[3.5rem]"}
    ${
      !isYellow && !isGray
        ? "bg-[#292929]"
        : isYellow
        ? "bg-[#fea400]"
        : "bg-[#7f7f7f]"
    }
      `}
    >
      {value}
    </button>
  );
};

export default Button;
