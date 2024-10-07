import { useState } from "react";

function CopyButton({ employee, copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard(textCopy) {
    navigator.clipboard.writeText(textCopy);
    setIsCopied(true);
  }
  return (
    <div className="copy-button">
      <button
        className="copyBtn"
        disabled={isCopied ? true : false}
        onClick={() => copyToClipboard(copyText)}
      >
        {isCopied ? "Copied ✔" : "Copy"}
      </button>
    </div>
  );
}
export default CopyButton;
