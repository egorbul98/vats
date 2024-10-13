import React, { useEffect, useRef, useState } from 'react';
import styles from './map-block.module.scss';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { ADDRESS, MASTER_EMAIL, MASTER_PHONE } from '../../components/feedback-form/constants';
import { Anchor } from '../../components/anchor/anchor';
import { Container } from '../../components/container/container';
import cn from 'classnames';

const coordsPlacemark = [55.78567, 37.484029];
const coordsCenter = [coordsPlacemark[0] + 0.03, coordsPlacemark[1] - 0.1];

const ShowWhen = ({ topToElement, children }: { topToElement: number; children: React.ReactNode }) => {
    const [show, setShow] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current && !show) {
            window.document.addEventListener('scroll', scrollHandler);
        }
        let timeouteId: any;
        let locked = false;

        function scrollHandler() {
            if (locked) {
                return;
            }
            locked = true;

            timeouteId = setTimeout(() => {
                locked = false;

                const rect = containerRef.current!.getBoundingClientRect();

                const top = rect.y - window.innerHeight;

                if (top <= topToElement) {
                    setShow(true);
                }
            }, 200);
        }

        return () => {
            window.document.removeEventListener('scroll', scrollHandler);
            clearTimeout(timeouteId);
        };
    }, [topToElement, containerRef, show]);

    return (
        <div ref={containerRef}>
            <div className={cn(styles.wrapper, { [styles.show]: show })}>{children}</div>
        </div>
    );
};

export const MapBlock = () => {
    return (
        <>
            <Anchor id="contacts" offset={false} />
            <ShowWhen topToElement={200}>
                <div className={styles.container}>
                    <Container className={styles.innerContainer}>
                        <div className={styles.contacts}>
                            <h2 className={styles.title}>Контакты</h2>
                            <div className={styles.field}>
                                <b>Адрес:</b> {ADDRESS}
                            </div>
                            <div className={styles.field}>
                                <b>Телефон:</b> <a href={`tel:${MASTER_PHONE}`}>{MASTER_PHONE}</a>
                            </div>
                            <div className={styles.field}>
                                <b>E-mail:</b> <a href={`mailto:${MASTER_EMAIL}`}>{MASTER_EMAIL}</a>
                            </div>
                        </div>
                    </Container>

                    <YMaps width={'100%'} height={'100%'}>
                        <Map
                            defaultState={{
                                center: coordsCenter,
                                zoom: 11,
                            }}
                            className={styles.map}
                        >
                            <Placemark geometry={coordsPlacemark} />
                        </Map>
                    </YMaps>
                </div>
            </ShowWhen>
        </>
    );
};
