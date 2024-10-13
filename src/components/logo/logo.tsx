import React from 'react';
import styles from './logo.module.scss';
import { Link } from '../link/link';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';

export const Logo = () => {
    return (
        <Link className={styles.logo} href="/">
            <KitchenOutlinedIcon className={styles.icon} />

            <span>ПрофХолод</span>
        </Link>
    );
};
