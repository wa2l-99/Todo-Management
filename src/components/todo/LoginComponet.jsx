import React , {Component} from 'react';
import AuthService from './AuthService';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';



class LoginComponent extends Component{
    constructor(props){
        super(props)
//We added state to this Logincomponent.
        this.state ={
            username: '',
            password: '',
            hasloFailed: false,
            showSucssMess: false,

        }
    
        this.handelChange=this.handelChange.bind(this);
        this.loginClicked=this.loginClicked.bind(this);
    }

   
    // Added a generic event to handle all changes for any text element and we are now able to update the state whenever somebody types in something.

    handelChange(event){
       // this prints the state before the handleChange().
        console.log(this.state);

        this.setState({
            [event.target.name]
            : event.target.value
        }
        )

    }

    loginClicked(){
     //   if(this.state.username==='wael' && this.state.password==="1234"){
       //     AuthService.registerSuccessfulLogin(this.state.username,this.state.password);
         //   this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSucssMess:true})
            //this.setState({hasloFailed:false})

      //  }
            
     //   else{
          //  console.log('Failed') 

           // this.setState({showSucssMess:false})

           // this.setState({hasloFailed:true})

       // }

        AuthService
        .executeBasicAuthenticationService(this.state.username,this.state.password)
        .then(()=>{
            AuthService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);

        }).catch(()=>{
            this.setState({showSucssMess:false})

            this.setState({hasloFailed:true})

        }
            

        )
        //console.log(this.state)

    }


    render(){
      return(
        <MuiThemeProvider>
        <h1>Login ! </h1>  
           <React.Fragment>
               <TextField hintText="Enter Your FirstName"
               floatingLabelText="User Name: " 
               name="username" value={this.state.username} onChange={this.handelChange}/>
               <br/>
               <TextField hintText="Enter Your password"
               floatingLabelText="Password"
               type="password"
               name="password" value={this.state.password} onChange={this.handelChange}/>
               <br/>
               <Button
               label="Login"
               primary={true}
               style={Styles.button}
               onClick={this.loginClicked}/> 
           </React.Fragment>

       </MuiThemeProvider>
        );
    }
  }
  const Styles ={
    button:{
        margin: 15
    }
}
export default  LoginComponent ; 