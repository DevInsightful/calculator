import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const Calculator = () => {
  const [query, setQuery] = useState("");
  const [screenContent, setScreenContent] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    if (value === "AC") {
      setQuery("");
      setScreenContent("");
    } else if (value === "DEL") {
      setQuery((prevQuery) => prevQuery.slice(0, -1));
    } else if (value === "=") {
      const updatedContent = query.replace(/X/g, "*");
      setScreenContent(String(eval(updatedContent)));
    } else {
      setQuery((prevQuery) => prevQuery + value);
    }
  };

  const handleScreenUpdate = (content: string | null) => {
    setScreenContent(content);
  };

  return (
    <div className="calculator main bg-black min-h-[80vh] h-full max-w-[20vw] rounded-3xl flex flex-wrap gap-4 justify-center overflow-hidden">
      <Screen content={screenContent} />
      {[
        "AC",
        "DEL",
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
      ].map((value, idx) => {
        return (
          <Button
            value={value}
            key={idx}
            onClick={handleButtonClick}
            onScreenUpdate={handleScreenUpdate}
          />
        );
      })}
    </div>
  );
};

export default Calculator;
