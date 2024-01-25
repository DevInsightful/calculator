import React, { useEffect, useState } from "react";

const Screen: React.FC<{ query: any }> = ({ query }) => {
  const [screenContent, setScreenContent] = useState<string | null>(null);

  useEffect(() => {
    setScreenContent((prevContent) =>
      prevContent ? prevContent + query : query
    );
  }, [query]);

  console.log(screenContent);

  return (
    <div className="text-4xl p-3 pb-0 text-white flex justify-end items-end w-[100%] h-[7rem]">
      {screenContent}
    </div>
  );
};

export default Screen;
