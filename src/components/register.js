import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          name:"",
             email:"",
             password:"",
             address:"",
            mobileNo:"",
            role:""
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
         console.log("Form sumitted");
         const { name,email, password,address,mobileNo,role } = this.state;
         const user={
            name:name,
            email: email,
            password: password,
            address:address,
            mobileNo:mobileNo,
            role:role
         }
         
         axios.post('http://localhost:3002/users/signup/',user)
         
          .then(response => {
         console.log("success",response.data)
         
    window.location = '/login';
          })
          .catch((error) => {
            console.log(error);
          })
  
      event.preventDefault()
    }
    
    render() {
        return (
          <div className="background">
            <div className="form">
                
            <form onSubmit={this.handleSubmit}>

            <h1 className="font-weight-bold text-center">Welcome To Amazona </h1>
          

            
               
               <ul className="form-container">
               
               <div className="card card-container">
               <li> <h2 className="text-center">Registration</h2><hr></hr></li>
            <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
                  <li> 
                   <label htmlFor="name">Name:</label>
                   <input type="name" name="name" value={this.state.name} placeholder="Enter name" onChange={this.handleChange} /></li>
                 
                   <li>
                   <label htmlFor="email">E-mail :</label>
                   <input type="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange} /></li>

                   <li>
                   <label htmlFor="Password">Password :</label>
                   <input type="password" name="password" value={this.state.password} placeholder="Enter password" onChange={this.handleChange} /></li>
                 
                   <li>
                   <label htmlFor="address">Address :</label>
                   <input type="address" name="address" value={this.state.address} placeholder="Enter address" onChange={this.handleChange} /></li>
                 
                   <li>
                   <label htmlFor="mobileNo">Mobile :</label>
                   <input type="mobileNo" name="mobileNo" value={this.state.mobileNo} placeholder="Enter mobileNo" onChange={this.handleChange} /></li>
                 
                   {/* <li>
                   <label htmlFor="role">Role :</label>
                   <input type="role" name="role" value={this.state.role} placeholder="Enter role" onChange={this.handleChange} /></li>
                 */}
                <li>
                <button className="btn-lg btn-dark btn-block" type="submit">Register</button></li>
                <li><div className="text-center">Or Already Have Account</div>
                    
                    <Link to={"/login" } className="button secondary text-center" >Login to your amazona account</Link>

                    </li>
                    </div>
                </ul> 
                </form>
                </div>
                </div>
        )
    }
}
