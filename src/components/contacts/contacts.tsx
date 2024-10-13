import React from 'react';
import styles from './contacts.module.scss';
import { Link } from '../link/link';
import { MASTER_PHONE } from '../feedback-form/constants';
import cn from 'classnames';
import CallOutlined from '@mui/icons-material/CallOutlined';

interface Props {
    variant?: 'm' | 's';
}

export const Contacts = ({ variant = 'm' }: Props) => {
    return (
        <div className={cn(styles.contacts, styles[`variant-${variant}`])}>
            <Link className={styles.phone} href={`tel:${MASTER_PHONE}`}>
                <span className={styles.iconPhone}>
                    <CallOutlined />
                </span>
                {MASTER_PHONE}
            </Link>
            <div className={styles.capture}>
                с 8:00&nbsp;до&nbsp;21:00<span className={styles.hiddenMob}> без выходных</span>
            </div>
        </div>
    );
};
