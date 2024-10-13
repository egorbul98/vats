import React from 'react';
import styles from './faq-block.module.scss';
import { BlockLayout } from '../../components/block-layout/block-layout';
import cn from 'classnames';
import useCollapse from 'react-collapsed';

import ExpandLessOutlined from '@mui/icons-material/ExpandLessOutlined';

const listData = [
    {
        title: 'Как узнать стоимость ремонта?',
        content:
            'Менеджер рассчитает по телефону предварительную стоимость. Точная стоимость ремонта и комплектующих будет обозначена после проведения диагностики.',
    },
    {
        title: 'В какие районы вы выезжаете?',
        content: 'Мы выезжаем во все районы Москвы, а также в населенные пункты в пределах 50 км от МКАД.',
    },
    {
        title: 'Когда приедет мастер?',
        content:
            'Мастер приезжает в день обращения в удобное для вас время. Если заказ является срочным, он может приехать в течение 30 минут.',
    },
    {
        title: 'Нужно ли везти холодильник в сервисный центр ПрофХолода?',
        content:
            'Практически любую поломку мастер может отремонтировать на дому. Холодильник транспортируется в сервисный центр лишь в редких случаях.',
    },
    {
        title: 'У вас есть запчасти в наличии?',
        content:
            'Да, все запчасти есть в наличии на нашем складе. Мы используем оригинальные комплектующие и их качественные аналоги.',
    },
    {
        title: 'У вас есть гарантия?',
        content: 'Мы предоставляем гарантию на услуги и запчасти сроком до 2 лет.',
    },
];

export const FaqBlock = () => {
    return (
        <BlockLayout title="Часто задаваемые вопросы" id="faq" paddingBottom paddingTop>
            <div className={styles.list} itemScope itemType="http://schema.org/FAQPage">
                {listData.map((item, i) => {
                    return (
                        <div key={i} className={styles.item}>
                            <FaqItem {...item} />
                        </div>
                    );
                })}
            </div>
        </BlockLayout>
    );
};

interface FaqItemProps {
    title: string;
    content: string;
}

<div itemScope itemType="http://schema.org/FAQPage">
    <div itemProp="mainEntity" itemScope itemType="http://schema.org/Question">
        <div itemProp="name">Это вопрос</div>
        <div itemScope itemProp="acceptedAnswer" itemType="http://schema.org/Answer">
            <div itemProp="text">Здесь размещается ответ на указанный вопрос</div>
        </div>
    </div>

    <div itemProp="mainEntity" itemScope itemType="http://schema.org/Question">
        <div itemProp="name">Это вопрос</div>
        <div itemScope itemProp="acceptedAnswer" itemType="http://schema.org/Answer">
            <div itemProp="text">Здесь размещается ответ на указанный вопрос</div>
        </div>
    </div>
</div>;

const FaqItem = ({ content, title }: FaqItemProps) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div
            className={cn(styles.faqItem, { [styles.expaned]: isExpanded })}
            itemProp="mainEntity"
            itemScope
            itemType="http://schema.org/Question"
        >
            <button {...getToggleProps()} className={styles.title}>
                {isExpanded ? '' : ''}
                <span itemProp="name">{title}</span>
                <ExpandLessOutlined className={styles.icon} />
            </button>
            <div {...getCollapseProps()} itemScope itemProp="acceptedAnswer" itemType="http://schema.org/Answer">
                <div className={styles.content} itemProp="text">
                    {content}
                </div>
            </div>
        </div>
    );
};
