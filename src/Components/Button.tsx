import React from "react";

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  onScreenUpdate: (content: string | null) => void;
}

const Button: React.FC<ButtonProps> = ({ value, onClick, onScreenUpdate }) => {
  const handleClick = () => {
    onClick(value);
    // Get the current screen content from the screen
    const currentScreenContent =
      document.querySelector(".text-4xl")?.textContent;
    // Update the screen content
    onScreenUpdate(
      currentScreenContent !== null ? currentScreenContent + value : value
    );
  };

  return (
    <button
      onClick={handleClick}
      className={`h-[3.5rem] rounded-full flex justify-center items-center text-2xl
    ${value === "0" ? "w-[8.2rem]" : "w-[3.5rem]"}
    ${
      ["/", "X", "-", "+", "="].includes(value)
        ? "bg-[#fea400] text-white font-semibold"
        : ""
    }
    ${
      ["AC", "DEL", "%"].includes(value)
        ? "bg-[#7f7f7f] text-black font-[650]"
        : "bg-[#292929] text-white font-semibold"
    }
      `}
    >
      {value}
    </button>
  );
};

export default Button;
