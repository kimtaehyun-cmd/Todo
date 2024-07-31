import React from 'react';

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div>
      {todo.text}
      <div>
        <button>수정</button>
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      </div>
    </div>
  );
};

export default Todo;
