import React, { Component } from 'react';
import axios from "axios";
import Newpassword from "./newPassword";

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 

			email : "",
            phone : "",
            submissionMessage : "",
			system_otp : "" ,
			user_otp : ""
            
		  }
    }
    render() { 
        // console.log(this.state);
        return ( <div className="div1">
        <div style={{color : "purple"}}><h1>PassWord Reset</h1></div>
        <br/>
        <div>

            <img src="https://www.genymotion.com/wp-content/themes/genymobile/img/page-reset-password/genymotion-android-simulator-reset-password.svg" alt="Forget PassWord"/>

        </div>
        <br/><br/>
        <div>
            <input type="text" value={this.state.phone} onChange={e=>{this.setState({phone : e.target.value})}} placeholder="Enter Email or Phone" required/>
            <br/><br/>
            <input type="number" value={this.state.user_otp} onChange={e=>{this.setState({user_otp : e.target.value})}} placeholder="Enter The OTP Received" required/>
            <br/><br/>
        </div>
        <br/><br/><br/>
        <center><h4 style={{color : '#1843f0',fontWeight : '500'}}>{this.state.submissionMessage}</h4></center>
        <br/>
        <div style={{display : "flex",float: "right",justifyContent : "center",alignItems : "center"}}>
            <div>
                <button onClick={()=>{
                    if(this.state.phone === ""){
                        this.setState({submissionMessage : "Enter Mobile No or Email!"})
                    }else if(!(this.state.phone).includes('@')){
                        axios.patch("http://login-signup-1.herokuapp.com/forget/password/send_otp",{phone:this.state.phone})
                        .then(e=>{
                            this.setState({system_otp : e.data.otp,submissionMessage:e.data.msg||"",email : e.data.email})
                        })
                    }else{
                        this.setState({email:this.state.phone})
                        axios.post("http://login-signup-1.herokuapp.com/mail",{email:this.state.phone})
                        .then(e=>{
                            console.log(e);
                            this.setState({system_otp : e.data.otp})
                        })
                    }}}
                className="button1" style={{fontSize : "10px"}}>Send OTP</button>
            </div>
            &emsp;&emsp;
            <div>
                <button onClick={()=>{this.state.submissionMessage==="" && parseInt(this.state.user_otp) === this.state.system_otp?this.setState({submissionMessage : "OTP Verified!"}):this.setState({submissionMessage : "Invalid OTP!"})}} className="button">Submit</button>
                {this.state.submissionMessage==="OTP Verified!" && <Newpassword email={this.state.email} />}
            </div>
        </div>
    </div> );
    }
}
 
export default ForgotPassword;