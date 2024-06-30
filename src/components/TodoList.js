import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [showIcons, setShowIcons] = useState(false); // State to toggle icons visibility

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleIconsVisibility = () => {
    setShowIcons(prev => !prev); // Toggle icons visibility state
  };

  return (
    <>
      <h1>This is Quad Btech TodoList</h1>
      
      <TodoForm onSubmit={addTodo} />
      <button id="toggler"
       style={{
        width: '30%',
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px', // Adjust as needed
        marginBottom:'30px',
        marginLeft:'35%'
      }}
      onClick={toggleIconsVisibility}>
        {showIcons ? 'Hide Icons' : 'View Icons'}
      </button>
      <Todo
        todos={todos}
        completeTodo={showIcons ? completeTodo : undefined}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        showIcons={showIcons} // Pass state to showIcons prop
      />
    </>
  );
}

export default TodoList;
