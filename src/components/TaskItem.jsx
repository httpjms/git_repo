import { useState } from "react";

const TaskItem = ({ taskName, element }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="task-container-details">
      <div className="task-title" onClick={toggleOpen}>
        <h2>{taskName}</h2>
        <span>
          <strong> {isOpen ? "-" : "+"}</strong>
        </span>
      </div>

      <div className="task">{isOpen && element}</div>
    </div>
  );
};

export default TaskItem;
