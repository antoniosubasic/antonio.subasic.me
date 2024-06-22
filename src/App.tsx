import Time from "@/components/time/time"
import Profile from "@/components/profile/profile"
import Location from "@/components/location/location"

function App() {
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
