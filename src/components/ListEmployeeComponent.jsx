import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';
import {  useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';



function ListButt(props) {
    const navigate = useNavigate();
    function handleClick() {
        console.warn("----"+props.navTo);
        navigate(props.navTo);
    }

    return (
        <>
            <button
                type="button"
                class="btn btn-outline-primary"
                onClick={handleClick}
            >
                {props.butName}
            </button>
        </>
    );
}
function UpdateButt(props) {
    const navigate = useNavigate();
    function handleClick() {
        console.warn("----000000"+props.navTo+""+props.id);
        navigate(props.navTo+"/"+props.id);
    }

    return (
        <>
            <button
                type="button"
                class="btn btn-outline-primary"
                onClick={handleClick}
            >
                {props.butName}
            </button>
        </>
    );
}
// function EditButt(props) {
//     const navigate = useNavigate();
//     function handleClick() {
//         console.warn("----"+props.navTo);
//         navigate(props.navTo);
//     }

//     return (
//         <>
//             <button
//                 type="button"
//                 class="btn btn-outline-primary"
//                 onClick={handleClick}
//             >
                
//             </button>
//         </>
//     );
// }

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
                employees: []
        }
        this.setNaveTo=this.setNaveTo(this);
    }
 
    
   
   componentDidMount(){
    EmployeeService.getEmployees().then((res)=>{
        this.setState({employees: res.data});
    
   });
    
} 
setNaveTo(id)
{
    let va='/update-employee/'+{id};
 return va.toString;
}
    render() {
       
        return (


            
            <div>
               <h2 className='text-center' >Employee List</h2>
               <div className='col' >
                  
               <ListButt navTo="/add-employee" butName="Add employee" />
               <ListButt navTo="/employees" butName="Add employee" />
               
                  
               
               </div>

               <div className='row'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th >Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=>
                                    <tr key={employee.id}>
                                        <td class="bg-danger" >{employee.firstName}</td>
                                        <td class="bg-danger">{employee.lastName}</td>
                                        <td class="bg-warning">{employee.emailId}</td>
                                        {/* <button onClick={()=>this.edittEmployee(employee.id)} className="btn btn-info">Update</button> */}
                                        <td class="bg-warning">
                                        <ListButt butName="Update" navTo='/update-employee/'{...<employee.id/>} />
                                             {/* <UpdateButt butName="Update" navTo="/updata-employee" id={employee.id} /> */}
                                             </td>
                                        
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
               </div> 
            </div>
        );
    }
}

export default ListEmployeeComponent;