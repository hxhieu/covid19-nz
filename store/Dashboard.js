export const state = () => ({
  termsAccepted: false,
  tiles: [],
})

export const mutations = {
  setTile: (state, { index, filters }) => {
    state.tiles.splice(index, 1, filters)
  },
  setAcceptTerms: (state, accept) => {
    state.termsAccepted = accept
  },
}

export const actions = {
  clearTile: ({ commit }, index) => {
    commit('setTile', { index, filters: null })
  },
}

export const getters = {
  getTile: state => index => {
    return state.tiles[index]
  },
}
