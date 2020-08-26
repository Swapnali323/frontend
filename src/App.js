import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productlist';
import Login from './components/login';
import Register from './components/register';
import AdminPortal from './components/admin-portal';
import CustomerPortal from './components/customer-portal';
import "bootstrap/dist/css/bootstrap.min.css"
import { ProtectedRoute } from "./components/protected-route";

class App extends Component{
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
 
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/");
  }
  render(){
  return (
    <Router>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCMUGBslPUD3zv2s6uaaZwY9VuNEp_hUiTXg&usqp=CAU"></img> */}
      <div className="container">
    {/* <Navbar /> */}
    <br/>
    <Route path="/" exact component={ProductList} />
    <Route path="/login" exact component={Login}/>
    <Route path="/signup" exact component={Register} />
    <Route path="/login/adminportal" exact component={AdminPortal} />
    <ProtectedRoute path="/login/customerportal" exact component={CustomerPortal} />
    {/* <ProtectedRoute exact path="/app" component={AppLayout} /> */}
    </div>
  </Router>
    
  );
  }
}

export default App;
