import { useState, useEffect, useRef } from 'react';
import styles from './Time.module.scss';
import { animate } from '../utils/animate.ts';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(getCurrentTime());
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
        if (timeStampRef.current) {
            animate(timeStampRef.current, currentTime);
        }
    }, [currentTime]);

    return (
        <div className={styles.time} ref={timeStampRef}>
            {currentTime}
        </div>
    )
};

export default Time;