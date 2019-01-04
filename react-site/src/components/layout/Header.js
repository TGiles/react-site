import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <a className="skip-link" href="#main">Skip to Main Content</a>
               <a className="nav-link" href="/home">Home</a>
               <a className="nav-link" href="/About">About</a>
               <a className="nav-link" href="/Nobody_cares">Nobody cares</a>
               <a className="nav-link" href="/Contact">Contact</a>
            </nav>
        )
    }

}