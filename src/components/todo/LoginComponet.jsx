import React , {Component} from 'react';
import AuthService from './AuthService';

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
        if(this.state.username==='wael' && this.state.password==="1234"){
            AuthService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSucssMess:true})
            //this.setState({hasloFailed:false})

        }
            
        else{
            console.log('Failed') 

            this.setState({showSucssMess:false})

            this.setState({hasloFailed:true})

        }

        //console.log(this.state)

    }


    render(){
      return(
          <div>
              <h1>Login</h1>
              <div className="container">
                {/*<ShowInvalidInserts hasloFailed={this.state.hasloFailed} />*/}
                {this.state.hasloFailed && <div className="alert alert-warning"> Invalid Insertes</div>}
                {this.state.showSucssMess && <div>Login Succefuly</div>}
                {/*<ShowLoginSucc showSucssMess={this.state.showSucssMess} />*/}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handelChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handelChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        </div>    
        );
    }
  }
export default  LoginComponent ; 