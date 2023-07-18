import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
function Topbar() {
    return (
        <nav className=" container-fluid fixed-top navbar"
            style={{ position: "sticky" }} >
         <div  className="container">
                <span className="navbar-brand fw-bold">Library Management</span>
                <div className="d-flex justify-content-center p-2" id="navbarSupportedContent">
                   
                            <Link className="nav-link me-4" to="/dashboard">
                                <span><b>Dashboard</b></span></Link>
                      
                            <Link className="nav-link" to="/library">
                                <span><b>Library</b></span>
                            </Link>
                </div>
            </div>
        </nav>

    )
}

export default Topbar;