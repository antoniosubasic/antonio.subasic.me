import { useEffect, useRef } from 'react';
import styles from './location.module.scss';
import { animate } from '@/utils/animate';

interface LocationParams {
    name: string;
    coordinates: string;
    link: string;
}

const Location = ({ name, coordinates, link }: LocationParams) => {
    const nameRef = useRef(null);
    const coordinatesRef = useRef(null);

    useEffect(() => {
        if (nameRef.current) {
            animate(nameRef.current, name);
        }

        if (coordinatesRef.current) {
            animate(coordinatesRef.current, coordinates);
        }
    }, [name, coordinates]);

    return (
        <div className={styles.location}>
            <span className={styles.name} ref={nameRef}>{name}</span>
            <span className={styles.seperator}>·</span>
            <a className={styles.coordinates} href={link} ref={coordinatesRef}>{coordinates}</a>
        </div>
    );
};

export default Location;