import React, { Component } from 'react';
import axios from 'axios'
import {Form , FormGroup, Button, Input ,Label} from 'reactstrap';

import { Link } from 'react-router-dom';
export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:"",
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
        const { email, password,role} = this.state;
        const user={
          
           email: email,
           password: password,
          role:role
        }
        
        axios.post('http://localhost:3002/users/login/',user)
        
         .then(result => {
        console.log("success",result.data)
         window.location='/login/adminportal'
        // if(this.state.role==="Admin"){
        //     console.log("admin")
        //  window.location='/login/adminportal'
        // }
        // else{
        //     console.log("customer")
        //     window.location='/login/customerportal'
        // }

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
              <br></br>
         
            <br></br>
               
               <ul className="form-container">
               <div className="card card-container">
                 <li><h2 className="text-center">Login To Your Account</h2><hr></hr></li>
            <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
                   
                   <li> 
                   
               
                   <label htmlFor="email">E-mail :</label>
                   <input type="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange} /></li>

                   <li>
                   <label htmlFor="Password">Password :</label>
                   <input type="password" name="password" value={this.state.password} placeholder="Enter password" onChange={this.handleChange} /></li>
                 
{/*                   
                   <li>
                   <label htmlFor="role">Role :</label>
                   <input type="role" name="role" value={this.state.role} placeholder="Enter role" onChange={this.handleChange} /></li>
                 */}
                <li>
                <button className="btn-lg btn-dark btn-block " type="submit">Login</button></li>
                <li><div className="text-center">Or Don't Have Account</div>
                    
                    <Link to={"/signup" } className="button secondary text-center" >Create amazona account</Link>

                    </li>
               </div>
                </ul> 
                </form>
                </div>
                </div>
        )
    }
}
