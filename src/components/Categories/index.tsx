import { memo, useMemo, useRef } from "react";
import cn from "classnames";
import Button from "../Button";
import style from "./style.module.scss";
import { ArrowIcon } from '../Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation } from 'swiper';

import 'swiper/css';
import { Link } from "react-router-dom";
import { CATEGORIES } from "./constants";

export const Categories = memo(() => {
    const swiperRef = useRef<SwiperType>();

    const categoriesItems = useMemo(() => CATEGORIES.map(({ title, path, image }, index) => (
        <SwiperSlide className={style.categories_item} key={ index }>
            <Link to={ path }>
                <div className={style.categories_item_image_wrap}>
                    { image }
                </div>
                <div className={style.categories_title}>{ title }</div>
            </Link>
        </SwiperSlide>
    )), []);

    return (
        <section className={style.categories}>
            <h2>
                Categories
                <div className={style.categories_arrow}>
                    <Button
                        as="button"
                        secondary
                        circle
                        className={cn(style.arrow, style.arrow__prev)}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <ArrowIcon />
                    </Button>
                    <Button
                        as="button"
                        secondary
                        circle
                        className={style.arrow}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <ArrowIcon />
                    </Button>
                </div>
            </h2>
            <Swiper
                spaceBetween={42}
                slidesPerView={"auto"}
                freeMode={true}
                className={style.categories_carousel}
                modules={[Navigation]}
                lazy={{
                    loadPrevNext: true
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >

                { categoriesItems }
            </Swiper>
        </section>
    );
});