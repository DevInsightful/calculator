<<<<<<< Updated upstream
const Button = () => {
  return <div className=""></div>;
=======
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
  // add the display then get the value out after all work on the functionality
  return (
    <button
      onClick={() => handleClick(value)}
      className={` text-white h-[3.5rem] rounded-full flex justify-center items-center font-semibold text-2xl 
    ${value == "0" ? "w-[8.2rem]" : "w-[3.5rem]"}
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
>>>>>>> Stashed changes
};

export default Button;
