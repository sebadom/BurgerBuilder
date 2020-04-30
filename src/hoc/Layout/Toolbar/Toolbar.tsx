import React from 'react'
import classes from './Toolbar.module.css';
import Logo from '../../../components/UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburguer from '../../../components/UI/Hamburguer/Hamburguer';
interface Props {
    toggleBtnActive: boolean,
    toggleBtnHandler: Function
}

const Toolbar = (props: Props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.ToggleWrapper}>
                <Hamburguer active={props.toggleBtnActive} clicked={props.toggleBtnHandler} />
            </div>
            <div className={classes.LogoWrapper}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar
