<template>
  <button
    :class="`${btnType === 'success' && 'bg-green-500 hover:bg-green-700'} ${
      btnType === 'warning' && 'bg-yellow-600 hover:bg-yellow-800'
    } ${btnType === 'info' && 'bg-sky-600 hover:bg-sky-800'} transition-all text-white rounded`"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  btnType: "success" | "warning" | "info";
}>();
</script>
