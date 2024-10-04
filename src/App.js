import { useState } from "react";
import "./App.css";
import NewJoinerForm from "./components/NewJoinerForm";
import ADTask from "./components/DefaultApps/ADTask";
import ZendeskTask from "./components/DefaultApps/Zendesk";
import CorusonTask from "./components/DefaultApps/Coruson";
import SDP from "./components/DefaultApps/SDP";
import TaskItem from "./components/TaskItem";

function App() {
  const [employees, setEmployees] = useState("");

  const handleGenerate = (employee) => {
    setEmployees((prevEmployee) => [...prevEmployee, employee]);
  };

  return (
    <div className="container">
      <div className="main-body">
        <NewJoinerForm onGenerate={handleGenerate} />
        {employees.length < 1 ? (
          <div className="employee-container">
            <h2> Fill out the form to generate report</h2>
          </div>
        ) : (
          employees.map((employee) => (
            <div className="employee-container" key={employee.adid}>
              <TaskItem
                taskName="ActiveDirectory"
                element={<ADTask employee={employee} />}
              />

              <TaskItem
                taskName="Zendesk"
                element={<ZendeskTask employee={employee} />}
              />
              <TaskItem taskName="SDP" element={<SDP employee={employee} />} />
              <TaskItem
                taskName="Coruson"
                element={<CorusonTask employee={employee} />}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
