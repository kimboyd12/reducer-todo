import React from "react";

export function Todo(props) {
    console.log(props);
    
    return (
        <div className="Todo">
            <h3 className={props.item.completed ? 'completed' : ''}
                onClick={(e) => {
                    e.preventDefault();
                    props.handleCompleted(props.item.id);
                }}>
                    {props.item.todo}
                </h3>
        </div>
    )
}