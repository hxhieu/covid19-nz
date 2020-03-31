export const state = () => ({
  tiles: [],
})

export const mutations = {
  setTile: (state, { index, filters }) => {
    state.tiles.splice(index, 1, filters)
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
