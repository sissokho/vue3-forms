<script setup>
import UniqueID from '@/features/UniqueID'

defineProps({
  label: {
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
</template>
