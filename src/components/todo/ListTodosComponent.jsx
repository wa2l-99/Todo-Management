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
            todos : [], 
            message : null
        }
        this.DeleteTodoClicked = this.DeleteTodoClicked.bind(this)
        this.updateTodoClicked=this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)

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
        this.refreshTodos();
        console.log(this.state)
      
    }
    refreshTodos(){
        let username =AuthService.getLoggedInUserName()
        TodoDataServive.retrieveAllTodos(username)
                .then(
            response => {
               this.setState({todos : response.data });
               this.refreshTodos()

            }
        )

    }

    DeleteTodoClicked(id){
        let username =AuthService.getLoggedInUserName()
        TodoDataServive.deleteTode(username, id)
        .then(
            response => {
                this.setState({message : `Delete of todo ${id} Successful`})
            }
        )


    }
    updateTodoClicked(id){
        console.log('update' + id)
        this.props.history.push(`/todos/${id}`)
        //let username =AuthService.getLoggedInUserName()
        //TodoDataServive.deleteTode(username, id)
        //.then(
            //response => {
                //this.setState({message : `Delete of todo ${id} Successful`})
            //}
        //)


    }
    // Second thing the render called using the  intial state in the const and it loads on the screen  
    render(){
        console.log('render')
        return(
            <div> 
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div classname="container">
                <table class="table">
                    <thead>
                        <tr>
                         
                            <th>description</th>
                            <th>done</th>
                            <th>targetDate</th>
                            <th>Update</th>
                            <th>Delete</th>
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
                                    <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.DeleteTodoClicked(todo.id)}>Delete</button></td>

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