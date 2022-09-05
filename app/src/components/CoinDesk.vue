<script>
import axios from 'axios'
export default {
  data() {
    return {
      info: 'null'
    }
  },
  async mounted () {
    const coinDeskApiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    let response = await axios.get(coinDeskApiUrl)
    this.info = response.data.bpi
  }
}
</script>

<template>
  <main class="px-8">
    <h1 class="mb-2 text-3xl">Bitcoin Price Index</h1>
    <div
      v-for="currency in info"
      class="mt-4 ml-4 text-xl"
    >
      {{ currency.description }}:
      <span class="ml-4 italic">
        <span v-html="currency.symbol"></span>{{ currency.rate_float }}
      </span>
    </div>
  </main>
  
</template>