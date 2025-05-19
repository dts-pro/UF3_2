<template>
  <div class="tabs">
    <div class="tab-buttons">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: index === selectedIndex }"
        @click="selectedIndex = index"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="tab-content">
      <slot :name="tabs[selectedIndex].slot"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedIndex = ref(0)
const tabs = [
  { title: 'Pestanya 1', slot: 'tab1' },
  { title: 'Pestanya 2', slot: 'tab2' }
]
</script>

<style scoped>
.tab-buttons button {
  margin-right: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}
.tab-buttons .active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
