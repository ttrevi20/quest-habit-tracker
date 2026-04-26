<script setup>
import { useQuestStore } from '../stores/questStore'

const questStore = useQuestStore()
</script>

<template>
  <div class="card">
    <h2>Your Quests</h2>

    <div v-for="quest in questStore.quests" :key="quest.id" class="quest">
      <div>
        <strong :class="{ done: quest.completed }">{{ quest.title }}</strong>
        <p>{{ quest.difficulty }}</p>
      </div>

      <button @click="questStore.toggleQuest(quest.id)">
        {{ quest.completed ? 'Undo' : 'Complete' }}
      </button>

      <button class="delete" @click="questStore.deleteQuest(quest.id)">
        Delete
      </button>
    </div>
  </div>
</template>