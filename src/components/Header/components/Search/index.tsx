import { memo, useState } from "react";
import style from "./style.module.scss";
import { useMatchMedia } from '../../../../hooks/use-match-media';
import { SearchIcon } from '../../../Icons/Search';
import { CloseIcon } from "../../../Icons/Close";
import { Input } from '../../../Forms/components/Input/index';

export const HeaderSearch = memo(() => {
    const { isMobile } = useMatchMedia();
    const [isMobileShow, setMobileShow] = useState(false);

    const toggleSearch = () => {
        setMobileShow(!isMobileShow);
    };

    return (
        <div className={style.search}>
            {isMobile ? (
                <>
                    <form className={style.search_form}>
                        {/* TODO: Сделать отдельным компонентом Инпут */}
                        {isMobileShow && (
                            <div className={style.search_control}>
                                <SearchIcon />
                                <Input
                                    type="text"
                                    placeholder="Search"
                                    className={style.search_input}
                                />
                            </div>
                        )}
                    </form>
                    <button className={style.search_toggler} onClick={toggleSearch}>
                        {isMobileShow ? (
                            <CloseIcon fill={"#212121"}/>
                        ) : (
                            <SearchIcon
                                width={22}
                                height={22}
                                fill={"#4859F0"}
                                stroke={"#4859F0"}
                            />
                        )}
                    </button>
                </>
            ) : (
                <form className={style.search_form}>
                    <div className={style.search_control}>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search"
                            className={style.search_input}
                        />
                    </div>
                </form>
            )}
        </div>
    );
});