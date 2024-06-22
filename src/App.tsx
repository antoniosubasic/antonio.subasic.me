import Profile from "./Profile/Profile";
import Time from "./Time/Time";
import Location from "./Location/Location";

function App() {
    return (
        <>
            <Time />
            <Profile
                name="Antonio Subašić"
                occupation="Computer Science Student"
                github="antoniosubasic"
                email="antonio@subasic.me"
                linkedin="subasicantonio"
            />
            <Location
                name="Leonding, Austria"
                coordinates="48.26840° N, 14.25177° E"
                coordinatesLink="https://maps.app.goo.gl/DfycVedfNLd7hjBaA"
            />
        </>
    )
}

export default App
