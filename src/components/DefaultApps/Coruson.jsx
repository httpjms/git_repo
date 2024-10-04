const CorusonTask = ({ employee }) => {
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
    </div>
  );
};
export default CorusonTask;
