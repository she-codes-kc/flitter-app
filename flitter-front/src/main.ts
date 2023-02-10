import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'


library.add(faMagnifyingGlass)
library.add(faWandMagicSparkles)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
