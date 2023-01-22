import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.scss";
import { useMatchMedia } from '../../hooks/use-match-media';
import { Phone } from "../Phone";
import { NAV_FOOTER } from "./constants";
import { Subscribe } from '../Forms/Subscribe';

export const Footer = memo(() => {
    const { isMobile, isDesktop } = useMatchMedia();

    const menuItems = useMemo(() => NAV_FOOTER.map(({ title, items }, index) => (
            <div key={index} className={style.footer_block}>
                <b>{ title }</b>
                <nav className={style.footer_nav}>
                    {items?.map((item) => (
                        <>
                            {item.phone ? (
                                <Phone 
                                    number={ item.title }
                                    classname={style.phone}
                                    icon
                                    widthIcon={18}
                                    heightIcon={18}
                                />
                            ): (
                                <Link to={item.path}>
                                    { item.title }
                                </Link>
                            )}
                        </>
                    ))}
                </nav>
            </div>
        )), [],
    );

    return (
        <footer className={style.footer}>
            <div className={style.footer_wrap}>
                <div className={style.footer__left}>
                    { menuItems }
                </div>
                <div className={style.footer__right}>
                    <b>Subscribe to our mailing list to receive exclusive offers and the latest product updates</b>

                    <Subscribe />
                </div>
            </div>
            <div className={style.footer_copyright}>
                © «Brand» <span>2022</span>, All Rights Reserved
            </div>
        </footer>
    );
});