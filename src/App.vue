<script setup lang="ts">
import Intro from './components/Intro.vue'
import Pill from './components/Pill.vue'
</script>

<template>
  <Pill text="Open for Internships" />
  <Intro class="intro" forename="Antonio" surename="Subašić" />
  <p class="bio">A passionate Computer Science student specializing in software development and problem-solving, with a focus on building efficient, scalable applications and crafting innovative digital solutions.</p>
</template>

<style scoped>
.intro {
  margin: 1.5rem 0;
}

.bio {
  font-size: 1.1rem;
  color: #757575;
}

@media screen and (max-width: 1000px) {
  .bio {
    font-size: 1.05rem;
  }
}

@media screen and (max-width: 500px) {
  .bio {
    font-size: 1rem;
  }
}
</style>
