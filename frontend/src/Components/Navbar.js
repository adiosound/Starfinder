import React from 'react';
import './Navbar.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function Navbar() {
    return (
        <Router>
            <div className = 'Nav'>
                <nav>
                    <a href="/"><h3>Logo Image</h3></a>
                    <ul>
                            <a href="/about"><li>About</li></a>
                            <a href="/contact"><li>Contact</li></a>
                            <a href="/news"><li>News</li></a>
                    </ul>
                </nav>
            </div>
       </Router>
    )
}
