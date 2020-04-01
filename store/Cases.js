export const state = () => ({
  busy: false,
  records: {
    confirmed: [],
    probable: [],
  },
})

export const mutations = {
  setRecords: (state, records) => {
    state.records = records
  },
  setBusy: (state, busy) => {
    state.busy = busy
  },
}

export const actions = {
  async fetchCases({ commit, state }, forceRefresh) {
    // Don't reload
    if (!forceRefresh && state.records && state.records.confirmed.length) return
    commit('setBusy', true)
    const records = await this.$axios.$get('/cases')
    commit('setRecords', records)
    commit('setBusy', false)
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
