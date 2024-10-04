import { useState } from "react";

const SDP = ({ employee }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = `For enabling po ng SDP, thank you! 
  Display Name: ${employee.firstName} ${employee.lastName}
  Email Address: ${employee.emailAdd}
  Job Title: ${employee.jobTitle}
  Department: ${employee.department}
  Manager: ${employee.manager}
  Address: ${employee.address}
  Zip Code: ${employee.zipCode}
  Country: ${employee.country}`;
  function copyToClipboard(copyText) {
    navigator.clipboard.writeText(copyText);
    setIsCopied(true);
  }
  return (
    <div className="emp-sdp-task">
      <p>
        <label>For enabling po ng SDP. thank you</label>
      </p>
      <p></p>
      <p>
        Display Name: {employee.firstName} {employee.lastName}
      </p>
      <p>Email Address: {employee.emailAdd}</p>
      <p>Job Title: {employee.jobTitle}</p>
      <p>Department: {employee.department}</p>
      <p>Manager: {employee.manager}</p>
      <p>Country: {employee.country}</p>
      <p>Zendesk: Created</p>

      <div className="copy-button">
        <button
          className="copyBtn"
          disabled={isCopied ? true : false}
          onClick={() => copyToClipboard(copyText)}
        >
          {isCopied ? "Copied ✔" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default SDP;
