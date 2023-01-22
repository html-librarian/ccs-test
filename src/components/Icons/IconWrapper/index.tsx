import { FC } from 'react';
import cn from 'classnames';

import css from './styles.module.scss';

export type IconWrapperProps = {
    children: React.ReactNode;
    className?: string;
}

export const IconWrapper: FC<IconWrapperProps> = ({ children, className }) => (
	<i className={cn(css.icon, className)}>{children}</i>
);
