// 默认北京市，没有做城市的判断
export const state = () => ({position: {city: '北京市'}})

export const mutations = {
  setPosition(state, val) {
    state.position = val
  }
}

export const actions = {
  setPosition: ({
    commit
  }, position) => {
    commit('setPosition', position)
  }
}
// 不能使用这种方式了
// export default {namespaced: true, state, mutations, actions}
