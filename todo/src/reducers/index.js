import {ADD_TODO, TOGGLE_TODO} from '../actions';

const initialTodos = {
  todos: [
    { text: 'Finish this project', completed: false },
    { text: 'Finish this projects', completed: false },
  ]
};

export  const todos = (state = initialTodos, action ) => {
  switch (action.type) {
    case ADD_TODO:
    const newTodo = {text: action.payload, completed: false}
    return {
      ...state,
      todos: [...state.todos, newTodo]
    }

    case TOGGLE_TODO:
    return  {
      ...state,
      todos: state.todos.map((todo, index) => {
        if (action.payload === index) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        else {
          return todo;
        }
      })
      }

    default:
    return state;

  }
}