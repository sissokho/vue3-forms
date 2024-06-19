<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number],
    required: true
  }
})

const model = defineModel()
</script>

<template>
  <input type="radio" v-model="model" :value="value" v-bind="$attrs" />
  <label v-if="label">{{ label }}</label>
</template>
