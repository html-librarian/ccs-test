
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroBG from "../../assets/image/hero/hero.png";
import { IHero } from "./types";

export const HEROES: IHero[] = [
    {
        path: "#",
        title: "Fiberglass and specialty metals are in stock across the United States",
        image: { backgroundImage: `url(${HeroBG})` },
        buttonText: "Shop Now"
    },
    {
        path: "#",
        title: "Fiberglass and specialty metals are in stock across the United States 1",
        image: { backgroundImage: `url(${HeroBG})` },
        buttonText: "Shop Now 1"
    },
    {
        path: "#",
        title: "Fiberglass and specialty metals are in stock across the United States 2",
        image: { backgroundImage: `url(${HeroBG})` },
        buttonText: "Shop Now 2"
    }
];