<script setup>
import { useQuestStore } from '../stores/questStore'

const questStore = useQuestStore()
</script>

<template>
  <div class="card stats">
    <h2>Quest Stats</h2>

    <p>Total Quests: {{ questStore.quests.length }}</p>
    <p>Active Quests: {{ questStore.activeQuests.length }}</p>
    <p>Completed Quests: {{ questStore.completedQuests.length }}</p>
    <p>Total XP: {{ questStore.totalXP }}</p>
  </div>
</template>