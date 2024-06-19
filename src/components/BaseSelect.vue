<script setup>
import UniqueID from '@/features/UniqueID'

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
const uuid = UniqueID().getID()
</script>
<template>
  <label v-if="label" :for="uuid">{{ label }}</label>
  <select :id="uuid" v-model="model" v-bind="$attrs">
    <option v-for="option in options" :value="option" :key="option" :selected="option === model">
      {{ option }}
    </option>
  </select>
</template>
