import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/acm-logo.jpg";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* Show back button except on Home page */}
                {location.pathname !== "/" && (
                    <button className="back-button" onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                )}
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>
            <div className="navbar-right">
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li className="dropdown">
                        <button className="dropdown-button" onClick={toggleDropdown}>Events</button>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/events">Monthly Events</Link></li>
                                <li><Link to="/mega-events">Mega Events</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/core-team">Core Team</Link></li>
                    <li><Link to="/membership">Membership</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li>
                        <FontAwesomeIcon icon={faBell} size="lg" className="notification-icon" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
