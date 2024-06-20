<script setup>
import UniqueID from '@/features/UniqueID'
import BaseErrorMessage from '@/components/BaseErrorMessage.vue'

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
  <label v-if="label" :for="uuid">{{ label }}</label>
  <input
    v-model="model"
    class="field"
    :id="uuid"
    v-bind="$attrs"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  />

  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">{{ error }}</BaseErrorMessage>
</template>
