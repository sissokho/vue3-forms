<script setup>
import UniqueID from '@/features/UniqueID'
import BaseErrorMessage from './BaseErrorMessage.vue'

defineProps({
  label: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number],
    required: true
  },
  error: {
    type: String,
    default: ''
  }
})

const model = defineModel()
const uuid = UniqueID().getID()
</script>

<template>
  <input type="radio" :for="uuid" v-model="model" :value="value" v-bind="$attrs" />
  <label v-if="label" :id="uuid">{{ label }}</label>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">{{ error }}</BaseErrorMessage>
</template>
