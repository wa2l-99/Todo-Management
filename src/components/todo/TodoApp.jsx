import React,  {Component} from "react";

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <LoginComponent/>
            </div>
             
        );
    }
}
// the LoginComponent a controlled component.
class LoginComponent extends Component{
    constructor(props){
        super(props)
//We added state to this Logincomponent.
        this.state ={
            username: '',
            password: ''
        }
    
        this.handelChange=this.handelChange.bind(this);
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


    render(){
      return(
          <div>
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handelChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handelChange}/>
            <button>Login</button>
        </div>
      );
    }
  }

export default TodoApp;