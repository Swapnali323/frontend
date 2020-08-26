import React, { Component } from 'react'
import axios from 'axios'
export default class EditProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             price:"",
             category:"amazona product",
             productImage:""
        }
        // this.onChangeDate = this.onChangeDate.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:3001/products/'+this.props.match.params.id)
          .then(response => {
            this.setState({ products: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
          });
    }

    handleSubmit(event){
         console.log("edited");
         const { name,price, category,productImage} = this.state;
         const product={
            name:name,
             price:price,
             category:category,
             productImage:productImage
         }
      
         axios.patch('http://localhost:3001/products/'+this.props.match.params.id, product)
         
          .then(response => {
         console.log("success",response.data)
         
    window.location = '/login/adminportal';
          })
          .catch((error) => {
            console.log(error);
          })
  
      event.preventDefault()
    }
    
    
    render() {
        return (
            <div className="product">
            
            <form onSubmit={this.handleSubmit}>
            <h1 className="text-center">Edit product</h1>
            
               
               <ul className="product-container"><li> 
                   <label htmlFor="name">Product Name :</label>
                   <input type="text" name="name" value={this.state.name} placeholder="Enter name" onChange={this.handleChange} /></li>

                   <li>
                   <label htmlFor="price">Price :</label>
                   <input type="text" name="price" value={this.state.price} placeholder="Enter price" onChange={this.handleChange} /></li>
                 
                  <li>
                   <label htmlFor="category">Category :</label>
                   <input type="text" name="category" value={this.state.category} placeholder="Enter category" onChange={this.handleChange} /></li>
                
            
                {/* <li>
                   <label htmlFor="descrition">Description :</label>
                   <input type="descrition" name="descrition" value={this.state.descrition} placeholder="Enter descrition" onChange={this.handleChange} /></li>
                
                <li> */}
                <br></br>
                <button className="btn-lg btn-dark btn-block" type="submit">update Product</button>
                {/* </li> */}
            
               
                </ul> 
                </form>
                </div>
        )
    }
}
