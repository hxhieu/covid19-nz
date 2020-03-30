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

const getAllCases = state =>
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
    )

export const getters = {
  allCases: state => getAllCases(state),
  filteredCases: state => ({ age, location, date, gender }) => {
    return getAllCases(state).filter(
      x =>
        (location ? x.location === location : true) &&
        (age ? x.age === age : true) &&
        (gender ? x.gender === gender : true) &&
        (date ? x.date === date : true)
    )
  },
}
