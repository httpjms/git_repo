import { useState } from "react";

const ZendeskTask = ({ employee }) => {
  const copyText = `
  For Zendesk creation, thank you!:
  Full Name: ${employee.firstName} ${employee.lastName}
  Email Address: ${employee.emailAdd}
  ADID: ${employee.adid}
`;
  const [isCopied, setIsCopied] = useState(false);
  function copyToClipBoard(copyText) {
    navigator.clipboard.writeText(copyText);
    setIsCopied(true);
  }
  return (
    <div className="emp-zendesk-task">
      <p>For Zendesk creation, thank you!</p>
      <p>
        Full Name: {employee.firstName} {employee.lastName}
      </p>
      <p>Email Address: {employee.emailAdd}</p>
      <p>ADID: {employee.adid}</p>
      <div className="copy-button">
        <button
          className="copyBtn"
          disabled={isCopied ? true : false}
          onClick={() => copyToClipBoard(copyText)}
        >
          {isCopied ? "Copied ✔" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ZendeskTask;
