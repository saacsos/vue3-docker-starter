import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:4000')
  }

  disconnect() {
    if (this.socket) {
        this.socket.disconnect()
    }
  }

	sendToServer (event, data) {
    this.socket.emit(event, data)
  }

  getSocket () {
    return this.socket
  }
}

export default new SocketioService();