import React from 'react';
import styles from './container.module.scss';
import cn from 'classnames';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: Props) => {
    return <div className={cn(styles.container, className)}>{children}</div>;
};
