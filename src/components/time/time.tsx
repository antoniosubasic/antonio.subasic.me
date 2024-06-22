import { useState, useEffect, useRef } from 'react';
import styles from './time.module.scss';
import { animate } from '@/utils/animate';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    const [runAnimation, setRunAnimation] = useState(true);
    const timeStampRef = useRef(null);

    function getCurrentTime() {
        const date = new Date();
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timeStampRef.current && runAnimation) {
            animate(timeStampRef.current, currentTime);
            setRunAnimation(false);
        }
    }, [currentTime, runAnimation]);

    return (
        <div className={styles.time} ref={timeStampRef}>
            {currentTime}
        </div>
    )
};

export default Time;