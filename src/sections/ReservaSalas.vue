<script lang="ts" setup>
import { ref } from "vue"
const date = ref(Date.now())
</script>

<template>
    <div class="q-pa-md">
    <q-date
      v-model="date"
      landscape
    />
  </div>
</template>
