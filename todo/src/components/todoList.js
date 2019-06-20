import React from 'react';
import {addTodo, toggleTodo} from '../actions';
import {connect} from 'react-redux';
import {todos} from '../reducers'

class TodoList extends React.Component {
  state = {
    newTodo: ''
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  toggleTodo = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index);

  };



  render() {
    return (
      <section style={{
                "display" : "flex",
                "flex-direction": "column"
              }}>
        <ul >
          {this.props.todos.map((todo, index) => (
            <li onClick={e=> this.toggleTodo(e, index)} key={index} style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "red" : "black"
              }}>
            {todo.text}
            </li>
            )
            
          )}
        </ul>
        <form>
        <input 
        type="text"
        value={this.state.newTodo}
        onChange={this.handleChanges}
        placeholder="add a new ToDo"
        />
        <button onClick={this.addTodo}>Add</button>
        </form>
        
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  
    return {
      todos: state.todos.todos
      }
};



export default connect(
  mapStateToProps,
  {addTodo, toggleTodo}) (TodoList);



