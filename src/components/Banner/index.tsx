import { memo } from "react";
import Button from "../Button";
import style from "./style.module.scss";
import { IBanner } from "./types";
import ImageBanner from "../../assets/image/banner.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Banner = memo<IBanner>(({
    title,
    text,
    url,
    textButton
}) => {
    return (
        <section className={style.banner}>
            <LazyLoadImage src={ ImageBanner } alt={ title } />
            <div className={style.banner_content}>
                <h2>{ title }</h2>
                <p>{ text }</p>
                { textButton && <Button as="a" className={style.banner_button} href={ url }>{ textButton }</Button> }
            </div>
        </section>
    );
});