import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SplashText from './components/SplashText'
// import App from './components/SplashBinary'
import Home from './components/Home'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <SplashText />
  </React.StrictMode>,
  document.querySelector('.splash .text')
);

// ReactDOM.render(
//   <Home/>,
//   document.querySelector('#root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
