import React from 'react';
import './App.css';
import TodoList from './components/todoList';

class App extends React.Component {

  render () {
    return (
      <div className="App">
      <header className="App-header">
          <h1>ToDos</h1>
      </header>
      <TodoList />
        
      </div>
      )
  }
  
}

export default App;

