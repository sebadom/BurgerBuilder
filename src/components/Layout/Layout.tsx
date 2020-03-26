import React from 'react';
import styles from './Layout.module.css';

// interface Props {

// }

const Layout: React.FC = ({children}) => {
    return (
        <React.Fragment>
            <div>
                Toolbar, Sidedrawer, Backdrop
            </div>
            <main className={styles.content}>
                { children }
            </main>
        </React.Fragment>
    )
}

export default Layout

