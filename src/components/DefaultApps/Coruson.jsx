import CopyButton from "./CopyButton";
const CorusonTask = ({ employee }) => {
  const copyText = `Hi Jaya,\n\nGood day.\nFor your kind assistance please on creating the Coruson profile for below user:\n\n\nFore Name: ${employee.firstName}\nLastName: ${employee.lastName}\nEmail Address: ${employee.emailAdd}\nDepartment: ${employee.department}\nADID: ${employee.adid}\nCountry: ${employee.country}`;
  return (
    <div className="emp-task">
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

      <div className="copy-button">
        <CopyButton copyText={copyText} />
      </div>
    </div>
  );
};
export default CorusonTask;
