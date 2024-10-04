import Button from "../Button";
const ADTask = ({ employee, onCopyText, isCopied }) => {
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

  // For Zendesk creation:
  // Full Name: ${employee.firstName} ${employee.lastName}
  // Email Address: ${employee.emailAdd}
  // ADID: ${employee.adid}

  // For Coruson Profile creation:
  // Forename: ${employee.firstName}
  // Last Name: ${employee.lastName}
  // Email Address: ${employee.emailAdd}
  // Department: ${employee.department}
  // OKTA ID: ${employee.adid}
  // Country: ${employee.country}

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

      <div className="copyBtn">
        <Button
          disabled={isCopied ? true : false}
          clickBtn={() => onCopyText(copyText)}
        >
          {isCopied ? "Copied ✔" : "Copy"}
        </Button>
      </div>
    </div>
  );
};
export default ADTask;
