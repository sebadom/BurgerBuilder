import React from 'react'
import burgerLogo from '../../../assets/logo.png';
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Logo" />
        </div>
    )
}

export default Logo
