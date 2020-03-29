export const state = () => ({
  records: {
    confirmed: [],
    probable: [],
  },
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
export const getters = {
  allCases: state =>
    state.records.confirmed
      .map(x => ({
        ...x,
        confirmed: true,
      }))
      .concat(
        state.records.probable.map(x => ({
          ...x,
          confirmed: false,
        }))
      ),
}
