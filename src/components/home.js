import React, { Component } from 'react';
import { Link ,BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

export default class Home extends Component {

  render() {
    return (
        <Router>
     <div className="navbar navbar-dark bg-dark navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
      
         
          <li>
          <Link to="/logout" className="nav-link">Logout</Link>
          </li>
        </ul>
      </div>
   
      </Router>
    );
  }
}