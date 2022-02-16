import React from 'react'
import {Link} from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Random Meal</Link></li>
                <li><Link to='/liked'>Liked Meals</Link></li>
            </ul>
        </nav>
    )
};