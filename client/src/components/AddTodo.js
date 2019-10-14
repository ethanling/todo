import React, { useState, useContext } from 'react';
// State
import { TodoContext } from '../context/TodoProvider';

const AddTodo = props => {
    const [input, setInput] = useState('');
    const { handleSetNewTodo } = useContext(TodoContext);

    const handleInputChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const taskDate = new Date();

        if (input && input !== '' && input !== ' ') {
            handleSetNewTodo(input.toString().trim(), taskDate);
            setInput('');
        }
    }

    return (
        <form className="add-task" onSubmit={ handleSubmit } autoComplete="off">
            <input id="task" value={input} onChange={ handleInputChange } />
            <label htmlFor="task">Add a new task...</label>
            <button type="button" className="add-task-button" onClick={ handleSubmit }>+</button>
        </form>
    )
}

export default AddTodo; 