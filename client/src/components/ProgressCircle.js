import React, { useState, useContext, useEffect } from 'react';
// Global State
import { TodoContext } from '../context/TodoProvider';

const ProgressCircle = props => {
    const [percent, setPercent] = useState(0);
    const { list, completedNum, handleSetFinished } = useContext(TodoContext);

    useEffect(() => {
        if (completedNum) {
            const updatedPercentage = Math.round(
                (completedNum / list.todos.length) * 100
            );
            setPercent(updatedPercentage);
        } else {
            setPercent(0);
        }
        // Send percentage to global state
        handleSetFinished(percent);
    }, [percent, setPercent, list, completedNum, handleSetFinished])

    const sqSize = props.sqSize;
    const strokeWidth = props.strokeWidth;
    const radius = (sqSize / strokeWidth) * 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * percent / 100; 

    return (
        <svg
            width={sqSize}
            height={sqSize}
            viewBox={viewBox}
            className="percentage-circle"
            style={(list.todos.length === 0) ? ({ opacity: 0 }) : ({ opacity: 1 })}
        >
            <circle
                className="circle-background"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
            />
            <circle
                className="circle-progress"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                // Start progress marker at 12 O'Clock
                transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }}
            />
            <text
                className="circle-text"
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle"
            >
                { percent + "%" }
            </text>
        </svg>
    );
}

export default ProgressCircle;