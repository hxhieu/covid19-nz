import { createStore } from 'vuex'

const types = {
  SET_RECORDS: 'SET_RECORDS',
}

const state = {
  records: [],
}

const mutations = {
  [types.SET_RECORDS]: (state, records) => {
    state.records = records
  },
}

const actions = {
  setRecords: ({ commit }, records) => commit(types.SET_RECORDS, records),
}

const getters = {}

export { types }

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
