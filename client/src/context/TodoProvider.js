import React, { useState } from 'react';

export const TodoContext = React.createContext();

const TodoProvider = props => {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState({ todos: [] });
    const [completedNum, setCompletedNum] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleSetNewTodo = (task, date) => {
        // Creats task format
        // Todo: add date functionality
        const taskId = list.todos.length + 1;
        const newTodo = { 
            id: taskId,
            task: task,
            date: "",
            completed: false
        };

        setTodo(newTodo);
        // Adds task object to state array
        handleAddToList(newTodo)
    }

    const handleAddToList = item => {
        // Adds new task to state array
        setList((prevState) => ({
            todos: [...prevState.todos, item]
        }))
    }

    const handleCompleteTask = (id) => {
        // Create temporary array to store state
        const tempState = list.todos;
        // Find correct todo, and mark as completed, or unmark if already completed
        for (let i = 0; i < tempState.length; i++) {
            if (tempState[i].id === id) {
                if (tempState[i].completed) {
                    // CompletedNum used for calculating percentage of completed tasks
                    tempState[i].completed = false;
                    setCompletedNum(parseInt(completedNum - 1))
                } else {
                    // Remove from completed
                    tempState[i].completed = true;
                    setCompletedNum(parseInt(completedNum + 1));
                }
            }
        }
        // Update state
        setList({ todos: tempState});
    }

    const handleDeleteTask = id => {
        // Finds task to be deleted and removes it from state array
        const newState = list.todos.filter(task => id !== task.id);
        setList({todos: newState});
        if (completedNum) {
            setCompletedNum(completedNum - 1);
        }
    }

    const handleSetFinished = percent => {
        if (percent === 100) {
            setFinished(true);
        } else {
            setFinished(false);
        }
    }

    return (
        <TodoContext.Provider 
            value={{
                handleSetNewTodo,
                handleAddToList,
                handleCompleteTask,
                handleDeleteTask,
                handleSetFinished,
                todo,
                list,
                completedNum,
                finished
            }}
        >
            { props.children }
        </TodoContext.Provider>
    )

}

export default TodoProvider;