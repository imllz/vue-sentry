import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'

Sentry.init({
  // dsn: 'https://26529f7459da4a9ab803cff4cf4d2000@o416729.ingest.sentry.io/5312911',
  dsn: 'http://a7b5e3e989fd4000afb54ccee606d5a8@localhost:9000/2',
  integrations: [new VueIntegration({ Vue, attachProps: true }), new Sentry.Integrations.GlobalHandlers({ onunhandledrejection: false })],
  release: '1.0.0',
  environment: 'production'
})

Sentry.configureScope(function (scope) {
  scope.setUser({ username: navigator.userAgent })
  scope.setTag('page_locale', 'de-at')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
