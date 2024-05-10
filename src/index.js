import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals(console.log);
