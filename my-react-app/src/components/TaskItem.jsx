function TaskItem({ title, project, priority, due }) {
  return (
    <div className="list">
      <h4>{title}</h4>
      <p>{project}</p>
      <p>{priority}</p>
      <p>{due}</p>
    </div>
  );
}

export default TaskItem;