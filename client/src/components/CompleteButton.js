import React from "react";

const CompleteButton = ({ action, value }) => {
    return (
        <form className="completed-checkbox">
            <input
                id={`checkbox-${value}`}
                name=""
                value={value}
                type="checkbox"
            />
            <label onClick={action} htmlFor={`checkbox-${value}`}></label>
        </form>
    );
};

export default CompleteButton;
