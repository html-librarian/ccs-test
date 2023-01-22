import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { Logo } from '../Logo/index';
import { useMatchMedia } from '../../hooks/use-match-media';
import { NAV_ACCAUNT, NAV_BOTTOM, NAV_TOP } from "./constants";
import { HeaderSearch } from "./components/Search";
import { Phone } from "../Phone";
import cn from "classnames";

export const Header = memo(() => {
    const { isMobile, isDesktop } = useMatchMedia();
    const [mobileNavShow, setMobileNavShow] = useState(!!isDesktop);

    const toggleNav = () => {
        setMobileNavShow(!mobileNavShow);
    };

    const menuItemsTop = useMemo(() => NAV_TOP.map(({ title, path }, index) => (
            <Link key={ index } to={ path }>
                { title }
            </Link>
        )), [],
    );

    const menuItemsAccaunt = useMemo(() => NAV_ACCAUNT.map(({ title, path, counter, icon }, index) => (
            <Link key={index} to={path}>
                { icon }
                { title }
                { counter && <span className={style.badge}>{ counter }</span> }
            </Link>
        )), [],
    );

    const menuItemsBottom = useMemo(() => NAV_BOTTOM.map(({ title, path }, index) => (
            <Link key={ index } to={ path }>
                { title }
            </Link>
        )), [],
    );

    return (
        <header className={style.header}>
            <div className={style.header__top}>
                { !isDesktop && (
                    <Phone 
                        number="844434672"
                        classname={style.header_phone}
                        icon
                        widthIcon={24}
                        heightIcon={24}
                    />
                ) }
                { !isMobile && <nav>{ menuItemsTop }</nav> }
            </div>
            <div className={style.header__main}>
                <Logo />
                <HeaderSearch />
                {isDesktop &&  <nav className={style.header_nav_account}>{ menuItemsAccaunt }</nav>}
                {!isDesktop && (
                    <button
                        className={cn(style.header_toggler, mobileNavShow && style.header_toggler__show )}
                        type="button"
                        title="Toggle navigation"
                        onClick={toggleNav}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                )}
            </div>
            { isDesktop && (
                <div className={style.header__bottom}>
                    <nav className={style.header_nav__bottom}>{ menuItemsBottom }</nav>
                    <Phone 
                        number="844434672"
                        classname={style.header_phone}
                        icon
                        widthIcon={24}
                        heightIcon={24}
                    />
                </div>
            ) }

            {!isDesktop && mobileNavShow && (
                <div className={style.mobile_nav}>
                    <nav className={style.mobile_nav__icons}>{ menuItemsAccaunt }</nav>
                    <nav>{ menuItemsBottom }</nav>
                    {isMobile && <nav>{ menuItemsTop }</nav> }
                </div>
            )}
        </header>
    );
});