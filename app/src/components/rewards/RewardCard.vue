<template>
  <div class="block p-2 mt-4 border-2 border-blue-700 rounded">
    <h3 class="text-xl">{{ reward.name }}</h3>
    <p class="text-4xl">{{ reward.point }} point</p>

    <div class="text-xl">
      <slot name="total_amount"></slot>
    </div>

    <div class="">
      <slot></slot>
    </div>

    <div class="grid grid-cols-2">
      <button @click="onClickButton()"
      class="p-2 mx-4 bg-blue-200 border-2 border-blue-400 rounded-xl">
        Redeem
      </button>
      <div class="grid grid-cols-2">
        <button @click="onClickLike()"
        class="p-2 mx-4 bg-yellow-200 border-2 border-blue-400 rounded-xl">
          {{ likeCount }} Likes
        </button>

        <button @click="onClickCounter()"
        class="p-2 mx-8 bg-green-200 border-2 border-blue-400 rounded-xl">
          {{ counter_store.counter }} |
          {{ counter_store.doubleCount }}
        </button> 
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter.js'
export default {
  setup() {
    const counter_store = useCounterStore()
    return { counter_store }
  },
  data() {
    return {
      likeCount: 0
    }
  },
  props: {
    reward: Object,
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickLike() {
      this.likeCount++;
    },
    onClickCounter() {
      this.counter_store.increment()
    },
    onClickButton() {
      if (this.url != '') {
        this.$router.push(this.url)
      }
    }
  }
}
</script>

<style scoped>
  .my-color {
    @apply text-orange-500 text-lg;
  }
</style>