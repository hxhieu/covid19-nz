export const state = () => ({
  records: [],
})

export const mutations = {
  setRecords: (state, records) => {
    state.records = records
  },
}

export const actions = {
  async fetchRecords({ commit }) {
    const records = await this.$axios.$get('/cases')
    commit('setRecords', records)
  },
}
