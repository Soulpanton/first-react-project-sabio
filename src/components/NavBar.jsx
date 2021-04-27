import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark sabio">
                    {/* <button className="link-button navbar-brand">Soulpanton</button>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <button className="nav-link link-button">
                                    <NavLink to="/welcome">Home</NavLink>
                                    <span className="sr-only">(current)</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link link-button">
                                    <NavLink to="/Register">People</NavLink>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link link-button">
                                    <NavLink to="/Register">Blogs</NavLink>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link ">
                                    <NavLink to="/login">Tech Co.</NavLink>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link ">
                                    <NavLink to="/jumbo">Jobs</NavLink>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link ">
                                    <NavLink to="/jumbo">Events</NavLink>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link ">
                                    <NavLink to="/productForm">Products</NavLink>
                                </button>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {/* need to create functionality for this one */}
                            {/* <button
                                className="btn btn-danger ml-3"
                                onClick={this.onClickLogoutButton}
                                type="button"
                            >
                                Logout
                            </button> */}
                            <button className="btn btn-info m-2">
                                <NavLink to="/Register">Register</NavLink>
                            </button>
                        </form>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
export default NavBar;
