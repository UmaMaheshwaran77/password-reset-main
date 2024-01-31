
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function ViewUser() {
  const params = useParams();    
  // console.log("ID from URL:", params.id);
const [state,setState]=useState();

 let getinfo= async () => {
      try {
          const statee = await axios.get(`https://655b68dbab37729791a90eb0.mockapi.io/damyapi/details/${params.id}`);
          setState(statee.data)
          // console.log(statee.data[0].username);
      } catch (error) {
          console.log("error")
      }
  }
  useEffect(() => {
  getinfo();
}, []);


  return (<div>
    {
      state? <ul>
    <li>
      {state?.username}
    </li>
    <li>
      {state?.position}
    </li>
    <li>
      {state?.office}
    </li>
    <li>
      {state?.dob}
    </li>
    <li>
      {state?.startdate}
    </li>
   </ul>:<div>
    <h1>loading.....</h1>
    </div>

}
</div>
  )
}

export default ViewUser
