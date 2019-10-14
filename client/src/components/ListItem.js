import React, { useContext } from 'react';
// State
import { TodoContext } from "../context/TodoProvider";
// Components
import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";

const ListItem = ({task}) => {
const { handleCompleteTask, handleDeleteTask } = useContext(TodoContext);
    return (
        <li>
            <CompleteButton value={task.id} action={() => handleCompleteTask(task.id)} />
            <span className={`task-text ${task.completed ? 'completed-task' : ''}`}>{task.task}</span>
            <span className="task-date">{task.date}</span>
            <DeleteButton action={() => handleDeleteTask(task.id)} />
        </li> 
    )
}

export default ListItem;