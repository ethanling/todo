import React, { useContext } from 'react';
// State
import { TodoContext } from "../context/TodoProvider";
// Comnponents
import AddTodo from "./AddTodo";
import ListItem from "./ListItem";

const List = () => {
    const { list } = useContext(TodoContext);
    
    return (
        <div className="list">
            <AddTodo />                
            <ul>
            {list.todos.map((item, i) => {
                return <ListItem key={i} task={item} />
            })}
            </ul>
        </div>
    );
}

export default List;