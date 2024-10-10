<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <div class="pill">
    <div class="dot"></div>
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 350;
  user-select: none;
  background-color: #f2fff0;
  color: #00a605;
}


.dot {
  display: inline-block;
  width: 0.55rem;
  height: 0.55rem;
  margin-right: 0.5rem;
  border-radius: 100%;
  background-color: #048608;
}
</style>