import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import "bootstrap/dist/css/bootstrap.css"
import "animate.css/animate.min.css"
import "fontsource-montserrat";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
createApp(App).use(bootstrap).use(router).mount('#app')
