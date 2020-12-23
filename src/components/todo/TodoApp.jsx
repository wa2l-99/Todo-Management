import React,  {Component} from "react";
import { BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";
import AuthService from './AuthService' ;
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponet';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterCompoonent';
import WelcomeComponent from './WelcomeComponent';
import LogoutComponent from './LogoutComponent';
import ErrorComponent from './ErrorComponent';


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
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
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


export default TodoApp;