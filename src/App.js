import React, { useEffect, useState } from "react";
import "./styles.css";
import { CopyBlock, github, hybrid } from "react-code-blocks";
import { recursive } from "./Recursive";
import { iterative } from "./Iterative";

export default function App() {
  const toggleCodeTheme = window.innerWidth < 1000 ? hybrid : github;
  const [state, setState] = useState({ rtext: "", itext: "" });
  useEffect(() => {
    setState({
      rtext: recursive.toString(),
      itext: iterative.toString()
    });
  }, [setState]);
  return (
    <div className="App">
      <h1>
        <a
          href="https://github.com/rajinwonderland/react-code-blocks"
          target="_blank"
        >
          <pre className="rcb">react-code-blocks</pre>
        </a>
        <a
          href="https://github.com/rajinwonderland/react-code-blocks/issues/26"
          target="_blank"
        >
          Issue #26
        </a>
      </h1>
      <h2>Recursive Example</h2>
      <CopyBlock
        showLineNumbers={false}
        theme={toggleCodeTheme}
        text={state.rtext}
        language="javascript"
        codeBlock
      />
      <small>with dynamic text</small>
      <br />
      <br />
      <CopyBlock
        showLineNumbers={false}
        theme={toggleCodeTheme}
        text={`function recursive(arrLength) {
        var t0 = performance.now();
        var firstNum = arr[arr.length - 2];
        var secondNum = arr[arr.length - 1];
        var nNum = firstNum + secondNum;
        arr.push(nNum);
        firstNum = secondNum;
        secondNum = nNum;
      
        if (arr.length < arrLength) {
          recursive(arrLength);
        }
      
        var t1 = performance.now();
        return (t1 - t0) * 1000;
      }`}
        language="javascript"
        codeBlock
      />
      <small>with static text</small>
      <br />
      <h2>Iterative Example</h2>
      <CopyBlock
        showLineNumbers={false}
        theme={toggleCodeTheme}
        text={state.itext}
        language="javascript"
        codeBlock
      />
    </div>
  );
}
