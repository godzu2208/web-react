import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducers from './store/reducers/rootReducers';

const reduxStore = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//  + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(
//   reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
ReactDOM.render(
  <React.StrictMode>
    {/* Bọc <Provider> để khi App khởi động  thì redux cũng khởi động  
      * store là nơi lưu trữ dữ liệu 
    */}
    <Provider store={reduxStore}>
      <App />
    </Provider>

  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals(console.log);
