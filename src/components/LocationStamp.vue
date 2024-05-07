<template>
    <div id="locationStamp">
        <span id="name" ref="name">{{ name }}</span>
        <span id="seperator">·</span>
        <a
            id="coordinates"
            :href="coordinatesLink"
            ref="coordinates"
            >{{ coordinates }}</a
        >
    </div>
</template>

<script>
import { animate } from "@/utils/animate.js";

export default {
    name: "LocationStamp",
    props: {
        name: String,
        coordinates: String,
        coordinatesLink: String,
    },
    mounted() {
        animate(this.$refs.name, this.name);
        animate(this.$refs.coordinates, this.coordinates);
    },
};
</script>

<style scoped>
#locationStamp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

#locationStamp > * {
    font-family: var(--stamp-font-family);
    font-size: 0.9rem;
    color: var(--stamp-foreground-color);
    text-decoration: none;
}

@media screen and (max-width: 600px) {
    #locationStamp {
        flex-direction: column;
        gap: 0.25rem;
    }

    #seperator {
        display: none;
    }
}
</style>
