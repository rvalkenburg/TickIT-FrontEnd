import axios from 'axios';
import authHeader from './auth-header';
import { config } from './config'

class TicketService {
    async getAllTickets() {
        return await axios.get(config.apiUrl + '/ticket/all', {
            headers: authHeader(),
        })
    }
    async getAllTicketsByAccountId(id) {
        return await axios.get(config.apiUrl + '/ticket/account/' + id , {
            headers: authHeader(),
        })
    }
    async getAllTicketsByCompanyId(id) {
        return await axios.get(config.apiUrl + '/ticket/company/' + id , {
            headers: authHeader(),
        })
    }
    async createTicket(newTicket) {
        return await axios.post(config.apiUrl + '/ticket/create', {
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
        return await axios.put(config.apiUrl + '/ticket/edit', {
            status: ticket.status,
            ticket: ticket.ticketid,
            agent: ticket.agent,

        }, {
            headers: authHeader()
        })
    }
}
export default new TicketService();