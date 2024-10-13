import React from 'react';
import cn from 'classnames';
import styles from './menu-button.module.scss';

import CloseOutlined from '@mui/icons-material/CloseOutlined';
import MenuOutlined from '@mui/icons-material/MenuOutlined';

interface Props {
    onClick: () => void;
    open: boolean;
    className?: string;
}

export const MenuButton = ({ onClick, open, className }: Props) => {
    return (
        <button className={cn(styles.menuButton, className, { [styles.open]: open })} onClick={onClick}>
            <span>{open ? <CloseOutlined /> : <MenuOutlined />}</span>
        </button>
    );
};
