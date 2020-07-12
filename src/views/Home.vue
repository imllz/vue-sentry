<template>
  <div class="home">
    <button @click="handleClick">fetch</button>
    <button @click="promiseError">promiseError</button>
    <button @click="consoleError">consoleError</button>
    <button @click="sendSentryEvent">sendSentryEvent</button>
  </div>
</template>

<script>
import axios from 'axios'
import sendSentryEvent from '@/helpers/sentryEvent'

export default {
  name: 'Home',
  methods: {
    handleClick () {
      axios.get('/api/test', { timeout: 200 })
    },
    promiseError () {
      Promise.reject(new Error('promiseError'))
    },
    consoleError () {
      console.error('consoleError')
      console.info('consoleError')
    },
    sendSentryEvent () {
      sendSentryEvent()
    }
  }
}
</script>
