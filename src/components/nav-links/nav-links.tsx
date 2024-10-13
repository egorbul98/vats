import React from 'react';
import styles from './nav-links.module.scss';
import { Link } from '../link/link';
import { scrollIntoView } from '../../utils/scroll-into-view';

export interface NavLinkProp {
    label: string;
    href: string;
    icon: React.ReactNode;
}

export const NavigationLinks = ({ items, onClickItem }: { items: NavLinkProp[]; onClickItem: () => void }) => {
    const handleClickItem = (id: string) => {
        onClickItem();
        scrollIntoView(id);
    };

    return (
        <nav className={styles.links}>
            {items.map((item) => {
                return (
                    <Link
                        className={styles.item}
                        key={item.label}
                        href={item.href}
                        onClick={(e: any) => {
                            e.preventDefault();
                            handleClickItem(item.href);
                        }}
                    >
                        <div className={styles.icon}>{item.icon}</div>
                        <div className={styles.label}>{item.label}</div>
                    </Link>
                );
            })}
        </nav>
    );
};
