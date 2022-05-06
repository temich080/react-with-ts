import {useEffect, useState} from "react";

export default function useHover (ref: any) {
    const [hovered, setHovered] = useState(false);
    const on = () => setHovered(true);
    const off = () => setHovered(false);

    useEffect(() => {
        if (!ref?.current) return;
        const node = ref.current;

        node.addEventListener('mouseenter', on);
        node.addEventListener('mousemove', on);
        node.addEventListener('mouseleave', off);
        return () => {
            node.removeEventListener('mouseenter', on);
            node.removeEventListener('mousemove', on);
            node.removeEventListener('mouseleave', off);
        }
    }, []);

    return hovered;
}