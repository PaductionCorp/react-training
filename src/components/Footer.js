import React, { Component } from 'react';
import packageJson from '../../package.json';
import './Footer.css';

const AppVersion = packageJson.version;

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                Version {AppVersion}
            </div>
        );
    }
}

export default Footer;