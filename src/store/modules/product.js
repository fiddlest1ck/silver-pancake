const state = {
    product: {},
    products: [],
    count: 0,
    value: 0
  };
  
const getters = {
  getProduct(state) {
    return state.product;
  },
  getProducts(state) {
    return state.products;
  },
  getProductsCount(state) {
    return state.count;
  },
  getProductsValue(state) { 
    return state.value;
  }
};
const mutations = {
  setProduct(state, payload) {
    state.product = { ...payload };
  },
  setProducts(state, payload) {
    state.products = [ ...payload ];
  },
  setClearCart(state) {
    state.products = [];
    state.count = 0;
    state.value = 0;
  },
  setProductDelete(state, payload) {
    state.products = state.products.filter(c => c.id !== payload.id);
    state.count = state.count - 1;
    state.value = state.value - payload.value;
  },
  updateProduct(state, payload) {
    let index = state.products.findIndex(c => c.id === payload.id);
    state.products = [
      ...state.products.slice(0, index === -1 ? 0 : index),
      payload, ...state.products.slice(index + 1) ];
    state.count = state.count + 1;
    state.value = state.value + payload.value;
  },
};
const actions = {
   addProduct(context, data) {
    context.commit('updateProduct', data);
   },
   removeProduct(context, data) {
    context.commit('setProductDelete', data);
   },
   clearCart(context){
    context.commit('setClearCart');
   }

};
  
export default {
  state,
  getters,
  mutations,
  actions
};
  