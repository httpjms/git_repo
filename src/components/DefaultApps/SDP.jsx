import CopyButton from "./CopyButton";

const SDP = ({ employee }) => {
  const copyText = `For enabling po ng SDP, thank you!\nDisplay Name: ${employee.firstName} ${employee.lastName}\nEmail Address: ${employee.emailAdd}\nJob Title: ${employee.jobTitle}\nDepartment: ${employee.department}\nManager: ${employee.manager}\nAddress: ${employee.address}\nZip Code: ${employee.zipCode}\nCountry: ${employee.country}`;

  return (
    <div className="emp-task">
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
        <CopyButton copyText={copyText} />
      </div>
    </div>
  );
};

export default SDP;
