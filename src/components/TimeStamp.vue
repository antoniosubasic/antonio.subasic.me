<template>
    <div id="timeStamp" ref="timeStamp">
        {{ currentTime }}
    </div>
</template>

<script>
import { animate } from "@/utils/animate.js";

export default {
    name: "TimeStamp",
    data() {
        return {
            currentTime: this.getCurrentTime(),
        };
    },
    methods: {
        getCurrentTime() {
            return new Date().toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            });
        },
    },
    mounted() {
        animate(this.$refs.timeStamp, this.currentTime);
        setInterval(() => {
            this.currentTime = this.getCurrentTime();
        }, 1000);
    },
};
</script>

<style scoped>
#timeStamp {
    font-size: 0.9rem;
    font-family: var(--stamp-font-family);
    color: var(--stamp-foreground-color);
}
</style>
