import { useState } from "react";

const Screen: React.FC<{ query: any }> = ({ query }) => {
  const [screenContent, _setScreenContent] = useState(query);
  return (
    <div className="bg-red-500 p-5 text-white block w-[100%]">
      {screenContent}
      {query}
    </div>
  );
};
export default Screen;
