import { defineStore } from 'pinia'

export const useQuestStore = defineStore('questStore', {
  state: () => ({
    quests: [
      { id: 1, title: 'Drink water', difficulty: 'Easy', completed: false },
      { id: 2, title: 'Study for 30 minutes', difficulty: 'Medium', completed: false },
      { id: 3, title: 'Clean desk area', difficulty: 'Easy', completed: true }
    ]
  }),

  getters: {
    completedQuests: (state) => state.quests.filter(q => q.completed),
    activeQuests: (state) => state.quests.filter(q => !q.completed),
    totalXP: (state) => {
      return state.quests
        .filter(q => q.completed)
        .reduce((xp, quest) => {
          if (quest.difficulty === 'Easy') return xp + 10
          if (quest.difficulty === 'Medium') return xp + 20
          return xp + 30
        }, 0)
    }
  },

  actions: {
    addQuest(title, difficulty) {
      this.quests.push({
        id: Date.now(),
        title,
        difficulty,
        completed: false
      })
    },

    toggleQuest(id) {
      const quest = this.quests.find(q => q.id === id)
      if (quest) {
        quest.completed = !quest.completed
      }
    },

    deleteQuest(id) {
      this.quests = this.quests.filter(q => q.id !== id)
    }
  }
})