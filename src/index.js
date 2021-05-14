import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SplashText from './components/SplashText'
// import App from './components/SplashBinary'
// import Home from './components/Home'
import reportWebVitals from './reportWebVitals';
import App from './App';

// document.addEventListener('scroll',()=>{
//     document.documentElement.scrollLeft = 0
// })
document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");

if(!sessionStorage.getItem('visited')){
  ReactDOM.render(
    <React.StrictMode>
      <SplashText />
      {sessionStorage.setItem('visited',true)}
    </React.StrictMode>,
    document.querySelector('.splash .text')
  );  
}

else{
  ReactDOM.render(
    <App/>,
    document.querySelector('#root')
  )  
}

 

reportWebVitals();
