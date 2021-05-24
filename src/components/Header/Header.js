import React from 'react';
import styles from './Header.module.css';
import Searchbar from './Searchbar/Searchbar';

function Header() {
    return (
        <div className="container">
            <header className={styles.header}>
                <Searchbar />
            </header>
        </div>

    )
}

export default Header;