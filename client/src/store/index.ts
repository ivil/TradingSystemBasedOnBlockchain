import { createStore } from 'vuex'

export default createStore({
  state: {
    contractAddress:  ''
  },
  getters: {
  },
  mutations: {
    setContractAddress(state, contractAddress) {
      state.contractAddress = contractAddress
    },
  },
  actions: {
  },
  modules: {
  }
})
