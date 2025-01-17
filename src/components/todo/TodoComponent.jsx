import React, {Component} from 'react'
import moment from 'moment'
import {ErrorMessage, Form, Formik,Field} from 'formik';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthService from './AuthService';

class TodoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description : '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    componentDidMount(){

        if(this.state.id===-1){
            return
        }

        let username =AuthService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')

            })) 
    }    

    validate(values){
        let errors ={}
            if(!values.description){
                errors.description = 'Enter a decription'

            } else if(values.description.length<5){
                errors.description = 'Enter enter at least 5 chartacters in Decription'

            }

            if( !moment(values.targetDate).isValid()){
                errors.targetDate = 'Enter a valid TargetDate'
            }
        
        return errors

    }
    onSubmit(values){
        let username =AuthService.getLoggedInUserName()
        let todo = {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate,
        }
        if (this.state.id === -1) {
             TodoDataService.createTodo(username, todo)
                .then(() => { this.props.history.push('/todos') })
        } else {

            TodoDataService.UpdateTodo(username, this.state.id, todo)
                .then(() => { this.props.history.push('/todos') })
        }   
    }

    render(){
        let {description,targetDate} = this.state

        return (
                <div>
                    <h1>Todo</h1>
                    <div className="container">
                        <Formik 
                        initialValues={{description,targetDate}} 
                        onSubmit={this.onSubmit} 
                        validateOnChange= {false}
                        validateOnBlur={false}
                        validate={this.validate} 
                        enableReinitialze ={true}
                        >
                            {
                                (props) =>(
                                    <Form>
                                        <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                        <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                        <fieldset className="form-group">
                                            <label>Description</label>
                                            <Field className="form-control" type="text" name="description" placeholder="Add you'r Todo Here"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Target Date</label>
                                            <Field className="form-control" type="date" name="targetDate"/>
                                        </fieldset>
                                        <button className="button button1" type="submit">Save</button>
                                    </Form>

                                )
                            }
                        </Formik>
                    </div>
                </div>
        )
    }
} 
export default TodoComponent