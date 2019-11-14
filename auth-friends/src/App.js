import React from 'react';
import { Link, Route } from "react-router-dom";

import Friends from "./Friends";
import Login from "./login";

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to='/login'>Log In</Link>
      </nav>
      <Route exact path="/login" component={Login}></Route>
    <Friends />
    </div> 
  );
}

export default App;
