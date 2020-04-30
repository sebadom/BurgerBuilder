import React, { PropsWithChildren, Component } from 'react'
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

export interface Props {
    show: boolean,
    modalClosed: Function
}

interface State {

}

// const Modal = (props: PropsWithChildren<Props>) => {
//     return (
//         <React.Fragment>
//             <Backdrop show={props.show} clicked={props.modalClosed} />
//             <div className={classes.Modal}
//                 style={{
//                     transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                     opacity: props.show ? '1' : '0'
//                 }}>
//                 {props.children}
//             </div>
//         </React.Fragment>
//     );
// }


class Modal extends Component<PropsWithChildren<Props>, State> {
    state = {}


    shouldComponentUpdate(nextProps: PropsWithChildren<Props>, nextState: State) {
        return nextProps.show !== this.props.show;
    }


    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Modal;
