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
            state.status = status;
        }
    },
    getters: {
        getCompany: state => state.company,
        getAgent: state => state.agent,
        getName: state => state.name,
        getStatus: state => state.status,
    },
};
