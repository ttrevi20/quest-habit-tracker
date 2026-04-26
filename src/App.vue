<script setup>
import QuestForm from './components/QuestForm.vue'
import QuestList from './components/QuestList.vue'
import QuestStats from './components/QuestStats.vue'
</script>

<template>
  <main>
    <h1>Quest Habit Tracker</h1>
    <p class="subtitle">Turn your daily habits into little game quests.</p>

    <QuestStats />
    <QuestForm />
    <QuestList />
  </main>
</template>