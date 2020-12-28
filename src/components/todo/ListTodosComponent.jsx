import React , {Component} from 'react';
import TodoDataServive from '../../api/todo/TodoDataService'
import AuthService from './AuthService'
class ListTodosComponent extends Component{
    // Life cycle of the react
    // the first thing called 
    constructor(props){
        console.log('constructor')
        super(props)
        this.state={
            todos : []
        }
    

    }
    // life cycle method in react 

    // called just before componentDidMountmethod 
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    //the state update in react in the controle of the farmework, this method control if we want to update the view for the state changes  
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true // when we put false the view is not update 
    }

    // Third thing the componentDidMountmethod is called ( we call the service and the state is updated ) after that react called the render method again 
    componentDidMount(){
        let username =AuthService.getLoggedInUserName;
        TodoDataServive.retrieveAllTodos(username)
                .then(
            response => {
               this.setState({todos : response.data })
               
            }
        )
    }
    // Second thing the render is called using the  intial state in the const and it loads on the screen  
    render(){
        console.log('render')
        return(
            <div> 
                <h1>List Todos</h1>
                <div classname="container">
                <table class="table">
                    <thead>
                        <tr>
                         
                            <th>description</th>
                            <th>done</th>
                            <th>targetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                            todo =>
                            //to say that every child have unique key (id )
                                <tr key={todo.id}>
                                    
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>

                                </tr>
                            )
                         }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
export default  ListTodosComponent ; 