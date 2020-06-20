import React from "react";
import { Todo } from "./Todo"

export function TodoList(props) {

    console.log("list")
    return (
        <div className="todo-list">
            {props.state.map((item) => {
                return <Todo item={item} key={item.id} handleCompleted={props.handleCompleted} />
            })}
        </div>
    )
}