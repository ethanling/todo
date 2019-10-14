import React from "react";

// State
import TodoProvider from './context/TodoProvider';

// Pages
import Main from './components/pages/Main';

function App() {
    return (
        <TodoProvider>
            <Main />
        </TodoProvider>
    );
}

export default App;