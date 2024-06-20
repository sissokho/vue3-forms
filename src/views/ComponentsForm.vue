<script setup>
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const categories = ref([
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community'
])

const { value: category } = useField('category')
const { value: title } = useField('title')
const { value: description } = useField('description')
const { value: location } = useField('location')
const { value: pets } = useField('pets')
const { value: catering } = useField('catering')
const { value: music } = useField('music')

const petOptions = ref([
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 }
])

const validationSchema = {
  category: required,
  title: (value) => {
    const req = required(value)
    if (req !== true) return req

    const min = minLength(3, value)
    if (min !== true) return min

    return true
  },
  description: required,
  location: undefined,
  pets: anything,
  catering: anything,
  music: anything
}

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    pets: 1,
    catering: false,
    music: false
  }
})

function submit() {
  handleSubmit((values) => {
    console.log('submit', values)
  })
}

function required(value) {
  const requiredMessage = 'This field is required'
  if (value === undefined || value === null) return requiredMessage

  if (!String(value).length) return requiredMessage

  return true
}

function minLength(number, value) {
  if (String(value).length < number) return 'Please type at least ' + number + ' characters'

  return true
}

function anything() {
  return true
}
</script>

<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="submit">
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="category"
        :error="errors.category"
      />

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput v-model="title" label="Title" type="text" :error="errors.title" />

        <BaseInput
          v-model="description"
          label="Description"
          type="text"
          :error="errors.description"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput v-model="location" label="Location" type="text" :error="errors.location" />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>

        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup name="pets" v-model="pets" :options="petOptions" :error="errors.pets" />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox label="Catering" v-model="catering" :error="errors.catering" />
        </div>
      </fieldset>

      <div>
        <BaseCheckbox label="Live music" v-model="music" :error="errors.music" />
      </div>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </div>
</template>

<style>
legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
</style>
