import Time from "@/components/time/time"
import Profile from "@/components/profile/profile"
import Location from "@/components/location/location"
import { useEffect } from "react"

const App = () => {
    useEffect(() => {
        const changeFavicon = (theme: string) => {
            const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
            if (favicon) {
                favicon.href = theme === 'dark' ? '/favicon-dark.png' : '/favicon-light.png';
            }
        };

        const mediaMatch = window.matchMedia('(prefers-color-scheme: dark)');
        const theme = mediaMatch.matches ? 'dark' : 'light';

        changeFavicon(theme);
        mediaMatch.addEventListener('change', () => changeFavicon(theme));
    }, []);

    return (
        <>
            <Time />
            <Profile
                name="Antonio Subašić"
                occupation="Computer Science Student"
                github={{ username: "antoniosubasic", uid: 96651154 }}
                email="antonio@subasic.me"
                linkedin={{ username: "subasicantonio" }}
            />
            <Location
                name="Leonding, Austria"
                coordinates="48.26840° N, 14.25177° E"
                link="https://maps.app.goo.gl/DfycVedfNLd7hjBaA"
            />
        </>
    )
}

export default App
