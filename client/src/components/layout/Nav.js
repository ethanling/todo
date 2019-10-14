import React, { useContext } from "react";
// State
import { TodoContext } from '../../context/TodoProvider';
// Components
import ProgressCircle from '../ProgressCircle';

const Nav = () => {
    const { finished } = useContext(TodoContext);
    return (
        <nav>
            <div className="nav-container">
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
