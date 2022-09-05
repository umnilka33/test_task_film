import Vue from 'vue'
//import {createApp} from 'vue'
import App from './App.vue'
import store from './vuex/store'
import './assets/styles/styles.scss'

Vue.config.productionTip = false;

//createApp(App).mount('#app')
/*const app = createApp({
    App
})
app.use(store)
app.mount('#app')*/
new Vue({
    render: h => h(App),
    store
}).$mount('#app')

//createApp({App, store}).mount('#app')