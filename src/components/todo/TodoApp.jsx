import React,  {Component} from "react";
import { BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">

                {/*implementing Routing for the login and welcome components*/}
                <Router>
                    
                    <>  
                    <HeaderComponent/>
                        {/*switch make sure that only one of these routes is active at any particular point in time.*/}
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/todos" component={ListTodosComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                    </>
                    <FooterComponent/>
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

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todos :
            [
            {id: 1 , description : 'Learn React', done:false, targetDate: new Date()},
            {id: 2 , description : 'Go to Gym', done:false, targetDate: new Date()},
            {id: 3 , description : 'Do Homework', done:false, targetDate: new Date()}
            ]
        }


    }
    render(){
        return(
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>done</th>
                            <th>targetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                            todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>

                                </tr>
                            )
                         }
                    </tbody>
                </table>
            </div>
        )
    }
}
class HeaderComponent extends Component{
    render(){
        return(
            <div>
               Header <hr/>
            </div>
        )
    }
}
class FooterComponent extends Component{
    render(){
        return(
            <div>
              <hr/> Footer 
            </div>
        )
    }
}
class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                Welcome {this.props.match.params.name}. You Can Manage your todos <Link to='/todos'>here </Link>
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