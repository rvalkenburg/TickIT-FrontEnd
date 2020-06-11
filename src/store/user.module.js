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
        async getByCompany({ commit }, id) {
            await UserService.getUsersByCompany(id)
                .then(response => {
                    commit('setUsers', response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        setUsers({commit}, users){
            commit('setUsers', users)
        }

    
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
