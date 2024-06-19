<script setup>
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import axios from 'axios'
import { reactive, ref } from 'vue'

const categories = ref([
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community'
])

const event = reactive({
  category: '',
  title: '',
  description: '',
  location: '',
  pets: 1,
  extras: {
    catering: false,
    music: false
  }
})

const petOptions = ref([
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 }
])

function sendForm() {
  axios
    .post('http://localhost:3000/events', event)
    .then((response) => {
      console.log('Response', response)
    })
    .catch((error) => {
      console.log('Error', error)
    })
}
</script>

<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect label="Select a category" :options="categories" v-model="event.category" />

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput
          v-model="event.title"
          label="Title"
          type="text"
          error="This input has an error!"
        />

        <BaseInput v-model="event.description" label="Description" type="text" />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput v-model="event.location" label="Location" type="text" />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>

        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup name="pets" v-model="event.pets" :options="petOptions" />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox label="Catering" v-model="event.extras.catering" />
        </div>
      </fieldset>

      <div>
        <BaseCheckbox label="Live music" v-model="event.extras.music" />
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
