import axios from 'axios';

const API_URL = 'http://localhost:1338/ticket/';

export const ticket = {
    namespaced: true,

    state: {
        tickets: [],
        newTicket: ''
    },

    actions: {
        async all({ commit }) {
            await axios.get(API_URL + 'all').then(tickets => {
                console.log(tickets);
                commit('setTickets', tickets.data);
            })
                .catch(error => {
                    console.log(error);
                })
        },
        async create({ commit }, newTicket) {
            await axios.post(API_URL + 'create', {
                company: newTicket.company,
                user: newTicket.user,
                agent: newTicket.agent,
                title: newTicket.title,
                description: newTicket.description
            })
            .then(response => {
                console.log(response);
                commit('newTicket', response);
            }).catch(error => {
                console.log(error);
            })
        },            
            
    },
    mutations: {
        setTickets(state, tickets) {
            console.log(tickets);
            state.tickets = tickets;
        },
        newTicket(state, newTicket) {
            console.log(newTicket);
            state.newTicket = newTicket;
        }
    },
    getters: {
        tickets: state => state.tickets,
    },
};
