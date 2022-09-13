<template lang="">
  <div class="max-w-xl">
    <h1>Reward Tittle</h1>
    <p>
      {{$route.params.id}}
    </p>
    <p>
      {{$route.query}}
    </p>
    <p>
      {{reward}}
    </p>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return{
    reward: null,
    error: null
  }
  },
  async created() {
    const id = this.$route.params.id;
    const url = `http://localhost/api/rewards/${id}`
    try {
      const response = await axios.get(url);
      if (response.status == 200) {
        this.reward = response.data.data;
      }
    } catch (e) {
      this.error = e.message
      console.log(this.error)
    }
  }
}
</script>
<style lang="">
  
</style>