<script setup lang="ts">
import { SITE } from '@/config/site'

defineProps<{
  dateLabel: string
}>()
</script>

<template>
  <footer class="footer">
    <p>Brasil · UTC−3</p>
    <p>{{ dateLabel }}</p>
    <p class="links">
      <a :href="SITE.links.observatorioNacional" target="_blank" rel="noopener noreferrer">
        Observatório Nacional
      </a>
      <a :href="SITE.links.usTime" target="_blank" rel="noopener noreferrer">US Time</a>
    </p>
    <p>© Relogio.cc</p>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 2.2rem;
  padding-top: 1rem;
  border-top: 1px solid #d0d0d0;
  text-align: center;
}

p {
  margin: 0.4rem 0;
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35rem 1.1rem;
}

a {
  font-weight: 700;
}
</style>
