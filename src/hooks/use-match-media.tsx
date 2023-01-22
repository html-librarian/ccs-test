import { useLayoutEffect, useState } from "react";
import { QUERIES } from "../constants/queries";

export const useMatchMedia = () => {
    const mediaQueryLists = QUERIES.map((query) => matchMedia(query));
    
    const getValues = () => mediaQueryLists.map((list) => list.matches);
    
    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

        return () =>
            mediaQueryLists.forEach((list) =>
                list.removeEventListener("change", handler)
            );
    }, []);

    return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index]
    }), {});
};