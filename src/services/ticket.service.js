import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1338/ticket/';

class TicketService {
    async getAllTickets() {
        return await axios.get(API_URL + 'all', {
            headers: authHeader(),
        }).then(response => {
            return response.data;
        })
            .catch(error => {
                console.log(error);
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
            .then(response => {
                return response.data
            }).catch(error => {
                console.log(error);
            })
            ;
    }
}


export default new TicketService();