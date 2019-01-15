import React, {Component} from 'react';
import './Nobody_cares.css';
import {FillerText} from '../../helpers/filler';

export default class Nobody_Cares extends Component {
    render() {
        return (
            <main id="main-section">
                <h1>Here's a place nobody cares about.</h1>
                <FillerText/>
            </main>
        )
    }
}