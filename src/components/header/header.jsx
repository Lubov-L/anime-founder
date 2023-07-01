import React from 'react';
import cl from './header.module.css';

const Header = () => {
    return (
        <div className={cl.header}>
            <span>ANIME FOUNDER</span>
            <div>
                <a href="#" className={cl.nav_link}>log in</a>
                <a href="#" className={cl.nav_link}>sign up</a>
            </div>
        </div>
    );
};

export default Header;