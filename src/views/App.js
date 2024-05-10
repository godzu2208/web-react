import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ListTodoApp from './Todos/ListTodoApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Welcome to TODO App with ReactJS !!!
        </p> */}
        {/* <MyComponent></MyComponent> */}
        {/* <MyComponent /> */}
        {/* <a
          className="App-link"  
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
      <ListTodoApp />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      // transition:Bounce
      />
    </div>
  );
}


export default App;