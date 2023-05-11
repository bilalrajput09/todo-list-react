/* eslint-disable react/prop-types */
import { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const { addTodoItem } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      setMessage('Please add item');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          // ...
          className="input-text"
        />
        <button type="submit" className="input-submit">
          Submit
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};
export default InputTodo;
