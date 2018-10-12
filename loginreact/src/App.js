import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import {history} from './helpers/history';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage'
import {Provider}   from 'react-redux';
import store from './helpers/store'
import './App.css';
import PrivateRoute from './pages/PrivateRoute';
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Details from "./pages/Detail";
import Error from "./pages/Error";
import Logout from "./components/logout";


class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <div className="App">
          <Router history={history}>
              <div>
                  <Logout/>
                  <PrivateRoute exact path="/" component={HomePage} />
                  <Route path="/register" component={RegisterPage} />
                  <Route path="/login" component ={LoginPage}/>
                  <PrivateRoute exact path='/profile' component ={Profile}/>
                  <PrivateRoute exact path='/detail' component ={Details}/>
                  <PrivateRoute exact path='/error' component ={Error}/>
              </div>
          </Router>
      </div>
     </Provider>
    );
  }
}

export default App;
