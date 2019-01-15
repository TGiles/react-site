import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <nav className="nav-bar">
               <a className="skip-link" href="#main-section">
                Skip to Main Content
               </a>
               <Link to="/Home" className="nav-link">
                Home
               </Link>
               <Link to="/About" className="nav-link">
                About
               </Link>
               <Link to="/Nobody_cares" className="nav-link">
                Nobody cares
               </Link>
               <Link to="/Contact" className="nav-link">
                Contact
               </Link>
            </nav>
        )
    }

}