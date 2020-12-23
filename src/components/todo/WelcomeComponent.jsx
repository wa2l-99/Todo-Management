import React , {Component} from 'react';
import AuthService from './AuthService';
import {Link} from "react-router-dom";
class WelcomeComponent extends Component{
    render(){

        return(
           <> 
           <h1>Welcome</h1>
           <div class="container">
      
                Welcome {this.props.match.params.name}. You Can Manage your todos <Link to='/todos'>here </Link>
            </div>
            </>
        )
    }
}
export default WelcomeComponent; 