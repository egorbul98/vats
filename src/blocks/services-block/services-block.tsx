import React from 'react';
import styles from './services-block.module.scss';
import { BlockLayout } from '../../components/block-layout/block-layout';

const listData = [
    {
        title: 'ПЕРЕМОРАЖИВАЕТ',
        services: ['Замена термостата', ' Замена нагревателя', 'Замена дефростера', 'Устранение засора'],
        priceFrom: 350,
    },
    {
        title: 'НЕ ВКЛЮЧАЕТСЯ',
        services: ['Замена шнура', 'Замена термостата', 'Замена модуля', "Замена ТЭН'а"],
        priceFrom: 800,
    },
    {
        title: 'НЕ МОРОЗИТ',
        services: ['Замена термостата', 'Заправка фреоном', 'Замена компрессора'],
        priceFrom: 1200,
    },
    {
        title: 'ПОДТЕКАЕТ',
        services: ['Замена дренажной трубки', 'Замена вентилятора', 'Замена реле', 'Чистка системы талой воды'],
        priceFrom: 700,
    },
    {
        title: 'НЕ ВЫКЛЮЧАЕТСЯ',
        services: ['Замена компрессора', 'Устранение утечки', 'Чистка системы'],
        priceFrom: 1600,
    },
    {
        title: 'ШУМИТ',
        services: ['Замена реле', 'Замена вентилятора', 'Замена заслонки'],
        priceFrom: 1500,
    },
];

interface Props {
    onClickItem: () => void;
}

export const ServicesBlock = ({ onClickItem }: Props) => {
    return (
        <BlockLayout
            title="Стоимость ремонта"
            description="Что случилось?"
            id="services"
            backgroundColor="blue-light"
            paddingBottom
            paddingTop
        >
            <div className={styles.list}>
                {listData.map((item, i) => {
                    return (
                        <div key={i} className={styles.item}>
                            <div className={styles.card} onClick={onClickItem}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.content}>
                                    <ul className={styles.services}>
                                        {item.services.map((service) => {
                                            return (
                                                <li key={service} className={styles.service}>
                                                    {service}
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <div className={styles.priceFrom}>От {item.priceFrom} руб</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* <div className={styles.button}>
                <Button onClick={onClickItem} fullWidth>
                    Другая неисправность
                </Button>
            </div> */}
        </BlockLayout>
    );
};
