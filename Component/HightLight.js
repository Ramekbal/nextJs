import React, { createRef, useEffect } from "react";
import { findDOMNode } from "react-dom";
import highlight from "highlight.js";

export default function HightLight({ children, language }) {
  const code = createRef();
  useEffect(() => {
    highlight.highlightBlock(findDOMNode(code.current));
  }, []);
  return (
    <pre>
      <code ref={code} className={language}>
        {children}
      </code>
    </pre>
  );
}
