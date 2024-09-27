import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='submenu'>
        <NavLink to="/" activeClassName="active" className="link">AllPost</NavLink>
        <NavLink to="/wp" activeClassName="active" className="link">Web Programming</NavLink>
        <NavLink to="/pm" activeClassName="active" className="link">Programming</NavLink>
        <NavLink to="/ds" activeClassName="active" className="link">Data Science</NavLink>
        <NavLink to="/other" activeClassName="active" className="link">OtherPost</NavLink>
        <NavLink to="/pdm" activeClassName="active" className="link">My Post</NavLink>
      </div>
      <div className='cont'>
        <h5>This is My home Page</h5>
        <Outlet />
        {/* <h5>This is the footer</h5> */}
      </div>
    </div>
  );
};

export default Home;
