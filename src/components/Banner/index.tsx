import { memo } from "react";
import style from "./style.module.scss";

export const Banner = memo(() => {
    return (
        <div className={style.banner}>
            Banner
        </div>
    );
});