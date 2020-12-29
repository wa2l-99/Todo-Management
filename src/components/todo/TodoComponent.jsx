import React, {Component} from 'react'
import moment from 'moment'
import {ErrorMessage, Form, Formik} from 'formik';

class TodoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description : 'Learn Forms Now',
            targetDate: moment(new Date()).format('YYYY-MM-DD')

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    validate(values){
        let errors ={}
            if(!values.description){
                errors.description = 'Enter a decription'
            }else if(values.description.lenght<5){
                errors.description = 'Enter enter at least 5 chartacters in Decription'

            }

            if(moment(values.targetDate).isValid())[
                errors.targetDate = 'Enter a valid TargetDate'
            ]
        
        return errors

    }
    onSubmit(values){

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
                        >
                            {
                                (props) =>(
                                    <Form>
                                        <ErrorMessage name="descriprion" component="div" className="alert alert-warning"/>
                                        <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                        <fieldset className="form-group">
                                            <label>Description</label>
                                            <input></input>
                                            <Field className="form-control" type="text" name="description"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label></label>
                                            <input></input>
                                            <Field className="form-control" type="date" name="targetDate"/>
                                        </fieldset>
                                        <button className="btn btn-success" type="submit">Save</button>
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