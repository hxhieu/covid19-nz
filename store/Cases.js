export const state = () => ({
  records: [],
})

export const mutations = {
  setRecords: (state, records) => {
    state.records = records
  },
}

export const actions = {
  fetchRecords: async ({ commit }) => {
    const res = await this.$axios.$get('/cases')
    console.log(res.data)
    commit('setRecords', res.data)
  },
}
