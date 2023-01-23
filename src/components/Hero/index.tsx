import { memo, useMemo, useRef } from "react";
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation } from 'swiper';

import 'swiper/css';
import { Link } from "react-router-dom";
import { HEROES } from "./constants";
import Button from "../Button";

export const Hero = memo(() => {
    const heroesItems = useMemo(() => HEROES.map(({ title, path, image, buttonText }, index) => (
        <SwiperSlide
            className={style.hero_item}
            key={ index }
            style={image}
        >
            <div className={style.hero_content}>
                <h1>{ title }</h1>
                <Button as="a" href={ path } className={style.hero_button}>{ buttonText }</Button>
            </div>
        </SwiperSlide>
    )), []);

    return (
        <section className={style.hero}>
            <Swiper
                spaceBetween={42}
                slidesPerView={"auto"}
                freeMode={true}
                className={style.hero_carousel}
                modules={[Navigation]}
                lazy={{
                    loadPrevNext: true
                }}
            >
                { heroesItems }
            </Swiper>
        </section>
    );
});