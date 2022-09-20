<template>
  <div class="mx-8">
    <h1 class="text-3xl text-yellow-700">{{ title }}</h1>

    <div v-if="error != null">
      {{ error }}
    </div>
    <div>
      <span>Sort By</span>
      <select v-model="sortOption">
        <option disabled>select sort option</option>
        <option value="name">name</option>
        <option value="point">point</option>
      </select>
    </div>
    <reward-card v-for="reward in rewards" :key="reward.id" 
            :reward="{...reward}" :url="`rewards/${reward.id}`">
    {{ reward.detail }}
    <template #total_amount>จำนวนจำกัด {{ reward.total_amount }} สิทธิ์</template>
    </reward-card>

    {{ selected }}
  </div>
</template>

<script>
import RewardCard from '@/components/rewards/RewardCard.vue'
import { useRewardStore } from '../../stores/reward'
export default {
  setup() {
    const rewardStore = useRewardStore()
    return { rewardStore }
  },
  data() {
    return {
      title: "Rewards",
      selected: null,
      rewards: null,
      error: null,
      sortOption: ''
    }
  },
  components: {
    RewardCard
  },
  watch: {
    sortOption(newOption, oldOption) {
      console.log(newOption)
      switch (newOption) {
        case 'name':
          this.rewards = this.rewardStore.sortByName
          break;
        case 'point':    
            this.rewards = this.rewardStore.sortByPoint
        default:
          this.rewards = this.rewardStore.rewards
          break;
      }
    }
  },
  methods: {
    selectReward(reward) {
      console.table(reward)
      this.$router.push(`rewards/${reward.id}`)
    }
  },
  async mounted() {
    try {
      this.error = null
      await this.rewardStore.fetch()
      this.rewards = this.rewardStore.rewards
    } catch(error) {
      console.log(error)
      this.error = error.message
    }
    
    
  }
}
</script>

<style scoped>

</style>