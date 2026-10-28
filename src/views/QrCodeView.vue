<script setup lang="ts">
import { onMounted, ref } from 'vue'
import QRCode from 'qrcode'
import { SITE } from '@/config/site'

const imageSrc = ref('')
const hasError = ref(false)

onMounted(async () => {
  try {
    imageSrc.value = await QRCode.toDataURL(SITE.pixKey, {
      errorCorrectionLevel: 'M',
      margin: 1,
      width: 360,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    })
  } catch {
    hasError.value = true
  }
})
</script>

<template>
  <article class="qr-page">
    <p class="back">
      <router-link to="/">Voltar ao relógio</router-link>
    </p>
    <h1>Doação por QR Code</h1>
    <p class="lead">O código abaixo contém a chave PIX. Se o aplicativo do banco não reconhecer, copie o e-mail.</p>

    <p v-if="!imageSrc && !hasError" class="lead">Gerando QR Code…</p>
    <img v-else-if="imageSrc" class="code" :src="imageSrc" width="360" height="360" alt="QR Code da chave PIX" />
    <p v-else class="lead" role="alert">Não foi possível gerar o QR Code. Use a chave escrita abaixo.</p>

    <p class="key">{{ SITE.pixKey }}</p>
  </article>
</template>

<style scoped>
.qr-page {
  text-align: center;
}

.back {
  margin: 0 0 1.5rem;
  font-weight: 700;
  text-align: left;
}

h1 {
  margin-top: 0;
}

.lead {
  max-width: 42ch;
  margin: 0.85rem auto 0;
}

.code {
  display: block;
  width: min(100%, 360px);
  margin: 1.25rem auto 0;
  border: 1px solid #c0c0c0;
  border-radius: 18px;
  background: #ffffff;
}

.key {
  margin: 1rem 0 0;
  font-family: Consolas, "Courier New", monospace;
  font-size: 1.15rem;
  font-weight: 700;
  user-select: all;
}
</style>
