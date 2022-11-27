import React, { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={
        todo.isComplete ? 
            'uk-animation-slide-left todo-row complete' : 'uk-animation-slide-left todo-row'
        } key={index} >
        <div className='uk-tile uk-tile-muted-darker uk-padding-small uk-margin-top uk-border-rounded'>
            <div className="uk-text-center uk-grid uk-grid-small uk-flex uk-flex-middle" data-uk-grid>
                <div className="uk-width-expand@m uk-border-rounded">
                    <div className="uk-card uk-card-default uk-card-body uk-text-left uk-border-rounded">
                        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                            {todo.text}
                        </div>
                    </div>
                </div>

                <div className="uk-width-auto@m uk-animation-toggle">
                    <div className="uk-card uk-card-default uk-padding-small uk-border-rounded uk-animation-scale-up">
                        <div className='icons'>
                            <span className="uk-icon" data-uk-icon="trash" onClick={() => removeTodo(todo.id)}>
                                <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"></polyline><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"></polyline><rect x="8" y="7" width="1" height="9"></rect><rect x="11" y="7" width="1" height="9"></rect><rect x="2" y="3" width="16" height="1"></rect></svg>
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="uk-width-auto@m uk-animation-toggle">
                    <div className="uk-card uk-card-default uk-padding-small uk-border-rounded uk-animation-scale-up">
                        <div className='icons'>
                            <span className="uk-icon" data-uk-icon="pencil" onClick={() => setEdit({ id: todo.id, value: todo.text })}>
                                <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"></path><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"></path></svg>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  ));
};

export default Todo;