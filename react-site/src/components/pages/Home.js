import React, {Component} from 'react';
import './Home.css';
import {FillerText} from '../../helpers/filler';
import ProfilePicture from '../../helpers/Profile-picture';

export default class Home extends Component {
    render() {
        return (
            <main id="main-section">
            <React.Fragment>
                <h1>Welcome to a under construction website.</h1>
                <ProfilePicture/>
                <FillerText/>
            </React.Fragment>
                
            </main>
        )
    }
}