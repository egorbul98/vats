import React, { useRef } from 'react';
import styles from './slider.module.scss';
import './swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

import ArrowBackIosNewOutlined from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';

interface Props {
    slides: React.ReactNode[];
    swiperProps?: any;
    classNames?: { navigation?: string; swiper?: string };
}

export const Slider = ({ slides, swiperProps, classNames }: Props) => {
    const swiperRef = useRef<any>(null);

    const prev = () => {
        swiperRef.current?.slidePrev();
    };
    const next = () => {
        swiperRef.current?.slideNext();
    };

    return (
        <div className={styles.swiperWrapper}>
            <div className={classNames?.navigation}>
                <Navigation prev={prev} next={next} />
            </div>

            <Swiper
                lazy
                preloadImages={false}
                spaceBetween={16}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className={cn(styles.swiper, classNames?.swiper)}
                autoplay={{ delay: 100 }}
                breakpoints={{
                    1200: {
                        slidesPerView: 4,
                    },
                    960: {
                        spaceBetween: 32,
                        slidesPerView: 3,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                }}
                autoHeight
                loop
                {...swiperProps}
            >
                {slides.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className={styles.slide}>
                            {item}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

interface NavigationProps {
    prev: () => void;
    next: () => void;
}

const Navigation = ({ next, prev }: NavigationProps) => {
    return (
        <div className={styles.navigation}>
            <button className={styles.navigationButton} onClick={prev}>
                <span className={styles.icon}>
                    <ArrowBackIosNewOutlined />
                </span>
            </button>

            <button className={styles.navigationButton} onClick={next}>
                <span className={styles.icon}>
                    <ArrowForwardIosOutlined />
                </span>
            </button>
        </div>
    );
};
