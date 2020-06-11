import TicketService from '../services/ticket.service';

export const ticket = {
    namespaced: true,

    state: {
        tickets: [],
        filteredList: [],
        newTicket: '',
        selectedTicket: '',
    },

    actions: {
        async all({ commit }) {
            await TicketService.getAllTickets()
                .then(response => {
                    commit('setTickets', response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async getByAccountId({ commit }, id) {
            await TicketService.getAllTicketsByAccountId(id)
                .then(response => {
                    commit('setTickets', response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async getByCompanyId({ commit }, id) {
            await TicketService.getAllTicketsByCompanyId(id)
                .then(response => {
                    commit('setTickets', response);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async create({ commit }, newTicket) {
            await TicketService.createTicket(newTicket)
                .then(response => {
                    commit('newTicket', response);
                }).catch(error => {
                    console.log(error);
                })
        },
        async edit({ commit }, newTicket) {
            console.log(newTicket)
            await TicketService.editTicket(newTicket)
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
        selectedTicket: state => state.selectedTicket,
    },
};
