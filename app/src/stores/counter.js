import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    getCounter: (state) => state.counter
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
