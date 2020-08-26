import React, { Component } from 'react';
import {NavLink, Link ,BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

export default class Navbar extends Component {

  render() {
    return (
    //     <Router>
    //       <div className="grid-container">
    //  <header className="header">
  
          
    
    //       <label className="amazona">Amazona</label>
    //     <ul >
        
    //        <li>
    //       <NavLink to="/signup" className="nav-link">Signup</NavLink>
    //       </li>
          
    //       <li>
    //       <NavLink to="/login" className="nav-link">Login</NavLink>
    //       </li>
        
    //     </ul>
    
    //   </header>
    <div class="grid-container">
    <header class="header">
      <div class="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <a href="index.html">amazona</a>
      </div>
      <div class="header-links">
        <a href="/signup">Sign Up</a>
        <a href="/login">Sign In</a>
      </div>
    </header>
    {/* <aside class="sidebar">
      <h3>Shopping Categories</h3>
      <button class="sidebar-close-button" onclick="closeMenu()">x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>

      </ul>
    </aside> */}
    <main class="main">
      <div class="content">
        <ul class="products">
          <li>
            <div class="product">
              <img class="product-image" src="images/shirt.jpg" alt="product" />
              <div class="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div class="product-brand">Nike</div>
              <div class="product-price">$60</div>
              <div class="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div class="product">
              <img class="product-image" src="images/shirt.jpg" alt="product" />
              <div class="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div class="product-brand">Nike</div>
              <div class="product-price">$60</div>
              <div class="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div class="product">
              <img class="product-image" src="images/d1.jpg" alt="product" />
              <div class="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div class="product-brand">Nike</div>
              <div class="product-price">$60</div>
              <div class="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div class="product">
              <img class="product-image" src="images/shirt.jpg" alt="product" />
              <div class="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div class="product-brand">Nike</div>
              <div class="product-price">$60</div>
              <div class="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div class="product">
              <img class="product-image" src="images/d1.jpg" alt="product" />
              <div class="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div class="product-brand">Nike</div>
              <div class="product-price">$60</div>
              <div class="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div class="product">
              <img class="product-image" src="images/shirt.jpg" alt="product" />
              <div class="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div class="product-brand">Nike</div>
              <div class="product-price">$60</div>
              <div class="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer class="footer">
      All right reserved.
    </footer>
      </div>
      // </Router>
    );
  }
}