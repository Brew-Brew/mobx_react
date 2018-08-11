import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appState from './store/AppState';


ReactDOM.render(<App store = {appState}/>, document.getElementById('root'));