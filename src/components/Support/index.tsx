import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { SUPPORT_CARDS } from "./constants";
import style from "./style.module.scss";

export const Support = memo(() => {
    const cards = useMemo(() => SUPPORT_CARDS.map(({ title, path, icon }, index) => (
            <Link key={index} to={path} className={style.support_card}>
                { icon }
                { title }
            </Link>
        )), [],
    );

    return (
        <div className={style.support}>
            { cards }
        </div>
    );
});