import { useState, useEffect } from "react";
const Assignment = ({ variable, data }) => {
  const [text, setText] = useState(variable);
  const assignment = (data) => {
    setTimeout(() => {
      setText((prevText) => prevText + " = ");
    }, 300);
    setTimeout(() => {
      setText((prevText) => prevText + data);
    }, 300);
  };
  useEffect(() => {
    assignment(data);
  }, []);
  return <p>{text}</p>;
};
export default Assignment;
