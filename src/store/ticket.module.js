import axios from 'axios';

import authHeader from '../services/auth-header'
const API_URL = 'http://localhost:1338/ticket/';

export const ticket = {
    namespaced: true,

    state: {
        tickets: [],
        newTicket: '',
        selectedTicket: '',
    },

    actions: {
        async all({ commit }) {
            await axios.get(API_URL + 'all', {
                headers: authHeader(),
            }).then(tickets => {
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
            }, {
                headers: authHeader()
            })
                .then(response => {
                    commit('newTicket', response);
                }).catch(error => {
                    console.log(error);
                })
        },
        selectTicket({ commit }, ticket) {
            commit('selectedTicket', ticket);
        }

    },
    mutations: {
        setTickets(state, tickets) {
            state.tickets = tickets;
        },
        newTicket(state, newTicket) {
            state.newTicket = newTicket;
        },
        selectedTicket(state, ticket) {
            state.selectedTicket = ticket;
        }
    },
    getters: {
        tickets: state => state.tickets,
        selectedTicket: state => state.selectedTicket
    },
};
