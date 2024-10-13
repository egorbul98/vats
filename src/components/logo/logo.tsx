import React from 'react';
import styles from './logo.module.scss';
import { Link } from '../link/link';
// import Stockpot from '@mui/icons-material/Abc';

export const Logo = () => {
    return (
        <Link className={styles.logo} href="/">
            {/* <Stockpot className={styles.icon} /> */}

            <span>МскЧан</span>
        </Link>
    );
};
