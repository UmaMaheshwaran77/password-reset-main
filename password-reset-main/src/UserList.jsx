import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function UserList() {
    const [detail, setDetail] = useState([]);
    

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get("https://nodejs-password-reset-flow.onrender.com/userlist",{
                    headers :{
                        "authorization" :localStorage.getItem("token")
                    }
                 });
                console.log(response.data); // Log the data to check if it's received correctly
                setDetail([...response.data]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getData();
    }, []);
    


    const params=useParams()
    const [state,setState]=useState();
    
    // const deleteData=async ()=>{
    //     const deletee =await axios.delete(`https://655b68dbab37729791a90eb0.mockapi.io/damyapi/details/${params.id}`)
    // setState(deletee.data)
    // }
    const deleteData=async (id)=>{
    try {
       const deletee= await axios.delete(`https://nodejs-password-reset-flow.onrender.com/${id}`);
        setState(deletee.data)
        
        const response = await axios.get("https://nodejs-password-reset-flow.onrender.com/userlist",{
            headers :{
                "authorization" :localStorage.getItem("token")
            }
         });
        console.log(response.data); // Log the data to check if it's received correctly
        setDetail([...response.data]);

        console.log("User deleted successfully");
        // You can navigate to another page or perform other actions after successful deletion.
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("User not found");
          // Handle the case where the user is not found (e.g., show a message to the user)
        } else {
          console.error("Error deleting user:", error);
          // Handle other errors
        }
      }
    }
  
    

    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">UserList</h1>

                <Link to={"/portal/create-user"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>


            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {detail.map((data) => {
                                    return <tr key={data.id}>
                                        <td>{data.username}</td>
                                        <td>{data.position}</td>
                                        <td>{data.office}</td>
                                        <td>{data.dob}</td>
                                        <td>{data.startdate}</td>
                                        <td>{data.salary}</td>
                                        <td>
                                            <Link to={`/portal/view-user/${data.id}`} className='btn btn-info ml-2'>View</Link>
                                            <Link to={`/portal/edit-user/${data.id}`} className='btn btn-warning ml-4'>Edit</Link>
                                            <button onClick={()=>deleteData(data.id)} className='btn btn-danger ml-4'>Delete</button>
                                        </td>
                                    </tr>
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList