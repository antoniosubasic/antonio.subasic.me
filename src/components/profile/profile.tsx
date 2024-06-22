import { useState } from 'react';
import styles from './profile.module.scss';
import githubIcon from '@/assets/github.svg';
import emailIcon from '@/assets/email.png';
import linkedinIcon from '@/assets/linkedin.svg';
import checkmarkIcon from '@/assets/checkmark.png';

interface ProfileParams {
    name: string;
    occupation: string;
    github: { username: string; uid: number; };
    email: string;
    linkedin: { username: string; };
}

const Profile = ({ name, occupation, github, email, linkedin }: ProfileParams) => {
    const fadeTimeout = 3000; // timeout before fading out the copy-message
    const fadeDuration = 250; // duration of the fade-out animation

    const [showCopyMessage, setShowCopyMessage] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setShowCopyMessage(true);
            setIsFadingOut(false);
            setTimeout(() => {
                setIsFadingOut(true);
                setTimeout(() => {
                    setShowCopyMessage(false);
                }, fadeDuration);
            }, fadeTimeout);
        } catch (err) {
            console.error('failed to copy: ', err);
        }
    };

    return (
        <div className={styles.profile}>
            <img
                src={`https://avatars.githubusercontent.com/u/${github.uid}`}
                alt="Profile Picture"
                className={styles.profilePicture}
            />
            <h1>{name}</h1>
            <h2>{occupation}</h2>
            <div className={styles.socials}>
                <div className={styles.github}>
                    <a href={`https://github.com/${github.username}`}>
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                </div>
                <div className={styles.email}>
                    <a href={`mailto:${email}`} onClick={e => { e.preventDefault(); copyToClipboard(email); }}>
                        <img src={emailIcon} alt="Email" />
                    </a>
                    {showCopyMessage && (
                        <div className={`${styles.copyMessage} ${isFadingOut ? styles.fadeOut : ''}`}>
                            <img src={checkmarkIcon} alt="Checkmark" />
                            <span>copied</span>
                        </div>
                    )}
                </div>
                <div className={styles.linkedin}>
                    <a href={`https://linkedin.com/in/${linkedin.username}`}>
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;