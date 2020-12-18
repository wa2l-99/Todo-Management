import React,  {Component} from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">

                {/*implementing Routing for the login and welcome components*/}
                <Router>
                    <>  
                        {/*switch make sure that only one of these routes is active at any particular point in time.*/}
                        <Switch>
                            <Route path="/" exact component={WelcomeComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                    </>
                </Router>
              { /* <WelcomeComponent/>
                <LoginComponent/>*/}
                
                
            </div>
             
        );
    }
}

function ErrorComponent() {
    return <div>An error is Ouccured. I don't now what to do</div>    
}


class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                Welcome {this.props.match.params.name}
            </div>
        )
    }
}
// the LoginComponent a controlled component.
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
                {/*<ShowInvalidInserts hasloFailed={this.state.hasloFailed} />*/}
                {this.state.hasloFailed && <div>Invalid Insertes</div>}
                {this.state.showSucssMess && <div>Login Succefuly</div>}
                {/*<ShowLoginSucc showSucssMess={this.state.showSucssMess} />*/}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handelChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handelChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
  }

export default TodoApp;