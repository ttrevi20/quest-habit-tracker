<script setup>
import { ref } from 'vue'
import { useQuestStore } from '../stores/questStore'

const questStore = useQuestStore()
const title = ref('')
const difficulty = ref('Easy')

function submitQuest() {
  if (title.value.trim() === '') return

  questStore.addQuest(title.value, difficulty.value)
  title.value = ''
  difficulty.value = 'Easy'
}
</script>

<template>
  <div class="card">
    <h2>Add New Quest</h2>

    <input v-model="title" placeholder="Enter a habit or task" />

    <select v-model="difficulty">
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>

    <button @click="submitQuest">Add Quest</button>
  </div>
</template>