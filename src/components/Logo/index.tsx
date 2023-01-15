import { memo } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export const Logo = memo(() => {
    return (
        <Link to={`/`} className={style.logo}>Logo</Link>
    );
});