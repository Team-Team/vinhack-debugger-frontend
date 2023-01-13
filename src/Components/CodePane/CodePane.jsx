import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDarkReasonable,
  dark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState, useEffect, Children } from "react";
import { fetchCode, fetchLine } from "../../HelperFunctions/fetchCode";
import { SetTheme } from "../../Contexts/ThemeContext";
import axios from "axios";
const CodePane = () => {
  const { theme } = SetTheme();
  const [sourceCode, setSourceCode] = useState("");
  const [currentLine, setCurrentLine] = useState("");
  const [lines, setLines] = useState([]);
  const [lineNumber, setLineNumber] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:5000/initialize");
  });
  useEffect(() => {
    setLineNumber(currentLine.linenumber);
  }, [currentLine]);

  useEffect(() => {
    async function getSourceCode() {
      fetchCode().then((res) => {
        setSourceCode(res);
        setLines(res.split("\n"));
      });
    }
    getSourceCode();
  }, []);
  useEffect(() => {
    async function getNextLine() {
      fetchLine().then((res) => {
        console.log(res);
        setCurrentLine(res);
      });
    }
    getNextLine();
  }, [lineNumber]);

  return (
    <div className="flex flex-col  h-[100%] ">
      <div className="flex  items-center pr-4 justify-between bg-codePaneNavbar text-textSecondary">
        <div className=" p-2 bg-codePaneMainWindow">
          <h1>sample_file.py</h1>
        </div>
        <div>Run</div>
      </div>
      <div className=" bg-codePaneMainWindow h-[100%] p-4 overflow-y-auto">
        {Children.toArray(
          lines.map((line, index) => {
            return (
              <SyntaxHighlighter
                language="python"
                lineProps={{
                  style: {
                    background: lineNumber === index ? "red" : "transparent",
                    border: "none",
                    padding: "0",
                    margin: "0",
                  },
                  onClick: () => {
                    console.log(lines[index]);
                  },
                }}
                lineNumberStyle={{
                  background: "transparent",
                  border: "none",
                  maxWidth: "4px",
                  textAlign: "left",
                }}
                style={theme}
                wrapLongLines
                showLineNumbers
                startingLineNumber={index}
              >
                {line === "" ? " " : line}
              </SyntaxHighlighter>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CodePane;
