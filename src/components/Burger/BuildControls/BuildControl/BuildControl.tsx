import React from 'react';
import { SupportedIngredientsLabels } from '../../../../core/Ingredients';
import classes from './BuildControl.module.css';

interface Props {
    label: SupportedIngredientsLabels,
    add: Function,
    remove: Function,
    isDisabled: boolean
};

const BuildControl = (props: Props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.remove as any} disabled={props.isDisabled}>Less</button>
            <button className={classes.More} onClick={() => props.add()}>More</button>
        </div>
    );
};

export default BuildControl;
