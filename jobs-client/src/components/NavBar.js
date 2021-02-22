import React from 'react';
import Nav from 'react-bootstrap/Nav' 
import Navbar from 'react-bootstrap/Navbar' 
import { NavLink } from 'react-router-dom';

  
const NavBar = () => {

  const style = {
    color: "#FFFFFF"
  }
  const activeStyle = {
    color: "#ff9947"
  }

  return (
    <div className="nav-menu" style={style}>
      <Navbar bg="dark" variant="light">
        <Nav>
          <NavLink style={style} activeStyle={activeStyle} to="/">
            Home
          </NavLink>
          <NavLink style={style} activeStyle={activeStyle} to="addjob">
            Add Job
          </NavLink>
          <NavLink style={style} activeStyle={activeStyle} to="/alljobs">
            All Jobs
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;