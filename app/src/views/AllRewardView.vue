<template>
  <div class="max-w-3xl mx-auto">
    <h1>Reward</h1>
    <div>
      <div
        v-for="reward in rewards"
        :key="reward.id"
        class="p-4 m-4 rounded-full bg-slate-50 hover:bg-slate-100"
        v-on:click="selectReward(reward)"
      >
        <p>{{ reward.name }}</p>
      </div>
      <div v-if="selected" class="p-4 m-4">
        <p>slected:</p>
        <p class="text-xl">
          {{selected.name}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      rewards: [
        {
          id: 0,
          name: "Reward 1",
        },
        {
          id: 1,
          name: "Reward 2",
        },
        {
          id: 2,
          name: "Reward 3",
        },
        {
          id: 3,
          name: "Reward 4",
        },
      ],
    };
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