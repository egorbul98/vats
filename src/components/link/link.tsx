import React, { AnchorHTMLAttributes } from 'react';
import styles from './link.module.scss';
import cn from 'classnames';

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<Props> = ({ children, className, ...props }: Props) => {
    return (
        <a className={cn(styles.link, className)} {...props}>
            {children}
        </a>
    );
};
