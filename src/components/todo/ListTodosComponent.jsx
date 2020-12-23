import React , {Component} from 'react';
import AuthService from './AuthService';

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