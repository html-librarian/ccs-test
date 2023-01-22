import { ComponentProps, ElementType } from "react";

export type ButtonOwnPropsT<E extends ElementType = ElementType> = {
    children: string;
    className?: string;
    smallSize?: boolean;
    rounded?: boolean;
    as?: E;
};

export type ButtonProps<E extends ElementType> = ButtonOwnPropsT<E> & Omit<ComponentProps<E>, keyof ButtonOwnPropsT>;