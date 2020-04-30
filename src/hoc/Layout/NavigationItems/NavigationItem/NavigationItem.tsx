import React, { PropsWithChildren } from 'react';
import classes from './NavigationItem.module.css';
import { URL } from 'url';

interface Props {
    active?: boolean,
    link: URL
}

const NavigationItem = (props: PropsWithChildren<Props>) => {
    return (
        <li className={ classes.NavigationItem }>
            <a className={ props.active ? classes.active : undefined }
                href={ props.link.toString() }>{props.children}</a>
        </li>
    )
}

export default NavigationItem
