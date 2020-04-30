import React from 'react';
import classes from './Button.module.css'

export enum ButtonTypes {
    SUCCESS = 'Success',
    DANGER = 'Danger'

}
interface Props {
    clicked: Function,
    disabled?: boolean,
    label: string,
    type: ButtonTypes,
}

const Button = (props: Props) => {
    const TypeMapping = {
        [ButtonTypes.SUCCESS as string]: classes.Success,
        [ButtonTypes.DANGER  as string]: classes.Danger
    };

    return (
        <button className={[classes.Button, TypeMapping[props.type]].join(' ')}
            onClick={() => props.clicked()}
            disabled={props.disabled}>
                {props.label}
        </button>
    )
}

export default Button
