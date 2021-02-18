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
      <small>using dynamic text prop – will be minified post build</small>
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
      <small>using static text – will stay the same post build</small>
      <br />
      <h2>Iterative Example</h2>
      <CopyBlock
        showLineNumbers={false}
        theme={toggleCodeTheme}
        text={state.itext}
        language="javascript"
        codeBlock
      />
      <small>using dynamic text prop – will be minified post build</small>
      <br />
      <br />
      <CopyBlock
        showLineNumbers={false}
        theme={toggleCodeTheme}
        text={`function iterative(arrLength) {
          var _loopIt = 0;
          var t0 = performance.now();
          var arr = [0, 1];
        
          for (var i = arr.length; i < arrLength; i++) {
            if (_loopIt++ > 10001) {
              var csb_global = typeof window === 'undefined' ? self : window;
              csb_global.infiniteLoopError = new RangeError('Potential infinite loop: exceeded ' + 10001 + ' iterations. You can disable this check by creating a sandbox.config.json file.');
              throw csb_global.infiniteLoopError;
            }
        
            var nNum = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(nNum);
          }
        
          var t1 = performance.now();
          return (t1 - t0) * 1000;
        }`}
        language="javascript"
        codeBlock
      />
      <small>using static text – will stay the same post build</small>
      <br />
    </div>
  );
}
