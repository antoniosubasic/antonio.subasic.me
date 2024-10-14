<script setup lang="ts">
import linkedinIcon from '@/assets/linkedin.svg';
import githubIcon from '@/assets/github.svg';
import emailIcon from '@/assets/email.svg';

defineProps<{
  linkedin: string,
  github: string,
  email: string,
}>();
</script>

<template>
  <div class="wrapper">
    <div class="taskbar">
      <a :href="`https://www.linkedin.com/in/${linkedin}`" target="_blank" rel="noopener">
        <img :src="linkedinIcon" alt="LinkedIn" />
      </a>
      <a :href="`https://github.com/${github}`" target="_blank" rel="noopener">
        <img :src="githubIcon" alt="GitHub" />
      </a>
      <a :href="`mailto:${email}`">
        <img :src="emailIcon" alt="E-Mail" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  bottom: 3.75%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.taskbar {
  display: flex;
  gap: 2rem;
  padding: 12px;
  border-radius: 15px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
}

.taskbar a {
  display: flex;
  justify-content: center;
}

.taskbar img {
  width: 30px;
  height: 30px;
  object-fit: cover;
}

@media (prefers-color-scheme: dark) {
  .taskbar {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15);
  }

  .taskbar img {
    filter: invert(1);
  }
}

@media screen and (max-height: 575px), screen and (max-width: 500px) {
  .taskbar {
    border-radius: 10px;
    padding: 9px;
  }

  .taskbar img {
    width: 25px;
    height: 25px;
  }
}

@media screen and (max-height: 490px) {
  .wrapper {
    display: none;
  }
}
</style>
