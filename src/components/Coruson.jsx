const CorusonTask = ({ employee }) => {
  return (
    <div className="emp-coruson-task">
      <h3>Coruson</h3>

      <label>
        Hi Jaya, <p>Good day.</p> For your kind assistance please on the
        creation of Coruson Profile for below new joiner
      </label>
      <p></p>
      <label>Forename: {employee.firstName}</label>
      <label>Last Name: {employee.lastName}</label>
      <label>Email Address: {employee.emailAdd}</label>
      <label>Department: {employee.department}</label>
      <label>OKTA ID: {employee.adid}</label>
      <label>Country: {employee.country}</label>
    </div>
  );
};
export default CorusonTask;
