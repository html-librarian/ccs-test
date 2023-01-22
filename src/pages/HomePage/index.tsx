import { Hero } from "../../components/Hero";
import { Categories } from '../../components/Categories';
import { Banner } from "../../components/Banner";
import { Support } from '../../components/Support';

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Banner />
            <Support />
        </>
    );
};