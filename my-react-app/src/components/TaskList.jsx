import "./TaskList.css";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <div className="TaskList">
      <div className="Header">
        <div className="left">
          <button>All</button>
          <button>ToDo</button>
          <button>In Progress</button>
          <button>Done</button>
        </div>

        <div className="right">
          <button>Filter</button>
        </div>
      </div>

      <div className="table-header">
        <p>TASK</p>
        <p>PROJECT</p>
        <p>PRIORITY</p>
        <p>DUE</p>
      </div>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          project={task.project}
          priority={task.priority}
          due={task.due}
        />
      ))}
    </div>
  );
}

export default TaskList;