import { memo } from "react";
import { IPhone } from "./types";
import { PhoneIcon } from "../Icons/Phone";
import { phoneMask } from "../../hooks/phone-mask";
import cn from "classnames";
import style from "./style.module.scss";

export const Phone = memo<IPhone>(({icon, number, classname, fillIcon, widthIcon, heightIcon}) => {
    const value = phoneMask(number)
    return (
        <a href={"tel: " + value} className={cn(style.phone, classname)} target="_blank">
            {icon && (
                <PhoneIcon fill={fillIcon} width={widthIcon} height={heightIcon} />
            )}
            <span>{value}</span>
        </a>
    );
});