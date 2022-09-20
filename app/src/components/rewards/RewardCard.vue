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
    
    <router-link v-if="url != ''" :to="url">Detail</router-link>
    
    <span class="underline " 
          :class="url == '' ? 'cursor-auto': 'cursor-pointer my-color'"
          @click="onClickButton()">Detail</span>
    <button @click="onClickButton()"
     class="p-2 bg-blue-200 border-2 border-blue-400 rounded-xl">
      Redeem
    </button>

    <button @click="onClickLike()"
     class="p-2 bg-yellow-200 border-2 border-blue-400 rounded-xl">
      {{ likeCount }} Likes
    </button>

    <button @click="onClickCounter()"
     class="p-2 bg-yellow-200 border-2 border-blue-400 rounded-xl">
      {{ counterStore.counter }} Counts
    </button>
  </div>
</template>

<script>
import { useCounterStore } from '../../stores/counter';

export default {
  setup() {
    const counterStore = useCounterStore()
    return { counterStore }
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
    onClickButton() {
      if (this.url != '') {
        this.$router.push(this.url)
      }
    },
    onClickCounter() {
      this.counterStore.increment()
      // this.counterStore.counter++
    }
  }
}
</script>

<style scoped>
  .my-color {
    @apply text-orange-500 text-lg;
  }
</style>