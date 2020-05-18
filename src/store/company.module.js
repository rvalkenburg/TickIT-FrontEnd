export const company = {
    namespaced: true,

    state: {
        companies: [],
        company: '',
    },

    actions: {
        getCompany({ commit }, company) {
            commit('setCompany', company);
        },
        getCompanies({ commit }) {
            commit('setCompany');
        },
    },
    mutations: {
        setCompany(state, company) {
            state.company = company;
        },
        setCompanies(state, companies) {
            state.companies = companies;
        },
    },
    getters: {
        company: state => state.company,
        companies: state => state.companies
    },
};
