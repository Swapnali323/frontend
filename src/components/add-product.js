import React, { Component } from 'react'
import axios from 'axios'
export default class AddProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             price:"",
             category:"",

        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
          });
    }

    handleSubmit(event){
        const { name, price,category} = this.state;
        const product={
          
            name: name,
            price: price,
            category:category
        }
        
        axios.post('http://localhost:3001/products/',product)
        
         .then(result => {
        console.log("success",result.data)
        
       
         window.location='/login/adminportal'
       

         })
         .catch((error) => {
           console.log(error);
         })
 
     event.preventDefault()
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
          })}
    render() {
        return (
          <div>
            <div className="productss">
             <div className="side-image">
                <h1></h1>
              </div>

              <div className="text">
            <h1 className="font-weight-bold text-center">Add Product in th website </h1>
              
            
            
            
            <form onSubmit={this.handleSubmit}>

             
           
        
               
               <ul className="product-container"><li> 
              
                   <label htmlFor="name">Product Name :</label>
                   <input type="name" name="name" value={this.state.name} placeholder="Enter name" onChange={this.handleChange} /></li>

                   <li>
                   <label htmlFor="price">Price :</label>
                   <input type="price" name="price" value={this.state.price} placeholder="Enter price" onChange={this.handleChange} /></li>
                 
                  
                   <li>
                   <label htmlFor="category">Category :</label>
                   <input type="category" name="category" value={this.state.category} placeholder="Enter category" onChange={this.handleChange} /></li>
                
{/*             
                <li>
                   <label htmlFor="descrition">Description :</label>
                   <input type="descrition" name="descrition" value={this.state.descrition} placeholder="Enter descrition" onChange={this.handleChange} /></li>
                 */}
                <li>
                {/* <input type="file" onChange={this.fileSelectedHandler}></input>
        <button onClick={this.fileUploadhandler}>Upload</button> */}
                <button className="btn-lg btn-dark btn-block" type="submit">Add Product</button></li>
                {/* <li><div className="text-center"></div>
                    
                    <Link to={"/" } className="button secondary text-center" ></Link>

                    </li> */}
               
                </ul> 
                </form>
                </div>
                </div>
                </div>
        )
    }
}
