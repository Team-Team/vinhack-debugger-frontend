import * as React from "react";
// import { data } from "./index.js";
import { useState } from "react";

const data = [
  { name: "line-1", execution: "print('hi'): a" },
  { name: "line-2", execution: "print('hi'): b" },
  { name: "line-3", execution: "print('hi'): c" },
  { name: "line-4", execution: "print('hi'): d" },
  { name: "line-5", execution: "print('hi'): e" },
  { name: "line-6", execution: "print('hi'): f" },
  { name: "line-7", execution: "print('hi'): g" },
  { name: "line-8", execution: "print('hi'): h" },
];

const Vinhack = () => {
  const [active, setActive] = useState(data[0]);
  return (
    <div className="grid grid-cols-2 gap-x-4 divide-x divide-solid my-10 px-10">
      <div className="rounded-md border flex flex-col gap-y-4 items-start p-2">
        {React.Children.toArray(
          data.map((item) => {
            return (
              <button
                className={`p-2 transition duration-300 rounded-md ${
                  active.name === item.name
                    ? "text-black bg-gray-300"
                    : "bg-gray-800 text-white"
                } font-semibold w-full`}
                onClick={() => {
                  setActive(item);
                }}
              >
                {item.name}
              </button>
            );
          })
        )}
      </div>
      <div className="p-2 border rounded-md ">
        <h1>{active.execution}</h1>
      </div>
    </div>
  );
};
export default Vinhack;
