import { ComponentProps, ElementType, ReactElement } from "react";

export type ButtonOwnPropsT<E extends ElementType = ElementType> = {
    children: ReactElement | string | undefined;
    className?: string;
    smallSize?: boolean;
    rounded?: boolean;
    shadow?: boolean;
    as?: E;
};

export type ButtonProps<E extends ElementType> = ButtonOwnPropsT<E> & Omit<ComponentProps<E>, keyof ButtonOwnPropsT>;