import { useState } from "react";

interface val {
  value: string;
  query: any;
}
const Button: React.FC<val> = ({ value, query }) => {
  const [yellow] = useState(["/", "X", "-", "+", "="]);
  const [gray] = useState(["AC", "+-", "%"]);

  const isYellow = yellow.includes(value as any);
  const isGray = gray.includes(value as any);
  const handleClick = (value: any) => {
    // console.log(value);
    query(value);
  };
  return (
    <button
      onClick={() => handleClick(value)}
      className={`h-[3.5rem] rounded-full flex justify-center items-center text-2xl
    ${value == "0" ? "w-[8.2rem]" : "w-[3.5rem]"}
    ${
      !isYellow && !isGray
        ? "bg-[#292929] text-white font-semibold"
        : isYellow
        ? "bg-[#fea400] text-white font-semibold"
        : "bg-[#7f7f7f] text-black font-[650]"
    }
      `}
    >
      {value}
    </button>
  );
};

export default Button;
