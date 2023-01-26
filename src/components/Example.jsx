import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";
import { Link, useNavigate,useHistory } from "react-router-dom";
 
function Example1() {
    const navigate = useNavigate();
    navigate("/add-employee");
    // function handleClick() {
    //     navigate(props.va);
    // }
   // console.warn("---- i mam here");
    
    // exa1=()=>{ navigate("/add-employee");}
//    function edit(){
//      return   navigate("/add-employee");
//     }
    // return   navigate("/add-employee");
    // return (
    //     <div>
    //         <button
    //             type="button"
    //             class="btn btn-outline-primary"
    //        //     onClick={handleClick}
    //         >
    //            { props.val1}
    //         </button>
    //     </div>
    // );
}

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };
        
       
    }

    

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }
    fun1()
    {
        this.props.navigation.navigate("/add-employee");
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="col">
                  {/* <Example1 va="/add-employee" val1="Add employee" /> */}
                  <button onClick={() => { this.props.navigation.navigate("/add-employee") }} className="btn btn-info">Update</button>
                                   
                </div>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td class="bg-danger">{employee.firstName}</td>
                                    <td class="bg-danger">{employee.lastName}</td>
                                    <td class="bg-warning">{employee.emailId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Example;
