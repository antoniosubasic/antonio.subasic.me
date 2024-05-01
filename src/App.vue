<template>
    <TimeStamp />
    <ProfileCard
        name="Antonio Subašić"
        occupation="Computer Science Student"
        github="antoniosubasic"
        email="antonio@subasic.me"
    />
    <LocationStamp
        name="Leonding, Austria"
        coordinates="48.26840° N, 14.25177° E"
    />
</template>

<script>
import ProfileCard from "./components/ProfileCard.vue";
import TimeStamp from "./components/TimeStamp.vue";
import LocationStamp from "./components/LocationStamp.vue";

export default {
    name: "App",
    components: {
        ProfileCard,
        TimeStamp,
        LocationStamp,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:wght@100..900&display=swap");

:root {
    --stamp-font-family: "DM Mono", monospace;
    --stamp-foreground-color: #707070;
}

body,
html {
    margin: 0;
    padding: 0;
}

#app {
    color: #ffffff;
    background-color: #232323;
    font-family: "Inter", sans-serif;
    padding: 2.5rem;
    min-height: calc(100dvh - 2.5rem * 2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
</style>
