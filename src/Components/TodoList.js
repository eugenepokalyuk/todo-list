import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const init = item => {
    if (localStorage.getItem("todos") && localStorage.getItem("todos").length > 0) {
        JSON.parse(localStorage.getItem("todos")).forEach(element => {
            todos.push(element);
        });
    }
  }
  
  //# add todo
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    localStorage.setItem("todos", JSON.stringify(newTodos));
    console.log("newTodos", newTodos)
    setTodos(newTodos);
  };
  //# update todo
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));

    let currentArray = JSON.parse(localStorage.getItem("todos"))
    let otherItems =  currentArray.filter(todo => todo.id != todoId);
    let final = [...otherItems, newValue];

    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(final));
  };
  //# remove todo
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    
    setTodos(removedArr);

    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(removedArr));
  };
  //# complete todo
  const completeTodo = id => {
    // let completedArr = [...todos].filter(todo => todo.id === id);
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);

    localStorage.removeItem("todos")
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  };

  return (
    <>
      {/* <h1>What's the Plan for Today?</h1> */}
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;