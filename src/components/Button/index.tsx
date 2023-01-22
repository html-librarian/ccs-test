import { ElementType } from "react";
import cn from 'classnames';
import style from "./style.module.scss";
import { ButtonProps } from "./types";

const defaultElement = "button";

export default function Button<E extends ElementType = typeof defaultElement>({
        children,
        className,
        smallSize,
        shadow,
        rounded,
        as,
        ...otherProps
    }: ButtonProps<E>) {

    const classes = cn(
        style.button,
        smallSize && style.button__small,
        rounded && style.button__rounded,
        shadow && style.button__shadow,
        className
    );
    const TagName = as || defaultElement;

    return (
        <TagName className={classes} {...otherProps}>
            {children}
        </TagName>
    );
};
