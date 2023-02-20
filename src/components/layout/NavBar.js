import React from "react";
import { NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">USMAPP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                            </li>
                            <NavDropdown title="Staff" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/about">
                                <NavLink className="nav-link" exact to="/staff-info">Staff Info</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                <NavLink className="nav-link" exact to="/addstaff/-1">Add Staff</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                <NavLink className="nav-link" exact to="/c">Update Staff</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar;