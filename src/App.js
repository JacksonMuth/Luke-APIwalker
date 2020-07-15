import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import Form from './components/Form';
import NotFound from './components/NotFound';
import Luke from './components/Luke';

function App() {
  return (
    <div className="App">
      <Form path="/"/>
      <Router>
        <Luke path="/:type/:id/"/>
        {/* <NotFound default /> */}
      </Router>

    </div>
  );
}

export default App;

//rafce
//import { navigate } from '@reach/router'
// &nbsp
