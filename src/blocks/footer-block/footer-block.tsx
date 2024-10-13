import React from 'react';
import styles from './footer-block.module.scss';
import { Link } from '../../components/link/link';
import { ADDRESS, MASTER_EMAIL, MASTER_PHONE } from '../../components/feedback-form/constants';
import { NavLinkProp } from '../../components/nav-links/nav-links';
import { BlockLayout } from '../../components/block-layout/block-layout';
import { MasterCardIcon } from '../../assets/icons/payment/matercard';
import { MirIcon } from '../../assets/icons/payment/mir';
import { VisaIcon } from '../../assets/icons/payment/visa';
import { SberIcon } from '../../assets/icons/payment/sber';
import { TinkoffIcon } from '../../assets/icons/payment/tinkoff';
import { scrollIntoView } from '../../utils/scroll-into-view';

interface Props {
    navLinks: NavLinkProp[];
}

export const FooterBlock = ({ navLinks }: Props) => {
    const handleClickItem = (id: string) => {
        scrollIntoView(id);
    };

    return (
        <footer>
            <BlockLayout paddingTop paddingBottom backgroundColor="blue-light">
                <div className={styles.innerContainer}>
                    <nav className={styles.navLinks}>
                        {navLinks.map((item) => {
                            return (
                                <div key={item.label} className={styles.item}>
                                    <Link
                                        href={item.href}
                                        onClick={(e: any) => {
                                            e.preventDefault();
                                            handleClickItem(item.href);
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            );
                        })}
                    </nav>

                    <div className={styles.contacts}>
                        <div className={styles.field}>
                            <b>Адрес:</b> {ADDRESS}
                        </div>
                        <div className={styles.field}>
                            <b>Телефон:</b> <a href={`tel:${MASTER_PHONE}`}>{MASTER_PHONE}</a>
                        </div>
                        <div className={styles.field}>
                            <b>E-mail:</b> <a href={`mailto:${MASTER_EMAIL}`}>{MASTER_EMAIL}</a>
                        </div>
                        <div className={styles.field}>8:00&nbsp;—&nbsp;21:00 без выходных</div>
                    </div>

                    <div className={styles.payments}>
                        <div>{<SberIcon />}</div>
                        <div>{<TinkoffIcon />}</div>
                        <div>{<MirIcon />}</div>
                        <div>{<MasterCardIcon />}</div>
                        <div>{<VisaIcon />}</div>
                    </div>

                    <div className={styles.copyright}>© 2001-2022 ПрофХолод, ремонт холодильников</div>
                </div>
            </BlockLayout>
        </footer>
    );
};
