import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1338/ticket/';

class TicketService {
    async getAllTickets() {
        return await axios.get(API_URL + 'all', {
            headers: authHeader(),
        })
    }
    async getAllTicketsByAccountId(id) {
        return await axios.get(API_URL + 'account/' + id , {
            headers: authHeader(),
        })
    }
    async getAllTicketsByCompanyId(id) {
        return await axios.get(API_URL + 'company/' + id , {
            headers: authHeader(),
        })
    }
    async createTicket(newTicket) {
        return await axios.post(API_URL + 'create', {
            company: newTicket.company,
            user: newTicket.user,
            agent: newTicket.agent,
            title: newTicket.title,
            description: newTicket.description
        }, {
            headers: authHeader()
        })
    }
    async editTicket(ticket) {
        console.log(ticket)
        return await axios.put(API_URL + 'edit', {
            status: ticket.status,
            ticket: ticket.ticketid,
            agent: ticket.agent,

        }, {
            headers: authHeader()
        })
    }
}
export default new TicketService();