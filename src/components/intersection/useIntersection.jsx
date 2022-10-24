import { useState, useEffect } from 'react';

const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            },
            { rootMargin }
        );

        const node = element.current;

        node && observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, [element, rootMargin]);

    return isVisible;
};

export default useIntersection;
