import { createApp } from 'vue'
import './assets/reset.less'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.less'
import 'lib-flexible'
import App from './App.vue'

createApp(App).use(ElementPlus).use(Vant).mount('#app')
