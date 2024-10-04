const SDP = ({ employee }) => {
  return (
    <div className="emp-sdp-task">
      <p>
        <label>For enabling po ng SDP. thank you</label>
      </p>
      <p></p>
      <p>
        Display Name: {employee.firstName} {employee.lastName}
      </p>
      <p>OKTA ID: {employee.adid}</p>
      <p>Email Address: {employee.emailAdd}</p>
      <p>Job Title: {employee.jobTitle}</p>
      <p>Department: {employee.department}</p>
      <p>Manager: {employee.manager}</p>
      <p>Country: {employee.country}</p>
      <p>Zendesk: Created</p>
    </div>
  );
};

export default SDP;
