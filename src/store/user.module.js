import UserService from '../services/user.service';

export const user = {
    namespaced: true,

    state: {
        users: [],
        agents: [],
    },

    actions: {
        async getAllAgents({ commit }) {
            await UserService.getAllAgents()
                .then(response => {
                    commit('setAgents', response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async getAllUsers({ commit }) {
            await UserService.getAllUsers()
                .then(response => {
                    commit('setUsers', response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
    },
    mutations: {
        setAgents(state, agents) {
            state.agents = agents;
        },
        setUsers(state, users) {
            state.users = users;
        }
    },
    getters: {
        users: state => state.users,
        agents: state => state.agents,
        getUsersByCompany: (state) => (id) => {
            return state.users.filter(u => u.company.id == id);
        }
    },
};
