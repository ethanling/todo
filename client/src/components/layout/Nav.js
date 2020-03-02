import React, { useContext } from "react";
// State & Theme
import { TodoContext } from '../../context/TodoProvider';
import { ThemeContext } from '../../context/ThemeProvider'
// Components
import ProgressCircle from '../ProgressCircle';

const Nav = () => {
    const { finished } = useContext(TodoContext);
    const { theme } = useContext(ThemeContext);

    return (
        <nav>
            <div
                className="nav-container"
            >
                <div className="logo-container">
                    <span className={`${finished ? "logo" : "logo logo-hide"}`}>
                        Nice work.
                    </span>
                    <span className={`${finished ? "logo logo-hide" : "logo"}`}>
                        Do.
                    </span>
                </div>
                <ProgressCircle sqSize={100} strokeWidth={7} />
            </div>
        </nav>
    );
};

export default Nav;
