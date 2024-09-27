import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn((prev) => !prev); // Toggle login state
  };

  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/addpost" activeClassName="active">Add Post</NavLink>
      <NavLink to="/admin" activeClassName="active">Admin</NavLink>
      <NavLink to="/reg" activeClassName="active">Register</NavLink>

      {isLoggedIn ? (
        <button 
          type="button" 
          className="btn btn-danger" 
          onClick={() => {
            handleLoginLogout();
            // Optionally handle logout logic here
          }}
        >
          Logout
        </button>
      ) : (
        <NavLink to="/login">
          <button 
            type="button" 
            className="btn btn-success"
            onClick={() => handleLoginLogout()}
          >
            Login
          </button>
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
