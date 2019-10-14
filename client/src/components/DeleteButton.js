import React from "react";
// Icon
import TrashIcon from "../icons/delete.svg";

const DeleteButton = ({ action }) => {
    return (
        <button className="delete-button" type="button" onClick={action}>
            <img src={TrashIcon} className="delete-button-icon" alt="Delete task" />
        </button>
    );
};

export default DeleteButton;
