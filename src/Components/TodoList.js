import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  
  // function init() {
    // if (localStorage.getItem("todos") && localStorage.getItem("todos").length > 0) {
    //   setTodos(
    //     JSON.parse(localStorage.getItem("todos")).forEach(element => {
    //     })
    //   )  
    // }
    // todos = []

    // if(localStorage.getItem("todos")) {
    //   todos.push(...JSON.parse(localStorage.getItem("todos")));
    // }

    // console.log(todos);
    // console.log(JSON.parse(localStorage.getItem("todos")))

    // console.log("todos", todos)
  // }
  
  //# add todo
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    // const newTodos = [todo, ...todos];
    // localStorage.setItem("todos", JSON.stringify([todo, ...todos]));
    setTodos([todo, ...todos]);
  };
  //# update todo
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    // let currentArray = JSON.parse(localStorage.getItem("todos"))
    // let otherItems =  currentArray.filter(todo => todo.id != todoId);
    // let final = [...otherItems, newValue];

    // localStorage.removeItem("todos");
    // localStorage.setItem("todos", JSON.stringify(final));

    // console.log("updateTodo", updateTodo);
  };
  //# remove todo
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);

    // localStorage.removeItem("todos");
    // localStorage.setItem("todos", JSON.stringify(removedArr));

    // console.log("removeTodo", removeTodo);
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

    // localStorage.removeItem("todos");
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));

    // console.log("completeTodo", completeTodo);
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
        // init = {init}
      />
    </>
  );
}

export default TodoList;