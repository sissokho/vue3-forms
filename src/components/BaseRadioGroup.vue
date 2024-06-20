<script setup>
import BaseRadio from '@/components/BaseRadio.vue'

defineProps({
  options: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  vertical: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  }
})

const model = defineModel()
</script>

<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{ horizontal: !vertical }"
  >
    <BaseRadio :label="option.label" :value="option.value" :name="name" v-model="model" />
  </component>
</template>

<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>
