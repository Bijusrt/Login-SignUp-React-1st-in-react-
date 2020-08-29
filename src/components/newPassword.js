import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';

class Newpassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newpassword : '',
            confirmpassword : '',
            submissionMessage:''
        }
    }
    reset(){
        axios.patch("http://login-signup-1.herokuapp.com/forget/password/verify_otp_success",{email:this.props.email,password:this.state.confirmpassword})
        .then(e=>{
            this.setState({submissionMessage : e.data.msg});
        })
    }

    fuc(){
        this.state.newpassword.length >= 8 && this.state.confirmpassword.length >= 8?this.state.newpassword === this.state.confirmpassword?this.reset():this.setState({submissionMessage:"Password did not match"}):this.setState({submissionMessage : "Password must contain alteast 8 characters"})
        this.state.submissionMessage === 'Password Reset Success!' && history.push('/profile')
    }

    render() { 
        // console.log(this.state);
        return (<div  style={{position: 'fixed', top: '0%', bottom: '0%', left: '0%', right: '0%', background: 'rgba(0, 0, 0, 0.5)',zIndex: '999'}}>
        <div style={{position: 'fixed',bottom: '40%',right:'4%',left:'5%', background: 'rgb(255, 255, 255)', margin: 'auto', border: '1px solid rgb(187, 187, 187)', padding: '5px',height: '300px',width: '300px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div>
                    <h2>New Password</h2>
                    <input type="password" placeholder="Enter New Password" required value={this.state.newpassword} onChange={e=>{this.setState({newpassword : e.target.value})}}/>
                    <br/><br/>
                    <input type="password" placeholder="Confirm New Password" required value={this.state.confirmpassword} onChange={e=>{this.setState({confirmpassword : e.target.value})}}/>
                    <br/><br/>
                    <h4>{this.state.submissionMessage}</h4>
                    &emsp;&emsp;&emsp;&emsp;     
                    <button style={{backgroundColor: 'rgb(66, 245, 233)'}} onClick={e=>this.fuc()}>Reset Password</button>
                </div>
        </div>
    </div>);
    }
}
 
export default Newpassword;

