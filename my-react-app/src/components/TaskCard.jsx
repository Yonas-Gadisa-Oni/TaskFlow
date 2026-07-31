import "./TaskCard.css";

function TaskCard ({ title, number, discription }) {
    return (
        <div className="taskCard-container" >
            <div className="taskCard">
                <h3>{title}</h3>
                <p>{number}</p>
                <p>{discription}</p>
            </div>
        </div>
    );
}

export default TaskCard;