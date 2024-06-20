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
  <select
    :id="uuid"
    v-model="model"
    v-bind="$attrs"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
    <option v-for="option in options" :value="option" :key="option" :selected="option === model">
      {{ option }}
    </option>
  </select>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">{{ error }}</BaseErrorMessage>
</template>
