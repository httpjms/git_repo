import { useState } from "react";
const CorusonTask = ({ employee }) => {
  const [isCopied, setIsCopied] = useState(false);
  function copyToClipboard(textCopy) {
    navigator.clipboard.writeText(textCopy);
    setIsCopied(true);
  }
  const copyText = `Hi Jaya, 
  
  Good day.
  For your kind assistance please on creating the Coruson profile for below user:
  
  Fore Name: ${employee.firstName}
  LastName: ${employee.lastName}
  Email Address: ${employee.emailAdd}
  Department: ${employee.department}
  ADID: ${employee.adid}
  Country: ${employee.country}
  `;
  return (
    <div className="emp-coruson-task">
      <label>
        Hi Jaya, <p>Good day.</p> For your kind assistance please on the
        creation of Coruson Profile for below new joiner
      </label>
      <p></p>
      <p>Forename: {employee.firstName}</p>
      <p>Last Name: {employee.lastName}</p>
      <p>Email Address: {employee.emailAdd}</p>
      <p>Department: {employee.department}</p>
      <p>OKTA ID: {employee.adid}</p>
      <p>Country: {employee.country}</p>

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
export default CorusonTask;
