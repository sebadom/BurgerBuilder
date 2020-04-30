import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../components/UI/Logo/Logo';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';

interface Props {
    closed: Function,
    opened: boolean
}

const SideDrawer = (props: Props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.opened} clicked={props.closed} />
            <div className={[classes.SideDrawer, props.opened ? classes.open : classes.close ].join(' ')}>
                <div className={classes.LogoWrapper}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer
