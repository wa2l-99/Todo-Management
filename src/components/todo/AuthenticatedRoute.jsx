import React , {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthService from './AuthService'

class AuthenticatedRoute extends Component {
    render(){
        if (AuthService.isUserLoggedIn()){
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/login" />
        }
    }
}
export default AuthenticatedRoute;