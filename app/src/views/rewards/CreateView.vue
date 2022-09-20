<template>
  <div class="m-8">
    <h1 class="text-3xl">Create New Reward</h1>

    <div>
      <div>
        <label for="name">Reward Name</label>
        <input type="text" v-model="reward.name">
      </div>

      <div>
        <label for="detail">Reward Detail</label>
        <textarea name="" id="" cols="30" rows="10" v-model="reward.detail"></textarea>
      </div>

      <div>
        <label for="total_amount">Total Amount</label>
        <input type="number" v-model="reward.total_amount">
      </div>

      <div>
        <label for="point">Redeemed Point</label>
        <input type="number" v-model="reward.point">
      </div>

      <div>
        <button @click="saveNewReward()"
          class="p-4 bg-green-400 border rounded">Create</button>
      </div>
    </div>

    <div class="p-4 mt-8 bg-blue-200">
      (Preview)
      <RewardCard :reward="{...reward}"></RewardCard>
      
    </div>
  </div>
</template>

<script>
import RewardCard from '@/components/rewards/RewardCard.vue'
import { useRewardStore } from '../../stores/reward'
export default {
  setup() {
    const rewardStore = useRewardStore();
    return { rewardStore }
  },
  data() {
    return {
      reward: {
        name: '',
        detail: '',
        point: 1,
        total_amount: 1
      } 
    }
  }, 
  components: {
    RewardCard
  },
  methods: {
    async saveNewReward() {
      console.log('clicked')
      try {
        this.reward.balance = this.reward.total_amount
        this.reward.is_active = true
        
        const reward_id = await this.rewardStore.add(this.reward)

        if (reward_id) {
          this.$router.push(`/rewards/${reward_id}`)
        }
      } catch(error) {
        console.log(error)
      }
    }
  }
}

</script>