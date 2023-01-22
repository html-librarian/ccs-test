import { memo } from "react";
import style from "./style.module.scss";

export const Categories = memo(() => {
    return (
        <div className={style.categories}>
            Categories
        </div>
    );
});