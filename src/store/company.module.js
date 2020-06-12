import CompanyService from '../services/company.service';

export const company = {
    namespaced: true,

    state: {
        companies: [],
        company: '',
        newCompany: ''
    },

    actions: {
        async all({ commit }) {
            await CompanyService.getAllCompanies()
                .then(response => {
                    commit('setCompanies', response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async getById({ commit }, id) {
            await CompanyService.getCompany(id)
                .then(response => {
                    commit('setCompany', response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async create({ commit }, company) {
            await CompanyService.createCompany(company)
                .then(Response => {
                    commit('setCreatedCompany', Response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        selectCompany({commit}, company){
            commit('setCompany', company);
        }
    },
    mutations: {
        setCompany(state, company) {
            state.company = company;
        },
        setCompanies(state, companies) {
            state.companies = companies;
        },
        setCreatedCompany(state, company) {
            state.newCompany = company;
        },
    },
    getters: {
        company: state => state.company,
        companies: state => state.companies,
        newCompany: state => state.newCompany,
        getUsersByCompany: (state) => (id) => {
            console.log(state.users)
            return state.companies.filter(u => u.company.id == id);
        }
    },
};
