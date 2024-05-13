import logo from './logo.svg';
import './App.scss';
// import '../views/Example/style.scss';
// import '../styles/ListTodoApp.scss';
import MyComponent from './Example/MyComponent';
import ListTodoApp from './Todos/ListTodoApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormComponent from './Example/FormComponent';
import Nav from './Navigation/Nav';
import Home from './Example/Home';
import Face from './Example/Face';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />

          <img src={logo} className="App-logo" alt="logo" />
          {/* <Home /> */}
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
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodoApp />
            </Route>
            <Route path="/form">
              <FormComponent />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/youtube">
              <Face />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>




        </header>
        {/* <ListTodoApp /> */}
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
    </Router>
  );
}


export default App;