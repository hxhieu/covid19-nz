import { createStore } from 'vuex'
import { useHttpClient } from './composable/useHttpClient'

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
  fetchRecords: async ({ commit }) => {
    const { get } = useHttpClient()
    const records = await get('/cases')
    commit(types.SET_RECORDS, records)
  },
}

const getters = {}

export { types }

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
