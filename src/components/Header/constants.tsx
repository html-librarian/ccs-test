import { IMenuType } from './types';
import {
    DocumentIcon,
    AccountIcon,
    LightningIcon,
    CartIcon
} from '../Icons';

export const NAV_TOP: IMenuType[] = [
    {
        path: "#",
        title: "Request a Sample"
    },
    {
        path: "#",
        title: "Help"
    },
    {
        path: "#",
        title: "Contact"
    }
];

export const NAV_ACCAUNT: IMenuType[] = [
    {
        path: "#",
        title: "Lists",
        icon: <DocumentIcon />
    },
    {
        path: "#",
        title: "Account",
        icon: <AccountIcon />
    },
    {
        path: "#",
        title: "Quick Order",
        icon: <LightningIcon />
    },
    {
        path: "#",
        title: "Cart",
        counter: 32,
        icon: <CartIcon />
    }
];

export const NAV_BOTTOM: IMenuType[] = [
    {
        path: "#",
        title: "Products"
    },
    {
        path: "#",
        title: "Resources"
    },
    {
        path: "#",
        title: "Services"
    },
    {
        path: "#",
        title: "Locations"
    },,
    {
        path: "#",
        title: "Careers"
    },
    {
        path: "#",
        title: "Support"
    }
];