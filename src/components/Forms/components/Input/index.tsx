import { FC, memo } from "react";
import cn from 'classnames';
import style from "./style.module.scss";
import { IInput } from "./types";

export const Input: FC<IInput> = memo(({
    className, 
    ...props
}) => {
    return (
        <div className={cn(style.form_control, className)}>
            {props.label && (
                <label htmlFor={props.id}>{props.label}</label>
            )}
            <input {...props} />
        </div>
    );
});