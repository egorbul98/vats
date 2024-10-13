import React from 'react';
import styles from './about-us-block.module.scss';
import { BlockLayout } from '../../components/block-layout/block-layout';

import LocalShipping from '@mui/icons-material/LocalShippingOutlined';
import Timer from '@mui/icons-material/TimerOutlined';
import Inventory from '@mui/icons-material/InventoryOutlined';
import Handyman from '@mui/icons-material/HandymanOutlined';
import DoneOutline from '@mui/icons-material/DoneOutline';
import Group from '@mui/icons-material/GroupOutlined';

const listData = [
    {
        title: 'Бесплатный выезд и диагностика',
        description: 'Мастер проведет бесплатную диагностику холодильника на дому и озвучит вам причину поломки.',
        icon: <LocalShipping />,
    },
    {
        title: 'Быстрое решение проблем!',
        description: 'Принимаем заявки круглосуточно. Устраним поломку в течение 24 часов.',
        icon: <Timer />,
    },
    {
        title: 'Гарантия до 2 лет',
        description: 'Мы предоставляем официальную гарантию на услуги и запчасти сроком до 2 лет.',
        icon: <Inventory />,
    },
    {
        title: 'Мастера с опытом 10+ лет',
        description: `Все специалисты имеют профильное образование и большой опыт работы. Компания несет ответственность за сотрудников.`,
        icon: <Handyman />,
    },
    {
        title: 'Оригинальные запчасти, сертифицированные производителями',
        icon: <DoneOutline />,
    },
    {
        title: `60 % клиентов, которые приходят к нам в первый раз - узнают о ПрофХолоде через советы знакомых.`,
        icon: <Group />,
    },
];

export const AboutUsBlock = () => {
    return (
        <BlockLayout title="О компании" description="Почему клиенты выбирают нас" id="about" paddingBottom paddingTop>
            <div className={styles.list}>
                {listData.map((item, i) => {
                    return (
                        <div key={i} className={styles.item}>
                            <div className={styles.card}>
                                <div className={styles.icon}>{item.icon}</div>
                                <div className={styles.title}>{item.title}</div>
                                {item.description && <div className={styles.description}>{item.description}</div>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </BlockLayout>
    );
};
