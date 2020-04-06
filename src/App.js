import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className = 'App'>
      <h1>fuck world.</h1>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
