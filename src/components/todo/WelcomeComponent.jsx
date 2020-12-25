import React , {Component} from 'react';
import {Link} from "react-router-dom";
class WelcomeComponent extends Component{
    
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage(this);
        
    }

    render(){
        

        return(
           <> 
           <h1>Welcome</h1>
           <div class="container">
      
                Welcome {this.props.match.params.name}. You Can Manage your todos <Link to='/todos'>here </Link>
            </div>
            <div class="container">
                Click here to get a customized welcome message.
                <button onClick={this.retrieveWelcomeMessage} className='btn btn-success'>Get Welcome Message</button>
            </div>
            </>
            
            
        )
    }
    retrieveWelcomeMessage(){
        console.log('retrive clicked');
    }
}
export default WelcomeComponent; 