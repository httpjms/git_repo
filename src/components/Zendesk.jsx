const ZendeskTask = ({ employee }) => {
  return (
    <div className="emp-zendesk-task">
      <h3>Zendesk</h3>
      <label>For Zendesk creation, thank you!</label>
      <label>
        Full Name: {employee.firstName} {employee.lastName}
      </label>
      <label>Email Address: {employee.emailAdd}</label>
      <label>ADID: {employee.adid}</label>
    </div>
  );
};

export default ZendeskTask;
