import { useState } from "react";
import "./App.css";
import NewJoinerForm from "./components/NewJoinerForm";
import ADTask from "./components/ADTask";
import ZendeskTask from "./components/Zendesk";
import CorusonTask from "./components/Coruson";
import SDP from "./components/SDP";
import TaskItem from "./components/TaskItem";

function App() {
  const [employees, setEmployees] = useState("");
  const handleGenerate = (employee) => {
    setEmployees((prevEmployee) => [...prevEmployee, employee]);
  };
  const task = [
    "Copy to AD ",
    "Local IT",
    "Zendesk Request",
    "Coruson Request",
    "SDP Request",
  ];

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
              <ul>
                {task.map((t) => (
                  <TaskItem key={t} task={t} />
                ))}
                <li className="task-box">
                  <ADTask employee={employee} />
                </li>

                <li className="task-box">
                  <ZendeskTask employee={employee} />
                </li>
                <li className="task-box">
                  <SDP employee={employee} />
                </li>
                <li className="task-box">
                  <CorusonTask employee={employee} />
                </li>
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
