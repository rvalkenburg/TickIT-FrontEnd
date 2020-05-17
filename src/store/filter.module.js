export const filter = {
    namespaced: true,

    state: {
        agent: '',
        status: '',
        company: '',
        name: ''
    },

    actions: {
        filterAgent({commit}, agent){
            commit('setAgent', agent);
        },
        filterCompnay({commit}, company){
            commit('setCompany', company);
        },
        filterStatus({commit}, status){
            console.log(status);
            commit('setStatus', status);
        },
        filterName({commit}, name){
            commit('setName', name);
        }

    },
    mutations: {
        setAgent(state, agent) {
            state.agents = agent;
        },
        setCompany(state, company) {
            state.company = company;
        },
        setName(state, name) {
            state.name = name;
        },
        setStatus(state, status) {
            console.log(status);
            state.status = status;
        }
    },
    getters: {
        company: state => state.company,
        agent: state => state.agent,
        name: state => state.name,
        getStatus: state => state.status,
    },
};
