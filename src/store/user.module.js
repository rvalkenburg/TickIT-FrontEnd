import axios from 'axios';

const API_URL = 'http://localhost:1338/user/';

export const user = {
    namespaced: true,

    state: {
        users: [],
        agents: [],
    },

    actions: {
        async getAllAgents({ commit }) {
            await axios.get(API_URL + 'agents').then(Response => {
                console.log(Response);
                commit('setAgents', Response.data);
            })
                .catch(error => {
                    console.log(error);
                })
        },
        async getAllUsers({ commit }) {
            await axios.get(API_URL + 'users' ).then(Response => {
                console.log(Response);
                commit('setUsers', Response.data);
            })
                .catch(error => {
                    console.log(error);
                })
        },
         
            
    },
    mutations: {
        setAgents(state, agents) {
            console.log(agents);
            state.agents = agents;
        },
        setUsers(state, users) {
            console.log(users);
            state.users = users;
        }
    },
    getters: {
        users: state => state.users,
        agents: state => state.agents
    },
};
