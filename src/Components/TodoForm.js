import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='uk-tile uk-tile-default uk-tile-muted-darker uk-border-rounded uk-padding-small'>
      {props.edit ? (
        <>
          <input placeholder='Update your item' value={input} onChange={handleChange} name='text' ref={inputRef} className='uk-button uk-button-mute uk-border-rounded' />
          <button onClick={handleSubmit} className='todo-button uk-button uk-button-primary uk-border-rounded uk-margin-left'>
            Update
          </button>
        </>
      ) : (
        <>
          <input placeholder='Add a todo' value={input} onChange={handleChange} name='text' className='uk-button uk-button-mute uk-border-rounded' ref={inputRef} />
          <button onClick={handleSubmit} className='todo-button uk-button uk-button-primary uk-border-rounded uk-margin-left'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;