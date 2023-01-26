import React, { Component } from 'react';

class CreateEmployeeComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            firstName:'',lastName:'',emailId:''
        }
        
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        // this.saveEmployee=this.saveEmployee.bind(this);
        this.saveEmployee=this.saveEmployee.bind(this);
    }
    changeFirstNameHandler(event){
        this.setState({firstName:event.target.value});
    }
    changeLastNameHandler(event){
        this.setState({lastName:event.target.value});
    }
    changeEmailIdHandler(event){
        this.setState({emailId:event.target.value});
    }
    saveEmployee(event){
       let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId} 
    console.log('employee=>'+JSON.stringify(employee));
    event.preventDefault();    
}

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offser-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name:</label>
                                        <input placeholder='First Name' className='form-control' 
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} ></input>
                                        
                                    </div>
                                    <div className='form-group'>
                                    <label>Last name:</label>
                                    <input placeholder='Last Name' className='form-control' 
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} ></input>

                                    </div>
                                    <div className='form-group'>
                                    <label>Email Id:</label>
                                    <input placeholder='Email Id' className='form-control' 
                                        value={this.state.emailId} onChange={this.changeEmailIdHandler} ></input>

                                    </div>
                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    {/* <button className='btn btn-sucess' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default CreateEmployeeComponent;