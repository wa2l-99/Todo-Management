import React , {Component} from 'react';
import {Link} from "react-router-dom";
import AuthService from './AuthService';
import { withRouter } from 'react-router';

class HeaderComponent extends Component{
    render(){
        //create bolean variable : true if the user is connected 
        const isUserLoggedIN = AuthService.isUserLoggedIn();
        //console.log(isUserLoggedIN);

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><Link className="navbar-brand">Todo</Link></div>
                    <ul className="navbar-nav">
                        {/*this links can be showed only if the user is connected */}
                        {isUserLoggedIN && <li ><Link className="nav-link" to="/welcome/name">Home</Link></li>}
                        {isUserLoggedIN && <li ><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end ">
                        {!isUserLoggedIN &&<li ><Link className="nav-link" to="/login">LogIn</Link></li>}
                        {isUserLoggedIN && <li ><Link className="nav-link" to="/logout" onClick={AuthService.logout}>LogOut</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
export default withRouter(HeaderComponent);
