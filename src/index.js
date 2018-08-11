import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './TodoList'
import registerServiceWorker from './registerServiceWorker';


const store = new TodoList();
ReactDOM.render(<App todoList={store} />, document.getElementById('root'));
registerServiceWorker();
