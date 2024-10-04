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
  const [isCopied, setIsCopied] = useState(false);
  console.log(isCopied);

  const handleGenerate = (employee) => {
    setEmployees((prevEmployee) => [...prevEmployee, employee]);
  };

  function copyToClipboard(textCopy) {
    navigator.clipboard.writeText(textCopy);
    setIsCopied(true);
  }
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
                taskName="Copy to AD"
                element={
                  <ADTask
                    employee={employee}
                    onCopyText={copyToClipboard}
                    isCopied={isCopied}
                  />
                }
              />

              <TaskItem
                taskName="Zendesk"
                element={<ZendeskTask employee={employee} />}
              />
              <TaskItem
                taskName="SDP Request"
                element={<SDP employee={employee} />}
              />
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
