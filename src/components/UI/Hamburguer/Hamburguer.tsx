import React from 'react';
import classes from './Hamburger.module.css';

interface Props {
    active: boolean,
    clicked: Function
}

const Hamburguer = (props: Props) => {
    return (
        <button className={[
                classes.hamburger,
                classes["hamburger--squeeze"],
                props.active ? classes["is-active"] : undefined
            ].join(' ')}
            type="button"
            onClick={() => props.clicked()}>
            <span className={classes["hamburger-box"]}>
                <span className={classes["hamburger-inner"]}></span>
            </span>
        </button>
    )
}

export default Hamburguer
