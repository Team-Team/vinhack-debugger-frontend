import { useState, useEffect } from "react";
const ForLoop = ({ start, end, step }) => {
  const [text, setText] = useState("");
  let iteration = 1;
  const forLoop = (end, start = 0, step = 1) => {
    let i = start;
    let arr = [];
    let intervalId = setInterval(() => {
      arr.push(
        `<tr><td>${iteration++}</td><td>${
          i - step > start ? i - step : start
        }</td><td>${i}</td></tr>`
      );
      setText(arr.join(""));
      i += step;
      if (i === end) {
        clearInterval(intervalId);
      }
    }, 300);
  };
  useEffect(() => {
    forLoop(end, start, step);
  }, []);
  return (
    <table className="w-full" align="center">
      <tr>
        <th>Iteration</th>
        <th>Start</th>
        <th>End</th>
      </tr>

      <tbody dangerouslySetInnerHTML={{ __html: text }}></tbody>
    </table>
  );
};
export default ForLoop;
