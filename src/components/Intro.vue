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
  background: linear-gradient(74deg, #4285f4 0, #9b72cb 9%, #d96570 20%, #d96570 24%, #9b72cb 35%, #4285f4 44%, #9b72cb 50%, #d96570 56%, #131314 75%, #131314 100%);
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
