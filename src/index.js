import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

// import RandomMeal from './services/RandomMeal';
// const randomMeal = new RandomMeal();
// (async () => {
//   console.log(await randomMeal.getImg());
// })();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);