
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ViewUser from './ViewUser';

function DeleteUser() {

const params=useParams()
const [state,setState]=useState();

// const deleteData=async ()=>{
//     const deletee =await axios.delete(`https://655b68dbab37729791a90eb0.mockapi.io/damyapi/details/${params.id}`)
// setState(deletee.data)
// }
const deleteData=async ()=>{
try {
   const deletee= await axios.delete(`https://655b68dbab37729791a90eb0.mockapi.io/damyapi/details/${params.id}`);
    setState(deletee.data)
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
useEffect (()=>{
    deleteData()
},[])

 
    return (
        <div>
          <div>DeleteUser</div>
          {state ? <div>User deleted successfully!</div> : null}
        </div>
      );
  
}

export default DeleteUser

