import { ComponentProps, ElementType, MemoExoticComponent, ReactElement } from "react";

export type ButtonOwnPropsT<E extends ElementType = ElementType> = {
    children: ReactElement | string | undefined;
    className?: string;
    secondary?: boolean;
    smallSize?: boolean;
    rounded?: boolean;
    shadow?: boolean;
    circle?: boolean;
    as?: E;
};

export type ButtonProps<E extends ElementType> = ButtonOwnPropsT<E> & Omit<ComponentProps<E>, keyof ButtonOwnPropsT>;