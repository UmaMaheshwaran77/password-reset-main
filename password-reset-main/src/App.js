 
import './App.css';
import "./asserts/sb-admin.css";
import "./asserts/sb-admin-2.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ForgetPasswordPage from './ForgetPasswordPage';
import Portal from './Portal';
import UserList from './UserList';
import DashBoard from './DashBoard';
import CreateUser from './CreateUser';
import ViewUser from './ViewUser';
// import { useEffect,useState } from 'react';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
import ResetPasswordPage from './ResetPasswordPage';

function App() {
  return (
   <BrowserRouter>
  
   <Routes>
<Route path="/" element={<RegisterPage/>}></Route>
<Route path='/login' element={<LoginPage/>}></Route>
<Route path='/forget-password' element={<ForgetPasswordPage/>}></Route>
<Route path="/reset-password/:token" element={<ResetPasswordPage/>}></Route>

<Route path="/portal" element={<Portal/>}> 
    <Route path="dashboard" element={<DashBoard />}></Route>
                <Route path="userlist" element={<UserList />}></Route>
                {/* <Route path="/product" element={<Product />}></Route> */}
                <Route path='create-user' element={<CreateUser />}></Route>
                <Route path='view-user/:id' element={<ViewUser />}></Route>
                <Route path='edit-user/:id' element={<EditUser />}></Route>
      
                </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
