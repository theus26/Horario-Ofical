<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import OfficialClock from '@/components/OfficialClock.vue'
import PixDonation from '@/components/PixDonation.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import TimeZoneSection from '@/components/TimeZoneSection.vue'
import { useBrasiliaClock } from '@/composables/useBrasiliaClock'

const { timeLabel, dateLabel, dateTime, syncState } = useBrasiliaClock()
</script>

<template>
  <article>
    <header class="intro">
      <p class="kicker">Brasil · UTC−3</p>
      <h1>Hora oficial de Brasília</h1>
      <p class="tagline">Acerte seu relógio com o horário de Brasília, a hora oficial do Brasil.</p>
    </header>

    <OfficialClock
      :time-label="timeLabel"
      :date-label="dateLabel"
      :date-time="dateTime"
      :sync-state="syncState"
    />
    <TimeZoneSection />
    <AboutSection />
    <PixDonation />
    <SiteFooter :date-label="dateLabel" />
  </article>
</template>

<style scoped>
.intro {
  text-align: center;
}

.kicker,
.tagline {
  margin: 0;
}

.kicker {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.tagline {
  margin-top: 0.45rem;
  font-size: 1.02rem;
}
</style>
