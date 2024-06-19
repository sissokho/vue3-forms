<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    required: true
  }
})

const model = defineModel()
</script>
<template>
  <label v-if="label">{{ label }}</label>
  <select v-model="model" v-bind="$attrs">
    <option v-for="option in options" :value="option" :key="option" :selected="option === model">
      {{ option }}
    </option>
  </select>
</template>
