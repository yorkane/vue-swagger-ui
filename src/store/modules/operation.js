import * as types from '../mutation-types'

const state = {
  apiDocs: {},
  baseUrl: ''
}

const getters = {
  getOperation: (state) => (operationId) => {
    let opt = {}
    if (state.apiDocs && state.apiDocs['tags']) {
      state.apiDocs['tags'].forEach((v, tindex, arr) => {
        let tag = arr[tindex]
        if (tag && tag.operations) {
          tag.operations.forEach((pv, pindex, operations) => {
            let operation = operations[pindex]
            if (operation['operationId'] === operationId) {
              opt = operation
            }
          })
        }
      })
    }
    return opt
  },
  getBaseUrl: (state) => state.baseUrl,
  apiDocs: (state) => state.apiDocs,
  tags: (state) => {
    return state.apiDocs['tags']
  },
  getInfo: (state) => {
    if (state.apiDocs) {
      return state.apiDocs['info']
    }
    return {}
  },
  getHost: (state) => state.apiDocs['host'],
  getBasePath: (state) => state.apiDocs['basePath'],
  getDefinition: (state) => (ref) => state.apiDocs['definitions'][ref],
  getDefinitions: (state) => state.apiDocs['definitions']
}

const actions = {}

const mutations = {
  [types.ADD_API_DOCS](state, apiDocs) {
    state.apiDocs = apiDocs
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
