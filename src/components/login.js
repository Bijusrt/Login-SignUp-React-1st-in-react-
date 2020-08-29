import React,{Component} from 'react';
import '../App.css';
import history from '../history';
import axios from "axios";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = { 

			password : "",
			email : "",
			submissionMessage : "",

		  }
    }
render() { 
        return ( <div className="div1">

        <div style={{color : "purple"}}><h1>Login</h1></div>
        <br/>
        <div>

            <img src="data:image/png;base64,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" alt="Login"/>

        </div>
        <br/><br/>
        <div>

             &emsp;&emsp;
            <input type="email" value={this.state.email} onChange={e=>{this.setState({email : e.target.value})}} placeholder="Email" required/>
            <br/><br/>&emsp;&emsp;
            <input type="password" value={this.state.password} onChange={e=>{this.setState({password : e.target.value})}} placeholder="PassWord" required/>
            <br/><br/><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
            <button onClick={()=>{	
                axios.post("http://login-signup-1.herokuapp.com/login",{email:this.state.email,password:this.state.password})
               .then(e=>{
                   this.setState({submissionMessage : e.data.msg||e.data.error[0].error})
                   this.setState({email : "",password : ""})
               })
               }}>Done</button>
            <br/><br/>
           <center><h4 style={{color : '#1843f0',fontWeight : '500'}}>{this.state.submissionMessage}</h4></center>
            <br/>
            <div style={{display : "flex",float: "right",justifyContent : "center",alignItems : "center"}}>
               <div>
                   <button onClick={()=>history.push('/forgetpassword')} className="button1" style={{fontSize : "10px"}}>Forgot Password</button>
               </div>
               &emsp;&emsp;
               <div>
                    <button onClick={()=>history.push('/signup')} className="button">SignUp</button>
               </div>
            </div>
        </div>
    </div> );
    }
}
 
export default Login;