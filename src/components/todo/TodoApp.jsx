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
            console.log('Succeful')
            this.setState({showSucssMess:true})
        }
            
            else{
                console.log('Failed') 

                this.setState({showSucssMess:false})

                this.setState({hasloFailed:true})

            }

        //console.log(this.state);
        

    }


    render(){
      return(
          <div>
              <ShowInvalidInserts hasloFailed={this.state.hasloFailed} />
              <ShowLoginSucc showSucssMess={this.state.showSucssMess} />
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handelChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handelChange}/>
            <button onClick={this.loginClicked}>Login</button>
        </div>
      );
    }
  }

  function ShowInvalidInserts(props){
        if(props.hasloFailed){

            return <div>Invalid Insertes</div>
        } else{
            return null
        }
    }
    function ShowLoginSucc(props){
        if(props.showSucssMess){

            return <div>Login Succefuly</div>
        } else{
            return null
        }
    }

export default TodoApp;