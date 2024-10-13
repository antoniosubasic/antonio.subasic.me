<script setup lang="ts">
import Intro from './components/Intro.vue'
import AvailabilityPill from './components/AvailabilityPill.vue'
import Taskbar from './components/Taskbar.vue'
</script>

<template>
  <AvailabilityPill :available="true" availableText="Open for Internships" unavailableText="Currently employed" />
  <Intro class="intro" forename="Antonio" surename="Subašić" />
  <p class="bio">A passionate Computer Science student specializing in software development and problem-solving, with a focus on building efficient, scalable applications and crafting innovative digital solutions.</p>
  <Taskbar
    linkedin="subasicantonio"
    github="antoniosubasic"
    email="antonio@subasic.me"
  />
</template>

<style scoped>
.intro {
  margin: 1.5rem 0;
}

@media screen and (max-height: 350px) {
  .intro {
    margin: 1rem 0;
  }
}

@media screen and (max-height: 300px) {
  .intro {
    margin: 0.65rem 0;
  }
}

.bio {
  font-size: 1.1rem;
  color: #757575;
  margin: 0 calc(1rem + 1vw * 4);
}

@media screen and (max-width: 1000px) {
  .bio {
    font-size: 1.05rem;
  }
}

@media screen and (max-width: 650px) {
  .bio {
    margin: 0 1rem;
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 425px) {
  .bio {
    margin: 0 0.25rem;
  }
}
</style>
