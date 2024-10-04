const ZendeskTask = ({ employee }) => {
  return (
    <div className="emp-zendesk-task">
      <p>For Zendesk creation, thank you!</p>
      <p>
        Full Name: {employee.firstName} {employee.lastName}
      </p>
      <p>Email Address: {employee.emailAdd}</p>
      <p>ADID: {employee.adid}</p>
    </div>
  );
};

export default ZendeskTask;
