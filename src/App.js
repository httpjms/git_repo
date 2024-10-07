import { useState } from "react";
import "./App.css";
import NewJoinerForm from "./components/NewJoinerForm";
import TaskItem from "./components/TaskItem";
import tasks from "./data/datas";

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
              {tasks.map((task, index) => (
                <TaskItem key={index} task={task} employee={employee} />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
