export const state = () => ({
  tiles: [],
})

export const mutations = {
  setTile: (state, { index, filters }) => {
    state.tiles[index] = filters
  },
}

export const getters = {
  getTile: state => index => state.tiles[index],
}
