import React, { useReducer } from 'react';
import './App.css';
import { TodoForm }from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { todoReducer, initialState } from "./reducers/todoReducer";

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    const newTodo = {
    todo: todo,
    completed: false,
    id: Date.now()
    }
  dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleCompleted = (id) => {
    dispatch({type: "TOGGLE_COMPLETED", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED"})
  }


  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList state={state} handleCompleted={handleCompleted} />

      <button className="clear-btn"
        onClick={(e) => {
          e.preventDefault();
          clearCompleted();
        }}>
          Clear Completed Todos
      </button>
    </div>
  );
}

export default App;
