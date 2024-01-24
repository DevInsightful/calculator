import React, { useEffect, useState } from "react";

const Screen: React.FC<{ query: any }> = ({ query }) => {
  const [screenContent, setScreenContent] = useState<string | null>(null);

  useEffect(() => {
    // Update screenContent based on the previous value and the new query
    setScreenContent((prevContent) =>
      prevContent ? prevContent + query : query
    );
  }, [query]);

  console.log(screenContent);

  return (
    <div className="bg-gray-500 p-5 text-white block w-[100%]">
      {screenContent}
    </div>
  );
};

export default Screen;
