import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


import Navbar from "./components/Navbar";
import Liste from "./components/Liste";
import Logo from "./components/Logo";
import Ajout from "./components/Ajout";
import Edit from "./components/Edit";




class App extends React.Component
{
  render()
  { return (
    <div className="container">
      <Router>
        <Navbar/>
        <Logo/>    
        <Route path="/liste" component={Liste}/>
        <Route path="/ajout" component={Ajout}/>
        <Route path="/edit/:id"  component={Edit}/>
      </Router>
    </div>
  )

  }
}

export default App;
