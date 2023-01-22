import { Hero } from "../../components/Hero";
import { Categories } from '../../components/Categories';
import { Banner } from "../../components/Banner";
import { Support } from '../../components/Support';

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Banner
                title="Large Inventory Of Power Tools & Accessories"
                text="Find the Aluminum and Stainless Steel items for your project in stock and ready to ship today! Avoid project delays and long lead times in a challenging supply chain for specialty metals and non-ferrous items. We are well stocked and here to serve you with guided support."
                textButton="Shop Now"
                url="#"
            />
            <Support />
        </>
    );
};