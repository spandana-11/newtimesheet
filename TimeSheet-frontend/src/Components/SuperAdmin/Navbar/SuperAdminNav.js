import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import './SuperAdminNav.css'; // Link to the CSS file for the component
import { Col } from "react-bootstrap";
import image from '../../Image/Homepage.jpg';

function SuperAdminNav() {
    return (
        <>
            {/* Superadmin navigation to create admin and search admin */}
            <div className="superadmin-navigation" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "-200px" }}>
                <Container style={{ marginTop: "0", marginLeft: "-450px" ,fontWeight:"bold"}}>
                    <ul className="nav nav-control">
                        <li className="nav-item">
                            <NavLink to="/superadmin/createadmin" className="nav-link superadmin-navigation-link" activeclassname="active">
                            Create Admin User
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/superadmin/searchadmin" className="nav-link superadmin-navigation-link" activeclassname="active">
                                Search Admin User
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/superadmin/timesheetapproval" className="nav-link superadmin-navigation-link" activeclassname="active">
                                Approve Admin Timesheet
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/superadmin/leaveapproval" className="nav-link superadmin-navigation-link" activeclassname="active">
                                Approve Leave Request
                            </NavLink>
                        </li>
                    </ul>
                </Container>

                <img
                    src={image}
                    alt="Example"
                    style={{
                        width: "450px",
                        height: "auto",
                        marginTop: "200px",
                        marginLeft: "0",
                    }}
                    className="img-fluid rounded"
                />
            </div>
        </>
    );
}

export default SuperAdminNav;
