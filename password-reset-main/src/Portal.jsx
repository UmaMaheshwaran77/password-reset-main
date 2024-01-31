import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import DashBoard from './DashBoard';
import CreateUser from './CreateUser';
import ViewUser from './ViewUser';
import EditUser from './EditUser';
import SideBar from './SideBar';
import Nav from './Nav';

function Portal() {
  return (
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav></Nav>
          <div className="container-fluid">
            <Routes>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/view-user/:id" element={<ViewUser />} />
              <Route path="/edit-user/:id" element={<EditUser />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
