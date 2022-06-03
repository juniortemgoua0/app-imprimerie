import { createApp } from 'vue'
import routes from './routes';
import JwPagination from 'jw-vue-pagination';
import App from './App.vue'
import './style.css';


createApp(App).use(routes).use('jw-pagination', JwPagination).mount('#app')
