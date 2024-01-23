import { useState } from "react";

const Screen = () => {
  const [screenContent, _setScreenContent] = useState();
  return (
    <div className="bg-red-500 p-5 text-white block w-[100%]">
      {screenContent}
    </div>
  );
};

export default Screen;
