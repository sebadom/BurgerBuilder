import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

interface Props {

}

const NavigationItems = (props: Props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem active link={new URL('http://google.com')}>Burger Builder</NavigationItem>
            <NavigationItem link={new URL('http://google.com')}>Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems
