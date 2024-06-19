<script setup>
import UniqueID from '@/features/UniqueID'

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
const uuid = UniqueID().getID()
</script>

<template>
  <input type="radio" :for="uuid" v-model="model" :value="value" v-bind="$attrs" />
  <label v-if="label" :id="uuid">{{ label }}</label>
</template>
