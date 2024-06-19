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
  <label>{{ label }}</label>
  <input v-model="model" :placeholder="label" class="field" v-bind="$attrs" />
</template>
