<script setup lang="ts">
defineProps<{ forename: string, surename: string }>()
</script>

<template>
  <div>
    <h1>{{ forename }}</h1>
    <h1>{{ surename }}</h1>
  </div>
  <p>Computer Science Student <br> based in Austria</p>
</template>

<style scoped>
h1,
p {
  padding: 0;
  margin: 0;
}

div {
  margin-bottom: 2rem;
}

h1 {
  text-transform: uppercase;
  line-height: 1.075;
}

p {
  word-spacing: 0.1rem;
  line-height: 1.2;
  font-size: 1.85rem;
  font-weight: bold;
  background: linear-gradient(114deg, rgb(97, 100, 234) 8%, rgb(250, 126, 107) 94%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  backdrop-filter: blur(10px);
}
</style>
