import { memo } from "react";
import style from "./style.module.scss";

export const Hero = memo(() => {
    return (
        <div className={style.hero}>
            Hero
        </div>
    );
});