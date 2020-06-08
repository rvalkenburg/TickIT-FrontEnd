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
                    commit('setCompanies', response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async getById({ commit }, id) {
            await CompanyService.getCompany(id)
                .then(response => {
                    commit('setCompany', response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async create({ commit }, company) {
            await CompanyService.createCompany(company)
                .then(() => {
                    commit('setCreatedCompany', company);
                })
                .catch(error => {
                    console.log(error);
                })
        },
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
        newCompany: state => state.newCompany
    },
};
