import React, {Component} from 'react';
import './Contact.css';
import {FillerText} from '../../helpers/filler';

export default class Contact extends Component {
    render() {
        return (
            <main id="main-section">
                <h1>This is where I'd put my contact information...</h1>
                <FillerText/>
            </main>
        )
    }
}