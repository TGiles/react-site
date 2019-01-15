import React, {Component} from 'react';
import './About.css';
import {FillerText} from '../../helpers/filler';

export default class About extends Component {
    render() {
        return (
            <main id="main-section">
                <h1>Hey, welcome to the about page</h1>
                <FillerText/>
            </main>
            
        )
    }

}