<template>
    <div id="profileCard">
        <img
            src="https://avatars.githubusercontent.com/u/96651154"
            alt="Profile Picture"
        />
        <h1>{{ name }}</h1>
        <h2>{{ occupation }}</h2>
        <div id="socials">
            <div id="github">
                <a :href="'https://github.com/' + github">
                    <img :src="githubIcon" alt="GitHub" />
                </a>
            </div>
            <div id="email">
                <a
                    :href="'mailto:' + email"
                    @click.prevent="copyToClipboard(email)"
                >
                    <img :src="emailIcon" alt="Email" />
                </a>
                <transition name="fade">
                    <div v-if="showCopyMessage" id="copyMessage">
                        <img :src="checkmarkIcon" alt="Checkmark" />
                        <span>copied</span>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import githubIcon from "@/assets/github.svg";
import emailIcon from "@/assets/email.png";
import checkmarkIcon from "@/assets/checkmark.png";

export default {
    name: "ProfileCard",
    props: {
        name: String,
        occupation: String,
        github: String,
        email: String,
    },
    data() {
        return {
            githubIcon,
            emailIcon,
            checkmarkIcon,
            showCopyMessage: false,
        };
    },
    methods: {
        async copyToClipboard(text) {
            await navigator.clipboard.writeText(text);
            this.showCopyMessage = true;
            setTimeout(() => {
                this.showCopyMessage = false;
            }, 2500);
        },
    },
};
</script>

<style scoped>
#profileCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

img[alt="Profile Picture"] {
    height: 7.5rem;
    border-radius: 100%;
}

h1 {
    font-size: 1.5rem;
    font-weight: normal;
    margin: 1.5rem 0 0.6rem 0;
}

h2 {
    color: #a0a0a0;
    font-size: 1.25rem;
    font-weight: normal;
    margin: 0;
}

#socials {
    margin: 2rem 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

#socials > div,
#socials > div > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
}

#socials img {
    height: 100%;
    width: 100%;
}

#github > a > img {
    filter: invert(0.5);
}

#email > a > img {
    filter: invert(0.45);
}

#copyMessage {
    font-size: 0.75rem;
    background-color: #2f2f2f;
    margin-top: 3.5rem;
    padding: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 0.25rem;
    border-radius: 0.25rem;
    transition: opacity 0.3s ease;
}

#copyMessage img {
    width: 0.75rem;
    filter: invert(0.9);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
