const state = {
    visible: false
  };
  
const getters = {
  isCartVisible(state) {
    return state.visible;
  },
};
const mutations = {
  setCartVisible(state, value) {
    state.visible = value;
  },
  toggleCartVisible(state) {
    state.visible = ! state.visible;
  }
};
  
export default {
  state,
  getters,
  mutations,
};
  