import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-csharp";

interface CodeBlockProps {
  code: string;
  language: string;
}

// GitHub-style alert styles
const alertStyles: { [key: string]: string } = {
  note: "border-l-4 border-[#477fef] bg-[#212936] p-3 rounded-md text-[#477fef]",
  important: "border-l-4 border-[#8259dd] bg-[#212936] p-3 rounded-md text-[#8259dd]",
  warning: "border-l-4 border-[#966c23] bg-[#212936] p-3 rounded-md text-[#966c23]",
  tip: "border-l-4 border-[#64b75d] bg-[#212936] p-3 rounded-md text-[#64b75d]",
  caution: "border-l-4 border-[#c9453b] bg-[#212936] p-3 rounded-md text-[#c9453b]",
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  // Handle special GitHub-style notes (important, note, warning, tip)
  if (alertStyles[language]) {
    return (
      <div className={`${alertStyles[language]} my-2 p-3`}>
        <strong className="capitalize">{language}</strong>
        <p className="mt-1 text-gray-300">{code.trim()}</p>
      </div>
    );
  }

  // Default: Syntax highlighted code block
  return (
    <pre className="rounded-lg overflow-x-auto bg-gray-900 p-3">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};
