import { defineStore } from "pinia";
import { rewardAPI } from "../service/api";

export const useRewardStore = defineStore({
  id: 'rewards',
  state: () => {
    rewards: []
  },
  getters: {
    getRewards: (state) => state.rewards,
    sortByName (state) {
      const sortable = [...state.rewards]
      return sortable.sort(
        (a, b) => a.name.localeCompare(b.name))
    },
    sortByPoint (state) {
      return state.rewards.sort((a, b) => a.point - b.point)
    }
  },
  actions: {
    async fetch () {
      this.rewards = await rewardAPI.getAll()
    },
    async add (reward) {
      const response = await rewardAPI.saveNew(
        reward
      )
      if (response.success) {
        this.rewards.push({
          ...reward
        })
        return response.reward_id
      }
      return false
    },
    delete (id) {
      this.rewards = this.rewards.filter(reward => reward != id)
    }
  }
})