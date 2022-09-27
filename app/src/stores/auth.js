import { defineStore } from 'pinia'
import { authAPI } from '@/services/api'

const auth_storage = {
  email: localStorage.getItem('auth.email'),
  point: localStorage.getItem('auth.point')
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      auth: {
        email: auth_storage.email,
        point: auth_storage.point
      }
    }
  },

  getters: {
    getAuth: (state) => state.auth,

    getEmail: (state) => state.auth.email,

    getPoint: (state) => state.auth.point,

    isAuthen (state) {
      return state.auth.email != null
    }
  },

  actions: {
    async login (email, password) {
      if (await authAPI.login(email, password)) {
        this.fetch()
        return true
      }
      return false
    },

    async fetch () {
      this.auth = await authAPI.me()
      localStorage.setItem('auth.email', this.auth.email)
      localStorage.setItem('auth.point', this.auth.point)
    },

    logout () {
      authAPI.logout()
      localStorage.removeItem('auth.email')
      localStorage.removeItem('auth.point')
      this.auth = {
        email: null,
        point: null
      }
    }
  }
})