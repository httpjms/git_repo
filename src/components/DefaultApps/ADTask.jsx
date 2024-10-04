import { useState } from "react";
const ADTask = ({ employee }) => {
  const copyText = `
    Full Name: ${employee.firstName} ${employee.lastName}
    Email Address: ${employee.emailAdd}
    ADID: ${employee.adid}
    Job Title: ${employee.jobTitle}
    Department: ${employee.department}
    Manager: ${employee.manager}
    Address: ${employee.address}
    Zip Code: ${employee.zipCode}
    City: ${employee.selectedCity}
  `;

  // For Coruson Profile creation:
  // Forename: ${employee.firstName}
  // Last Name: ${employee.lastName}
  // Email Address: ${employee.emailAdd}
  // Department: ${employee.department}
  // OKTA ID: ${employee.adid}
  // Country: ${employee.country}
  const [isCopied, setIsCopied] = useState(false);
  function copyToClipboard(textCopy) {
    navigator.clipboard.writeText(textCopy);
    setIsCopied(true);
  }
  return (
    <div className="emp-ad-task">
      <p>
        Full Name: {employee.firstName} {employee.lastName}
      </p>
      <p>Email Address: {employee.emailAdd}</p>
      <p>ADID: {employee.adid}</p>
      <p>Job Title: {employee.jobTitle}</p>
      <p>Department: {employee.department}</p>
      <p>Manager: {employee.manager}</p>
      <p>Address: {employee.address}</p>
      <p>Zip Code: {employee.zipCode}</p>
      <p>City: {employee.selectedCity}</p>

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
export default ADTask;
