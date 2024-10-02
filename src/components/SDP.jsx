const SDP = ({ employee }) => {
  return (
    <div className="emp-sdp-task">
      <h3>SDP</h3>
      <label>For enabling po ng SDP. thank you</label>
      <p></p>
      <label>
        Display Name: {employee.firstName} {employee.lastName}
      </label>
      <label>OKTA ID: {employee.jobTitle}</label>
      <label>Email Address: {employee.emailAdd}</label>
      <label>Department: {employee.department}</label>
      <label>Manager: {employee.manager}</label>
      <label>Country: {employee.country}</label>
      <label>Zendesk: Created</label>
    </div>
  );
};

export default SDP;
