<script setup>
import UniqueID from '@/features/UniqueID'
import BaseErrorMessage from './BaseErrorMessage.vue'

defineProps({
  label: {
    type: String,
    default: ''
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
  <input type="checkbox" :id="uuid" v-model="model" class="field" />
  <label v-if="label" :for="uuid">{{ label }}</label>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">{{ error }}</BaseErrorMessage>
</template>
