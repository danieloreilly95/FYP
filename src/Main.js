import React, { Component } from "react";
import logo from './logo.svg';
import "./index.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Enrolements from "./Enrolements/Enrolements";
import Graduates from "./Graduates/Graduates";
import newEntrants from "./newEntrants/newEntrants";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="App-title">Welcome to the Higher Education Stats Database</h2>
          </header>
          </div>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Enrolements">Enrolements</NavLink></li>
            <li><NavLink to="/Graduates">Graduates</NavLink></li>
            <li><NavLink to="/newEntrants">New Entrants</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/Enrolements" component={Enrolements}/>
            <Route path="/Graduates" component={Graduates}/>
            <Route path="/newEntrants" component={newEntrants}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
