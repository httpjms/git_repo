import { useState } from "react";
import "./App.css";
import NewJoinerForm from "./components/NewJoinerForm";
import ADTask from "./components/ADTask";
import ZendeskTask from "./components/Zendesk";
import CorusonTask from "./components/Coruson";

function App() {
  const [employees, setEmployees] = useState("");
  const handleGenerate = (employee) => {
    setEmployees((prevEmployee) => [...prevEmployee, employee]);
  };

  return (
    <div className="main-body">
      <NewJoinerForm onGenerate={handleGenerate} />
      {employees.length < 1 ? (
        <div>Fill out the form to generate report</div>
      ) : (
        employees.map((employee) => (
          <div className="employee-container" key={employee.adid}>
            <ADTask employee={employee} />
            <ZendeskTask employee={employee} />
            <CorusonTask employee={employee} />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
