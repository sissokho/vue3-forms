<script setup>
defineProps({
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  }
})
</script>
<template>
  <p :id="id" class="errorMessage" aria-live="assertive">
    <slot />
  </p>
</template>
