import React, { createContext, useState } from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home.component.jsx';
import Success from './components/success/success.component';

export const Context = createContext();

export const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userContext = {
    username: [username, setUsername],
    password: [password, setPassword]
  };
  return (
    <Context.Provider value={userContext}>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/success'>
              <Success />
            </Route>
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
};
