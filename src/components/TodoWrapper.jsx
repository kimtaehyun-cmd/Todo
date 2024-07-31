import React, { useState } from 'react';
import Form from './Form';
import Todo from './Todo';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (a) => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        isEdit: false,
        text: a,
        isDone: false,
      },
    ]);
  };

  const deleteTodo = (a) => {
    console.log(a);
    setTodos(todos.filter((todo) => todo.id !== a));
    console.log(todos);
  };
  return (
    <div>
      <Form createTodo={createTodo} />

      {todos.map((todo, idx) => (
        <Todo key={idx} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoWrapper;
