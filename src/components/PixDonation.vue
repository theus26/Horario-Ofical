<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { SITE } from '@/config/site'

const copied = ref(false)
const copyFailed = ref(false)
let resetTimer = 0

async function copyPixKey(): Promise<void> {
  copyFailed.value = false

  try {
    await navigator.clipboard.writeText(SITE.pixKey)
    copied.value = true
    window.clearTimeout(resetTimer)
    resetTimer = window.setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    copied.value = false
    copyFailed.value = true
  }
}

onUnmounted(() => {
  window.clearTimeout(resetTimer)
})
</script>

<template>
  <section class="section donation" aria-labelledby="donation-title">
    <hr class="rule" />
    <h2 id="donation-title">Quer ajudar a manter o site?</h2>
    <p>Qualquer valor pelo PIX ajuda. A chave é o e-mail abaixo.</p>
    <p class="pix-key">{{ SITE.pixKey }}</p>

    <div class="actions">
      <button type="button" class="action" @click="copyPixKey">Copiar chave</button>
      <router-link class="action" to="/qrCode">Doar com QR Code</router-link>
    </div>

    <p v-if="copied" class="feedback" role="status">Chave copiada.</p>
    <p v-else-if="copyFailed" class="feedback" role="status">
      Não foi possível copiar. Selecione a chave manualmente.
    </p>
    <p class="thanks">Muito obrigado.</p>
  </section>
</template>

<style scoped>
.donation {
  text-align: center;
}

p {
  margin: 0;
}

.pix-key {
  margin: 0.85rem 0 1rem;
  font-family: Consolas, "Courier New", monospace;
  font-size: 1.15rem;
  font-weight: 700;
  user-select: all;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.55rem 1.05rem;
  border: 1px solid #000000;
  border-radius: 12px;
  background: #ffffff;
  color: #000000;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.action:hover {
  background: #000000;
  color: #ffffff;
}

.feedback,
.thanks {
  margin-top: 0.9rem;
}

.thanks {
  font-weight: 700;
}
</style>
