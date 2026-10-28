<script setup lang="ts">
import { ABOUT_PARAGRAPHS, SOURCES } from '@/data/about'
</script>

<template>
  <section class="section" aria-labelledby="about-title">
    <h2 id="about-title">Sobre a hora legal</h2>
    <p v-for="paragraph in ABOUT_PARAGRAPHS" :key="paragraph.id">{{ paragraph.text }}</p>
    <p class="sources">{{ SOURCES }}</p>
  </section>
</template>

<style scoped>
p {
  max-width: 68ch;
  margin: 0 auto 1rem;
  line-height: 1.65;
  text-align: center;
}

.sources {
  margin-bottom: 0;
  font-weight: 700;
}
</style>
