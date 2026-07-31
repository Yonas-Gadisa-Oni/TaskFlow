import "./Card.css";
import TaskCard from "./TaskCard";

let nextId = 1;

function Card() {
    const tasks = [
        {
            id: nextId++,
            title: "TOTAL",
            number: 8,
            discription: "All Tasks"
        },
        {
            id: nextId++,
            title: "DONE",
            number: 2,
            discription: "25% complete"
        },
        {
            id: nextId++,
            title: "IN PROGRESS",
            number: 30,
            discription: "Active now"
        },
        {
            id: nextId++,
            title: "URGENT",
            number: 30,
            discription: "Need attention"
        }
    ];

    return (
        <div className="task">
            {tasks.map((task) => (
                <TaskCard key={task.id} {...task} />
            ))}
        </div>
    );
}

export default Card;