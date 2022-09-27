import { defineStore } from 'pinia'
import { rewardAPI } from '@/services/api.js'

export const useRewardStore = defineStore({
  id: 'reward',
  state: () => {
    return {
      rewards: []
    }
  },
  getters: {
    getRewards: (state) => state.rewards,

    sortByPoint (state) {
      const sortable = [...state.rewards]
      return sortable.sort((a, b) => {
        return a.point - b.point
      })
    },

    sortByName (state) {
      const sortable = [...state.rewards]
      return sortable.sort((a, b) => {
        return (a.name).localeCompare(b.name)
      })
    }
  },
  actions: {
    async fetch () {
      this.rewards = await rewardAPI.getAll()
    },

    async add (reward) {
      const response = await rewardAPI.saveNew(reward)
      if (response.success) {
        this.rewards.push({
          ...reward
        })
        return response.reward_id
      }
      return false
    },

    delete (id) {
      this.rewards = this.rewards.filter(reward => reward.id != id)
    }
  }
})

