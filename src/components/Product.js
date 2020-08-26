import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar'; 
import Home from './home' ;
import {Link} from 'react-router-dom'              
import SearchProduct from './search-product';
const Product = props => (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
      <td>{props.product.category}</td>
      <td>{props.product.productImage}</td>
      <td>
      <Link to={"/updateproduct/"+props.product._id}>Update</Link> | <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>delete</a>
    </td>
    </tr>
  )

export default class Products extends Component {
    state={
      selectedFile:null
    }
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this)
        this.state = {products: []};
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

      deleteProduct(id) {
        axios.delete('http://localhost:3001/products/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          products: this.state.products.filter(product => product._id !== id)
        })
      }
    
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
      <SearchProduct />
          <div className="grid-container">
            
         
          <main className="main">
            <div className="content">
              <ul className="products">{
              this.state.products.map(eachProduct =>
                <li>
                  <div className="product">
                    <img className="product-image" src={eachProduct.productImage} alt="product" />
                    <div className="product-name">
              <Link to={"/product/" +eachProduct._id} >{eachProduct.name}</Link>
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
        )
    }
}
