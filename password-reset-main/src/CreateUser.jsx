
import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';

function CreateUser() {
    const formik = useFormik(
        {
            initialValues: {
                username: "",
                position: "",
                office: "",
                dob: "",
                startdate: "",
                salary: ""
            }, validate: (values) => {
                let errors = {

                }
                if (values.username == "") {
                    errors.username = "Please enter username"
                }
                if (values.username.length <= 3
                    || values.username.length >= 15) {
                    errors.username = "Please enter username between 3 to 15 character"
                }
                return errors;
            },
            onSubmit: async (values) => {
                try {
                     await axios.post("https://nodejs-password-reset-flow.onrender.com/create-user", values,{
                        headers :{
                            "authorization" :localStorage.getItem("token")
                        }
                     });
                   alert("User Created !!")

                } catch {
                    console.log("error")
                }

                console.log(values)
                formik.handleReset();
            }
        }
    );

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-4">
                        <label>NAME</label>
                        <input type='text' name="username" value={formik.values.username} onChange={formik.handleChange} className='form-control'>
                        </input>
                        <span style={{ color: "red" }}>{formik.errors.username}</span>
                    </div>
                    <div className="col-lg-4">
                        <label>POSITION</label>
                        <input type='text' name="position" value={formik.values.position} onChange={formik.handleChange} className='form-control'>
                        </input>
                    </div>
                    <div className="col-lg-4">
                        <label>OFFICE</label>
                        <input name="office" value={formik.values.office} onChange={formik.handleChange} className='form-control'>
                        </input>
                    </div>
                    <div className="col-lg-4">
                        <label>START DATE</label>
                        <input type="date" name="startdate" value={formik.values.startdate} onChange={formik.handleChange} className='form-control'>
                        </input>
                    </div>
                    <div className="col-lg-4">
                        <label>DOB</label>
                        <input type="date" name="dob" value={formik.values.dob} onChange={formik.handleChange} className='form-control'>
                        </input>
                    </div>
                    <div className="col-lg-4">
                        <label>SALARY</label>
                        <input type='number' name="salary" value={formik.values.salary} onChange={formik.handleChange} className='form-control'>
                        </input>
                    </div>
                    <div className='col-log-12 mt-4'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateUser