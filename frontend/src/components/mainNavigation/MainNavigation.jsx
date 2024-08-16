import React from 'react'
import styles from './MainNavigation.module.css'
import { Link } from 'react-router-dom'

function MainNavigation() {
    return (
        <nav className={styles.nav}>
            <h2>Great Quotes App</h2>
            <ul>
                <li>
                    <Link to="/">All Quotes</Link>
                </li>
                <li>
                    <Link to="/new">New Quotes</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation