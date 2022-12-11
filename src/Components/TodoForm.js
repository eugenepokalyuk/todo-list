import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(
    props.edit ? 
        props.edit.value : ''
    );
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
      id: Date.now(),
      text: input
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='uk-tile uk-tile-default uk-tile-muted-darker uk-border-rounded uk-padding-small'>
      {
        props.edit ? (
            <>
          <h2>Update this todo</h2>
          <div className='uk-tile uk-padding-small uk-margin-top uk-border-rounded uk-animation-slide-left'>
            <div className="uk-text-center uk-grid uk-grid-small uk-flex uk-flex-middle" data-uk-grid>
                
                <div className="uk-width-expand@m uk-border-rounded">
                    <div className="uk-card uk-card-default uk-card-body uk-text-left uk-border-rounded">
                        <div>
                            <input placeholder='Update your item' value={input} onChange={handleChange} name='text' ref={inputRef} className='uk-button uk-button-default uk-border-rounded' />
                        </div>
                    </div>
                </div>

                <div className="uk-width-auto@m uk-animation-toggle">
                    <div className="uk-card uk-card-default uk-padding-small uk-border-rounded uk-animation-scale-up">
                        <div className='icons'>
                            <span className="uk-icon" onClick={handleSubmit} data-uk-icon="check">
                              <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth="1.1" points="4,10 8,15 17,4"></polyline></svg>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
          </div>
            </>
        ) : (
            <>
            <input placeholder='Add a new todo' value={input} onChange={handleChange} name='text' className='uk-button uk-button-mute uk-border-rounded' ref={inputRef} />
            <button onClick={handleSubmit} className='todo-button uk-button uk-button-primary uk-border-rounded uk-margin-left'>
                Add todo
            </button>
            </>
        )
      }
    </form>
  );
}

export default TodoForm;