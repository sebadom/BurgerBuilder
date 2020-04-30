import React, { Component } from 'react';
import styles from './Layout.module.css';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';

interface Props {

}
interface State {
    showSideDrawer: boolean
}

class Layout extends Component<Props, State> {
    state: State = {
        showSideDrawer: false
    }

    toggleDrawerCloseHandler = () => {
        this.setState((prevState: State) => ({ showSideDrawer: !prevState.showSideDrawer }));
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar toggleBtnActive={this.state.showSideDrawer} toggleBtnHandler={this.toggleDrawerCloseHandler} />
                <SideDrawer opened={this.state.showSideDrawer} closed={this.toggleDrawerCloseHandler} />
                <main className={styles.content}>
                    { this.props.children }
                </main>
            </React.Fragment>
        )
    }
}

export default Layout

