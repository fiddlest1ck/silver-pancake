import Vue from 'vue';
import Vuetify from 'vuetify';

import App from '@/App.vue';
import store from '@/store';

import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
const vuetifyOptions = {};
Vue.use(Vuetify);
Vue.filter('truncate', (str='', len=0) => {
    return str.substr(0, len) + (len < str.length ? '...' : '');
});


new Vue({
    store,
    vuetify: new Vuetify(vuetifyOptions),
    render: h => h(App)
}).$mount('#app');
