import React, { useState } from 'react';

const Form = ({ createTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button>submit</button>
    </form>
  );
};

export default Form;
