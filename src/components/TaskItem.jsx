import { useState } from "react";

import ADTask from "./DefaultApps/ADTask";
import SDP from "./DefaultApps/SDP";
import Zendesk from "./DefaultApps/Zendesk";
import Coruson from "./DefaultApps/Coruson";

const TaskItem = ({ task, employee }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="task-container-details">
      <div className="task-title" onClick={toggleOpen}>
        <h2>{task}</h2>
        <span>
          <strong> {isOpen ? "-" : "+"}</strong>
          {}
        </span>
      </div>

      <div className="task">
        {isOpen && task === "ActiveDirectory" && <ADTask employee={employee} />}
        {isOpen && task === "SDP" && <SDP employee={employee} />}
        {isOpen && task === "Zendesk" && <Zendesk employee={employee} />}
        {isOpen && task === "Coruson" && <Coruson employee={employee} />}
      </div>
    </div>
  );
};

export default TaskItem;
