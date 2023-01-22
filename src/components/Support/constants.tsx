
import { BulbIcon, CatalogIcon, HeadphoneIcon } from '../Icons/';
import { ISupportCard } from './types';

export const SUPPORT_CARDS: ISupportCard[] = [
    {
        path: "#",
        title: "Products Catalog",
        icon: <CatalogIcon />
    },
    {
        path: "#",
        title: "24/7 Customer Support",
        icon: <HeadphoneIcon />
    },
    {
        path: "#",
        title: "Product Ideas",
        icon: <BulbIcon />
    },
];