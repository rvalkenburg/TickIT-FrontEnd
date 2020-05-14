import axios from 'axios';
import authHeader from '../services/auth-header';

const API_URL = 'http://localhost:1338/user/';

export const user = {
    namespaced: true,

    state: {
        users: [],
        agents: [],
    },

    actions: {
        async getAllAgents({ commit }) {
            await axios.get(API_URL + 'agents', {
                headers: authHeader(),
            }).then(Response => {
                commit('setAgents', Response.data);
            })
                .catch(error => {
                    console.log(error);
                })
        },
        async getAllUsers({ commit }) {
            await axios.get(API_URL + 'users', {
                headers: authHeader(),
            }).then(Response => {
                commit('setUsers', Response.data);
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
