import React, { useState } from 'react';

const CompleteButton = ({ action, value }) => {
    console.log(value);
    return (
        <form className="completed-checkbox">
            <input
                id={`checkbox-${value}`}
                name=""
                value={value}
                type="checkbox"
                onClick={action}
            />
            <label htmlFor={`checkbox-${value}`}></label>
        </form>
    );
}

export default CompleteButton;