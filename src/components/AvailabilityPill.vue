<script setup lang="ts">
defineProps<{
  available: boolean,
  availableText: string,
  unavailableText: string,
}>();
</script>

<template>
  <div class="pill" :class="available ? 'available' : 'unavailable'">
    <div class="dot" :class="available ? 'available' : 'unavailable'"></div>
    <span>{{ available ? availableText : unavailableText }}</span>
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
}

.pill.available {
  background-color: #f2fff0;
  color: #00a605;
}

.pill.unavailable {
  background-color: #fff0f0;
  color: #d8000c;
}

.dot {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 100%;
}

.dot.available {
  background-color: #048608;
}

.dot.unavailable {
  background-color: #a60005;
}
</style>