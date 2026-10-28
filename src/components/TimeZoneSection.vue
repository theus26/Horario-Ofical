<script setup lang="ts">
import { TIME_ZONE_GROUPS, UTC_EXPLANATION } from '@/data/timeZones'
</script>

<template>
  <section class="section" aria-labelledby="zones-title">
    <h2 id="zones-title">Fusos horários do Brasil</h2>
    <p class="lead">
      O horário de Brasília é a referência. Os outros fusos do país aparecem como diferença em relação a ele.
    </p>

    <dl class="zone-list">
      <div
        v-for="group in TIME_ZONE_GROUPS"
        :key="group.id"
        class="zone-card"
        :class="{ 'zone-card--wide': group.wide }"
      >
        <dt>
          <span class="offset">{{ group.utcLabel }}</span>
          {{ group.title }}
        </dt>
        <dd>{{ group.places }}</dd>
        <dd v-if="group.note" class="note">{{ group.note }}</dd>
      </div>
    </dl>

    <p class="explanation">{{ UTC_EXPLANATION }}</p>
  </section>
</template>

<style scoped>
.lead,
.explanation,
dd {
  margin: 0;
}

.lead,
.explanation {
  text-align: center;
}

.zone-list {
  display: grid;
  gap: 0.85rem;
  margin: 1.25rem 0 0;
}

.zone-card {
  margin: 0;
  padding: 1rem 1.05rem 1.1rem;
  border: 1px solid #c8c8c8;
  border-radius: 16px;
  background: #ffffff;
  text-align: left;
}

.zone-card dt {
  margin-bottom: 0.45rem;
  font-weight: 700;
}

.offset {
  display: block;
  margin-bottom: 0.15rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.note {
  margin-top: 0.65rem;
}

.explanation {
  max-width: 68ch;
  margin: 1rem auto 0;
  line-height: 1.65;
}

@media (min-width: 800px) {
  .zone-list {
    grid-template-columns: 1fr 1fr;
  }

  .zone-card--wide {
    grid-column: 1 / -1;
  }
}
</style>
