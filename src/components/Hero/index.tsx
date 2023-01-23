import { memo, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import { HEROES } from "./constants";
import Button from "../Button";

import style from "./style.module.scss";

export const Hero = memo(() => {
    const [controlledSwiper, setControlledSwiper] = useState(null);

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
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                lazy={{
                    loadPrevNext: true
                }}
            >
                { heroesItems }
            </Swiper>
        </section>
    );
});