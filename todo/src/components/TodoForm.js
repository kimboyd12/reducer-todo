import React, { useState } from 'react';

export function TodoForm(props) {
    const [input, setInput] = useState('');

    const submitHandler = e => {
        console.log("Submitted!")
        e.preventDefault();
        props.addTodo(input);
        setInput('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text"
                name="todo"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;