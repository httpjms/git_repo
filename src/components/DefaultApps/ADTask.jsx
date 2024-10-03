const ADTask = ({ employee }) => {
  return (
    <div className="emp-ad-task">
      <label>
        Full Name: {employee.firstName} {employee.lastName}
      </label>
      <label>Email Address: {employee.emailAdd}</label>
      <label>ADID: {employee.adid}</label>
      <label>Job Title: {employee.jobTitle}</label>
      <label>Department: {employee.department}</label>
      <label>Manager: {employee.manager}</label>
      <label>Address: {employee.address}</label>
      <label>Zip Code: {employee.zipCode}</label>
      <label>City: {employee.selectedCity}</label>
    </div>
  );
};
export default ADTask;
