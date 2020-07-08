import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'

Sentry.init({
  dsn: 'https://26529f7459da4a9ab803cff4cf4d2000@o416729.ingest.sentry.io/5312911',
  integrations: [new VueIntegration({ Vue, attachProps: true })],
  release: '1.0.3',
  environment: 'production'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
