import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Birthday/App';
import ReviewPage from './Review/ReviewPage';
import Employees from './Employee/Employees'
import Calculator from './Calculator/Calculator';
import Todo from './Todo/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ReviewPage /> */}
    {/* <Employees /> */}
    <Calculator />
    {/* <Todo /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

