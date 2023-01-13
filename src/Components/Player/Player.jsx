import { Children, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MainPlayerButtons from "../Buttons/MainPlayerButtons";
import ForLoop from "../Animations/ForLoop";
import Assignment from "../Animations/Assignment";
let buttons = [];

for (let i = 1; i < 31; i++) {
  buttons.push(`Button ${i}`);
}

const data = [
  { name: "line-1", execution: "print('hi')" },
  { name: "line-2", execution: "print('hi')" },
  { name: "line-3", execution: "print('hi')" },
  { name: "line-4", execution: "print('hi')" },
  { name: "line-5", execution: "print('hi')" },
  { name: "line-6", execution: "print('hi')" },
  { name: "line-7", execution: "print('hi')" },
  { name: "line-8", execution: "print('hi')" },
  { name: "line-1", execution: "print('hi')" },
  { name: "line-2", execution: "print('hi')" },
  { name: "line-3", execution: "print('hi')" },
  { name: "line-4", execution: "print('hi')" },
  { name: "line-5", execution: "print('hi')" },
  { name: "line-6", execution: "print('hi')" },
  { name: "line-7", execution: "print('hi')" },
  { name: "line-8", execution: "print('hi')" },
  { name: "line-1", execution: "print('hi')" },
  { name: "line-2", execution: "print('hi')" },
  { name: "line-3", execution: "print('hi')" },
  { name: "line-4", execution: "print('hi')" },
  { name: "line-5", execution: "print('hi')" },
  { name: "line-6", execution: "print('hi')" },
  { name: "line-7", execution: "print('hi')" },
  { name: "line-8", execution: "print('hi')" },
  { name: "line-1", execution: "print('hi')" },
  { name: "line-2", execution: "print('hi')" },
  { name: "line-3", execution: "print('hi')" },
  { name: "line-4", execution: "print('hi')" },
  { name: "line-5", execution: "print('hi')" },
  { name: "line-6", execution: "print('hi')" },
  { name: "line-7", execution: "print('hi')" },
  { name: "line-8", execution: "print('hi')" },
];

const Player = () => {
  const [active, setActive] = useState(data[0]);
  const [text, setText] = useState("");

  // forLoop(10, start, step);

  return (
    // <div className="flex flex-col h-[75vh] justify-between mx-10 border divide-y divide-solid rounded-md">
    //   <div className="grid grid-cols-12  w-full">
    //     <div
    //       className="max-h-[75vh] py-3 overflow-y-hidden scroll-smooth col-span-4 relative z-50 "
    //       id="buttonDiv"
    //     >
    //       <div className="flex flex-col bg-[#15181e]  gap-y-4 ">
    //         {data.map((item, index) => {
    //           return (
    //             <h2
    //               data-buttonIndex={index}
    //               className={`py-3 transition-all duration-300 p-3 rounded-l-md  text-white w-full ${
    //                 active === item &&
    //                 " relative -right-5 !text-white !bg-black text-lg font-semibold  border-gray-800 border-8  ease-in"
    //               }`}
    //             >
    //               Execution for {item.name}
    //             </h2>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <div className="col-span-8  bg-gray-800 text-white">
    //       Execution for
    //       <pre>
    //         <SyntaxHighlighter
    //           language="python3"
    //           style={dark}
    //           showLineNumbers
    //           PreTag={"pre"}
    //           wrapLongLines
    //         >
    //           print('hi') print('hi')
    //         </SyntaxHighlighter>
    //       </pre>
    //     </div>
    //   </div>
    //   <div className="flex gap-x-5 w-full shrink-0  items-center overflow-y-auto p-4">
    //     {Children.toArray(
    //       data.map((item, index) => {
    //         return (
    //           <MainPlayerButtons
    //             item={item}
    //             index={index}
    //             active={active}
    //             setActive={setActive}
    //           />
    //         );
    //       })
    //     )}
    //   </div>
    // </div>
    <div>
      {/* <ForLoop end={10} /> */}
      <Assignment variable="a" data={10} />
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
};

export default Player;
