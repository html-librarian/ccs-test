import { memo } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { Logo } from '../Logo/index';

export const Header = memo(() => {
    return (
        <header className={style.header}>
            {/* Скрываем на мобилках */}
            <nav className={style.header_top}>
                <ul>
                    {/* Выносим в константы и делаем map */}
                    <li>
                        <Link to={`#`}>Пункт меню</Link>
                    </li>
                </ul>
            </nav>
            {/* Скрываем на мобилках */}
            <div className={style.header_main}>
                <Logo />
                <div className="search">
                    <form action="" className={style.search_form}>
                        {/* TODO: Сделать отдельным компонентом Инпут */}
                        <input
                            type="text"
                            placeholder="Search"
                            className={style.search_input}
                        />
                    </form>
                </div>
                {/* TODO: 
                    Скрывать на десктопу.
                    Сделать логику появления поиска на мобилках и таблетках.
                    Вставить вместо текста в кнопке иконку
                */}
                <button
                    type="button"
                    title="Toggle search"
                >
                    I - search
                </button>
                {/* TODO: Скрывать с десктопа */}
                <button
                    className={style.header_toggler}
                    type="button"
                    title="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
                {/* Скрываем на мобилках */}
                <nav>
                    <ul>
                        <li>
                            Lists
                        </li>
                        <li>
                            Account
                        </li>
                        <li>
                            Quick order
                        </li>
                        <li>
                            Cart
                        </li>
                    </ul>
                </nav>
                {/* / Скрываем на мобилках */}
            </div>
            {/* Скрываем на мобилках */}
            <nav className={style.header_bottom}>
                <ul>
                    {/* TODO: Выносим роуты в константы и делаем map */}
                    <li>
                        <Link to={`#`}>Item main</Link>
                    </li>
                </ul>
            </nav>
            {/* / Скрываем на мобилках */}
        </header>
    );
});