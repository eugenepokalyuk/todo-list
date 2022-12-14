import React, { useState } from 'react';
import './App.css';
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'
import 'uikit/dist/js/uikit-icons.js'
const style = {
  margin: "0 auto"
}
function App() {
  //#region [To-Do]
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  const addTodo = (text) => {
    if (text !== "") {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    } else {
      alert("Enter your To-Do label")
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
  //#endregion
  //#region [Done To-Do]
  const [clicks, setClicks] = useState(() => {
    const localData = localStorage.getItem('countDoneToDo');
    return localData ? JSON.parse(localData) : [0];
  });

  const addCounter = (click) => {
    const newClicks = click++;
    setClicks(newClicks);
    localStorage.setItem('countDoneToDo', JSON.stringify(newClicks));
  };

  const removeCounter = () => {
    setClicks(0)
    localStorage.setItem('countDoneToDo', JSON.stringify(0));
  };
  //#endregion
  //#region [Removed To-Do]
  const [clicksRemove, setClicksRemove] = useState(() => {
    const localData = localStorage.getItem('countRemovedToDo');
    return localData ? JSON.parse(localData) : [0];
  });

  const addCounterRemove = (clicksRemove) => {
    const newClicksRemove = clicksRemove++;
    setClicksRemove(newClicksRemove);
    localStorage.setItem('countRemovedToDo', JSON.stringify(newClicksRemove));
  };

  const removeCounterRemove = () => {
    setClicksRemove(0)
    localStorage.setItem('countRemovedToDo', JSON.stringify(0));
  };
  //#endregion
  return (
    <div className="uk-card-body uk-text-left uk-border-rounded">
      <h1>My To-Do List</h1>
      <div className="uk-child-width-expand@s uk-text-center" data-uk-grid data-uk-height-match="target: > div > .uk-card">
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
            <p>Completed tasks: {clicks} </p>
            <button className='uk-button uk-button-danger uk-border-rounded' onClick={() => { removeCounter(); }}>Clear data</button>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
            <p>Deleted tasks: {clicksRemove} </p>
            <button className='uk-button uk-button-danger uk-border-rounded' onClick={() => { removeCounterRemove(); }}>Clear data</button>
          </div>
        </div>
      </div>

      <form
        className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-top" data-uk-grid
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(e.target.item.value);
          e.target.item.value = '';
        }}
      >

        <div className="uk-width-expand@m">
          <input name="item" className="uk-input uk-border-rounded" type="text" placeholder="Add New Todo..." />
        </div>
        <div className="uk-width-auto@m uk-visible@s">
          <button type="submit" className="uk-button uk-button-primary uk-border-rounded uk-margin-left">Add To-Do</button>
        </div>
        <div className="uk-width-auto@m uk-hidden@l">
          <button type="submit" className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-top uk-border-rounded">Add To-Do</button>
        </div>

      </form>

      <ul className='uk-padding-remove-left uk-visible@s'>
        {todos.map((todo, index) => (
          <li className='uk-card uk-card-default uk-card-body uk-border-rounded uk-margin-top uk-flex uk-flex-middle uk-flex-between' data-uk-scrollspy="cls:uk-animation-slide-left" key={index}>
            {todo.text}
            <div className='uk-align-right'>
              <button className='uk-button uk-button-primary uk-border-rounded' onClick={() => {
                addCounter(clicks + 1);
                removeTodo(index)
              }}>Done</button>
              <button className='uk-button uk-button-danger uk-border-rounded uk-margin-left'
                onClick={() => {
                  addCounterRemove(clicksRemove + 1);
                  removeTodo(index)
                }}
              >Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <ul className='uk-padding-remove-left uk-hidden@l'>
        {todos.map((todo, index) => (
          <li className='uk-card uk-card-default uk-card-body uk-border-rounded uk-margin-top uk-text-center' data-uk-scrollspy="cls:uk-animation-slide-left" key={index}>
            <p className='uk-text-left'>{todo.text}</p>
            <div className='uk-align-center'>
              <button className='uk-button uk-button-primary uk-border-rounded' onClick={() => {
                addCounter(clicks + 1);
                removeTodo(index)
              }}>Done</button>
              <button className='uk-button uk-button-danger uk-border-rounded uk-margin-left'
                onClick={() => {
                  addCounterRemove(clicksRemove + 1);
                  removeTodo(index)
                }}
              >Remove</button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;