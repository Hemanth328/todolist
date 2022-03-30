import React, { useState } from 'react'
import TodoList from './TodoList';

function TodoForm() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (event) => {
    setTask(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(task);

    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask(" ");
  }

  const deleteHandler = (indexvalue) => {
    const newtodo = todos.filter((todo, index) => index !== indexvalue);
    setTodos(newtodo);
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Add to your todo list' onChange={changeHandler} value={task} />
        <button type='Submit' >Add todo</button>
      </form>

      <TodoList todolst={todos} deletingtodo={deleteHandler} />
    </div>
  )
}

export default TodoForm;