import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoList = () => {

    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    return (
        <div>
            <p>List</p>
        </div>
    )

}

export default TodoList;