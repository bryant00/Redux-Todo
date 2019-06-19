import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {todos} from './reducers';


const allReducers = combineReducers({
    todos
})
const store = createStore(
    allReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<Provider store={store}>
    <App/>
    </Provider>, 
    document.getElementById('root')
    );


