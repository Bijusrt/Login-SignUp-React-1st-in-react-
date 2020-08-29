import React, { Component } from 'react';
import axios from "axios";
import history from '../history';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 

			username : "",
			password : "",
			email : "",
			phone : "",
			submissionMessage : "",
            
		  }
    }
    render() { 
        return ( <div className="div1">

        <div style={{color : "purple"}}><h1>SignUp</h1></div>
        <br/>
        <div>

            <img src="https://image.shutterstock.com/image-vector/black-simple-finger-presses-on-260nw-618096680.jpg" alt="SignUp"/>

        </div>
        <br/><br/>
        <div>

            <input type="email" value={this.state.email} onChange={e=>{this.setState({email : e.target.value})}} placeholder="Email" required/>
            <br/><br/>
            <input type="text" value={this.state.phone} onChange={e=>{this.setState({phone : e.target.value})}} placeholder="PhoneNumber" required/>
            <br/><br/>
            <input type="text" value={this.state.username} onChange={e=>{this.setState({username : e.target.value})}} placeholder="UserName" required/>
            <br/><br/>
            <input type="password" value={this.state.password} onChange={e=>{this.setState({password : e.target.value})}} placeholder="PassWord" required/>
            <br/><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <button onClick={()=>{
                axios.post("http://login-signup-1.herokuapp.com/signup",{username:this.state.username,password:this.state.password,email:this.state.email,phone:this.state.phone})
                .then(e=>{
                    
                    this.setState({submissionMessage : e.data.msg||e.data.error[0].error})
                    this.setState({username : "",password : "",email : "",age : "",phone :""})
                })
                }}>Done</button>
            <br/>
            <center><h4 style={{color : '#1843f0',fontWeight : '500'}}>{this.state.submissionMessage}</h4></center>
            <br/>
             &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <button onClick={()=>history.push('/login')} className="button">Login</button>

        </div>
        </div> 
     );
    }
}
 
export default Signup;