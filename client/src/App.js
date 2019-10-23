import React from "react";

// State & Theme
import ThemeProvider from './context/ThemeProvider';
import TodoProvider from './context/TodoProvider';

// Pages
import Main from './components/pages/Main';

function App() {
    return (
        <ThemeProvider>
            <TodoProvider>
                <Main />
            </TodoProvider>
        </ThemeProvider>
    );
}

export default App;