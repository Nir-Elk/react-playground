import {useState, useEffect} from "react";

export default () => {
    const isBottom = () => Math.round(window.scrollY + window.innerHeight) >= Math.round(document.body.scrollHeight);

    const [scrolledBottom, setScrolledBottom] = useState(isBottom());

    useEffect(() => {
        const handler = () => requestAnimationFrame(() => {
            setScrolledBottom(isBottom());
        });
        document.addEventListener('scroll', handler);

        return () => document.removeEventListener('scroll', handler);
    },[]);

    return scrolledBottom;
}