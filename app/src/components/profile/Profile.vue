<template>
  <div v-if="auth && auth.email">
    Welcome, {{ auth.email }} [{{ auth.point }} Point] | 

    <router-link to="/logout">Logout</router-link>
  </div>

  <div v-else>
    <router-link to="/login">Please Login</router-link>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth.js'

export default {
  setup() {
    const auth_store = useAuthStore()
    return { auth_store }
  },
  data() {
    return {
      auth: null
    }
  },
  watch: {
      auth_store: {
          immediate: true,
          deep: true,
          handler(newValue, oldValue) {
            console.log(newValue.getAuth)
            this.auth = this.auth_store.getAuth
          }
      }
  },
  mounted() {
    if (this.auth_store.isAuthen) {
      this.auth = this.auth_store.getAuth
    } else {
      this.auth = null
    }
    
  }
}
</script>