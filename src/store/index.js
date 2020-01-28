import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart.js';
import product from './modules/product.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart,
    product
  },
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
