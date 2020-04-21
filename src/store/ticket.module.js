import ticketService from '../services/ticket.service';

export const ticket = {
    namespaced: true,

    state: {
        tickets: [],
    },

    actions: {
        all({ commit }) {
            ticketService.getAllTickets().then(tickets => {
                commit('setTickets', tickets);
            })
            .catch(error => {
                console.log(error);
            })
        },
    },
    mutations: {
        setTickets(state, tickets) {
            state.tickets = tickets;
        },
    },
    getters: {
        tickets: state => state.tickets,
    },
};
