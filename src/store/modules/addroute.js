import { xmlTagToJson } from "@/utils/xmlTojson";


const state = {
    addRoutes: []
}

const mutations = {
    SET_ROUTE(state, data) {
        state.addRoutes = data
    }
}

const actions = {
    getRoute({ commit, state }) {
        getRoutes(state.token).then(({ data }) => {
            const dataTable = xmlTagToJson(data, "Table")
            commit('SET_ROUTE', dataTable)
            // state.addRoutes=dataTable
            // console.log(state.addRoutes);
        })

    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
