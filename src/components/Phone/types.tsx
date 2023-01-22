import { IIconWrapper } from '../Icons/IconWrapper/types';

export interface IPhone {
    icon?: boolean;
    fillIcon?: IIconWrapper["fill"];
    widthIcon?: IIconWrapper["width"];
    heightIcon?: IIconWrapper["height"];
    number: string;
    classname?: string;
}
