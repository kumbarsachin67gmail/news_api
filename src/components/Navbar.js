import React from 'react';
import { Link } from "react-router-dom";

const Navbar =(props)=> {
    return (
        <div className="navbar navbar-expand-sm navbar-dark bg-secondary px-sm-5 container-fluid">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                india
              </Link>
            </li>
          </ul>
  
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/america" className="nav-link">
                America
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/uk" className="nav-link">
                UK
              </Link>
            </li>
          </ul>
        </div>
      );
    
}
export default Navbar
