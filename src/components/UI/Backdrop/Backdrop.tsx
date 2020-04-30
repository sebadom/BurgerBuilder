import React from 'react';
import classes from './Backdrop.module.css';

export interface Props {
    show: boolean,
    clicked: Function
}

const Backdrop = (props: Props) => {
    return props.show ? <div className={classes.Backdrop} onClick={() => props.clicked()}></div> : null;
}

export default Backdrop
