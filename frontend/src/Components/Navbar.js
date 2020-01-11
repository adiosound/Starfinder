import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className = 'Nav'>
            <nav>
                <ul>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Contact</li></a>
                        <a href="#"><li>News</li></a>
                </ul>
            </nav>
        </div>
    )
}
