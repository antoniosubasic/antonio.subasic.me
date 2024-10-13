<script setup lang="ts">
defineProps<{ forename: string, surename: string }>()
</script>

<template>
  <h1>
    I'm {{ forename }}, computer science student based in <span>Austria</span>
  </h1>
</template>

<style scoped>
h1,
span {
  font-size: 3.5rem;
  font-weight: 525;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  padding: 0;
  margin: 0;
}

span {
  background: var(--linear-gradient);
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media screen and (max-width: 1400px) {
  h1, span {
    font-size: 3rem;
    font-weight: 550;
  }
}

@media screen and (max-width: 1000px) {
  h1,
  span {
    font-size: 2.75rem;
  }
}

@media screen and (max-width: 650px) {
  h1,
  span {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 500px) {
  h1,
  span {
    font-size: 2.25rem;
  }
}
</style>
