import React,{Component} from 'react';
import '../App.css';
import history from '../history';


class App extends Component {

	 render() { 
		//  console.log(this.state);
		 return ( <div className="main" style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
			 <div><h1>Welcome Tamil Thalaivas</h1></div>
			 <div style={{height:'10%'}}><button onClick={()=>history.push('/login')} style={{backgroundColor:'purple'}}>Login</button></div>
			 
			 <div><button onClick={()=>history.push('/signup')} style={{backgroundColor:'orange'}}>Signup</button></div>
			</div>);
	}
 }
  
 export default App;