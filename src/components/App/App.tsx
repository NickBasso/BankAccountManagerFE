import { Center } from '@mantine/core';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Register } from '../Register/Register';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Route
          path="/"
          exact
          component={() => (
            <Center>
              <h3>Home</h3>
            </Center>
          )}
        />
        <Route path="/register" exact component={Register} />
      </div>
    </Router>
  );
}

export default App;
