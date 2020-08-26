import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar';  
import {Link} from 'react-router-dom'              
const Product = props => (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
      <td>{props.product.category}</td>
     
    </tr>
  )

export default class ProductList extends Component {
    state={
      selectedFile:null
    }
    constructor(props) {
        super(props);
        this.state = {
          products: []
        };
      }
      componentDidMount() {
        axios.get('http://localhost:3001/products/')
          .then(response => {
            this.setState({ products: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
      // productList() {
      //   return this.state.products.map(eachProduct => {
      //     return <Product product={eachProduct} key={eachProduct._id}/>;
      //   })
      // }

      fileSelectedHandler = event =>{
        this.setState({
          selectedFile:event.target.files[0]
        })
        
      }

      fileUploadhandler = () =>{
        const fd = new FormData();
        fd.append('productImage',this.state.selectedFile,this.state.selectedFile.name)
          axios.post('http://localhost:3001/products/uploadImage/',fd)
          .then(res=>{
            console.log(res)
            // res.status(201).
                    })
          .catch((error) => {
            console.log(error);
          })
      }
     
    render() {
        return (
          <div>
          {/* <img src ="/images/shirt.jpg"></img> */}
          <div className="grid-container">
            
          <header className="header">
            <div className="wrap">
         
              <Link to="#" className="brand">Amazona</Link>
        
          
              <Link to="/signup" className="header-links">Sign Up</Link>
              <Link to="/login" className="header-links">Sign In</Link>
              <Link to="/" className="active">Home</Link>
            </div>
          </header>
          {/* <div className="sidebar">
         
            
            <ul>
              <li>
                <a href="#">Sign Up</a>
              </li>
      
              <li>
              <a href="#">Sign In</a>
              </li>
      
            </ul>
            <button className="sidebar-button" >x</button>
          </div>  */}
          <main className="main">
            <div className="content">
              <ul className="products">{
              this.state.products.map(eachProduct =>
                <li>
                  <div className="product">
                    <img className="product-image" src={eachProduct.productImage} alt="product" />
                    <div className="product-name">
              <a href="product.html">{eachProduct.name}</a>
                    </div>
              <div className="product-brand">{eachProduct.brand}</div>
              <div className="product-price">{eachProduct.price}</div>
                    <div className="product-rating">{eachProduct.rating} stars</div>
                  </div>
                </li>)
    }
      
              </ul>
            </div>
      
          </main>
          <footer className="footer">
            All right reserved.
          </footer>
            </div>
            </div>
            // </Router>
        )
    }
}
