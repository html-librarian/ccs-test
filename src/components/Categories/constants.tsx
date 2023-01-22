
import { LazyLoadImage } from "react-lazy-load-image-component";
import Abrasives from "../../assets/image/categories/1.png";
import Electrical from "../../assets/image/categories/2.png";
import Welding from "../../assets/image/categories/3.png";
import Safety from "../../assets/image/categories/4.png";
import Fasteners from "../../assets/image/categories/5.png";
import HandTools from "../../assets/image/categories/6.png";
import { ICategories } from "./types";

export const CATEGORIES: ICategories[] = [
    {
        path: "#",
        title: "Abrasives",
        image: <LazyLoadImage src={ Abrasives } alt="alt" effect="blur" />
    },
    {
        path: "#",
        title: "Electrical",
        image: <LazyLoadImage src={ Electrical } alt="alt" effect="blur" />
    },
    {
        path: "#",
        title: "Welding",
        image: <LazyLoadImage src={ Welding } alt="alt" effect="blur" />
    },
    {
        path: "#",
        title: "Safety",
        image: <LazyLoadImage src={ Safety } alt="alt" effect="blur" />
    },
    {
        path: "#",
        title: "Fasteners",
        image: <LazyLoadImage src={ Fasteners } alt="alt" effect="blur" />
    },
    {
        path: "#",
        title: "Hand Tools",
        image: <LazyLoadImage src={ HandTools } alt="alt" effect="blur" />
    },
    {
        path: "#",
        title: "Abrasives 1",
        image: <LazyLoadImage src={ Abrasives } alt="alt" effect="blur" />
    },
    {
        path: "#",
        title: "Electrical 1",
        image: <LazyLoadImage src={ Electrical } alt="alt" effect="blur" />
    },
    {
        path: "#",
        title: "Welding 1",
        image: <LazyLoadImage src={ Welding } alt="alt" effect="blur" />
    },
];