<template>
  <div class="max-w-3xl mx-auto">
    <h1>Reward</h1>
    <div>
      <div v-if="error">
        <p>{{ error }}</p>
      </div>
      <TransitionGroup>
        <div
          v-for="reward in rewards"
          :key="reward.id"
          class="
            p-4
            m-4
            rounded-full
            bg-slate-50
            hover:bg-slate-100
            border border-slate-200
          "
          v-on:click="selectReward(reward)"
        >
          <p>{{ reward.name }}</p>
          <RouterLink :to="`/rewards/${reward.id}`">
            <div>
              learn more
            </div>
          </RouterLink>
        </div>
      </TransitionGroup>
        <div v-if="selected" class="p-4 m-4">
          <p>slected:</p>
          <p class="text-xl">
            {{ selected.name }}
          </p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selected: null,
      rewards: [],
      error: null,
    };
  },
  async mounted() {
    const url = "http://localhost/api/rewards";
    // const response = axios.get(url).then((val) => {
    //   this.rewards = val.data.data;
    //   console.log(val)
    // });
    try {
      const response = await axios.get(url);
      this.rewards = response.data.data;
    } catch (e) {
      this.error = e.message;
    }
  },
  methods: {
    selectReward(reward) {
      if (this.selected == reward) {
        this.selected = null;
      } else {
        this.selected = reward;
      }
    },
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>