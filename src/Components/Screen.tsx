import { useEffect, useState } from "react";

const Screen: React.FC<{ query: any }> = ({ query }) => {
  const [screenContent, setScreenContent] = useState();
  useEffect(() => {
    setScreenContent(query);
  }, []);
  console.log(screenContent);
  return (
    <div className="bg-red-500 p-5 text-white block w-[100%]">
      {/* {screenContent} */}
      {query}
    </div>
  );
};
export default Screen;
