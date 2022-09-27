<template>
  <div class="mx-8">
    <button @click="sayHello()">
      Hello
    </button>
    <input type="text" v-model="message">
    <button @click="sendMessage()">Send</button>

    <div>
      <ul>
        <li v-for="(message, i) in messages" :key="i">
          {{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SocketioService from '@/services/socketio.js'
export default {
  created() {
    SocketioService.setupSocketConnection()
		SocketioService.getSocket().on('chatroom', this.listenChatroom)
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  data() {
    return {
      message: '',
      messages: []
    }
  },
  methods: {
		sayHello() {
      SocketioService.sendToServer('hello.message', {message: "Hello"})
    },
    listenChatroom(data) {
      this.messages.push(data)
    },
    sendMessage() {
      SocketioService.sendToServer('hello.message', this.message)
    }
  }
}
</script>