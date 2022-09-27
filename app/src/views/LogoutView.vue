<template>
  <h1>Logout</h1>
</template>

<script>
import { useAuthStore } from '@/stores/auth.js'

export default {
  setup() {
    const auth_store = useAuthStore()
    return { auth_store }
  },
  mounted() {
    this.auth_store.logout()
    this.$router.push('/')

  }  
}
</script>