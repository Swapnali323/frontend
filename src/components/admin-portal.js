
import { BrowserRouter as Router, Link, NavLink, Redirect, Route} from 'react-router-dom';

import React, { Component } from 'react'
import Product from './Product';
import AddProduct from './add-product';
import auth from "./auth";
import Home from './home';
import EditProduct from './edit-product';
import SearchProduct from './search-product';

export class AdminPortal extends Component {
  render() {
    return (
  
      <Router>
        
      <div >
      <div className="grid-container">
      <header className="header">
            <div className="wrap">
            <Link to="#" className="brand">Amazona</Link>
            <Link to="/addproduct" exact ClassName="selected" className="header-links">Add Product</Link>
            <Link to="/searchproduct" exact ClassName="selected" className="header-links">Search Products</Link>
            <Link to="/logout" exact ClassName="selected" className="header-links">Logout</Link>
            <Link to="/login/adminportal" className="header-links">Home</Link>
            </div>
          </header>
            <br></br>
        <Route path="/login/adminportal" render={
          () =>{
            return (<div>
              <Product /></div>
            )
          }
        }
        />

       <Route path="/searchproduct" render={
          () =>{
            return (
                <SearchProduct />
            )
          }
        }
        />

        <Route path="/addproduct" render={
          () =>{
            return (
                <AddProduct />
            )
          }
        }
        />

        <Route path="/updateproduct" render=
        
           {props=>
              <EditProduct {...props} key={this.props.key}/>
           
          
        }
        />
      
      <Route path="/logout" render={
          () =>{
            return (<div>
               <Redirect
              to={{
                pathname: "/",
                // state: {
                //   from: props.location
                // }
              }}
            />
              </div>
            )
          }
        }
        />
    </div>
        </div>
        </Router>
      
    );
  }
}
export default AdminPortal;
