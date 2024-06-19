<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
})

const model = defineModel()
</script>
<template>
  <input type="checkbox" v-model="model" class="field" />
  <label v-if="label">{{ label }}</label>
</template>
