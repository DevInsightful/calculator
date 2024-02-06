import React, { useEffect, useState } from "react";

const Screen: React.FC<{ query: string | null }> = ({ query }) => {
  const [screenContent, setScreenContent] = useState<string | null>(null);
  useEffect(() => {
    if (query === "AC") {
      setScreenContent("");
    } else if (query === "DEL") {
      setScreenContent((prevContent) =>
        screenContent?.length && prevContent ? prevContent.slice(0, -1) : ""
      );
    } else if (screenContent && query === "=") {
      const updatedContent = screenContent.replace(/X/g, "*");
      setScreenContent(eval(updatedContent));
    } else {
      setScreenContent((prevContent) =>
        prevContent ? prevContent + query : query
      );
    }
  }, [query]);

  return (
    <div className="text-4xl p-3 pb-0 text-white flex justify-end items-end w-[100%] h-[7rem]">
      {content}
    </div>
  );
};

export default Screen;
