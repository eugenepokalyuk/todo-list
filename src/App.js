import React from 'react';
import './App.css';

import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'

import TodoList from './Components/TodoList';
function App() {
    return (
      <div className='todo-app'>
        <div className="uk-tile uk-tile-secondary">
            <h1>Todo list</h1>
        </div>
        <div className='uk-padding uk-tile-muted'>
            <TodoList />
        </div>
      </div>
    )
  }
export default App;