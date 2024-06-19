<script setup>
import UniqueID from '@/features/UniqueID'

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
  <label :for="uuid">{{ label }}</label>
  <input
    v-model="model"
    :placeholder="label"
    class="field"
    :id="uuid"
    v-bind="$attrs"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  />
  <p v-if="error" :id="`${uuid}-error`" class="errorMessage" aria-live="assertive">{{ error }}</p>
</template>
