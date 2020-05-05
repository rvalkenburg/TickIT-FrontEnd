import axios from 'axios';
//import authHeader from './auth-header';

const API_URL = 'http://localhost:1338/ticket/';

class TicketService {
    getAllTickets() {
        axios
            .get(API_URL + 'all').then(Response => {
                console.log(Response.data);
                return Response.data;
            }).catch(error => {
                console.log(error);
            })
    }
    createTicket(newTicket) {
        axios.post(API_URL + 'create', {
            company: newTicket.company,
            user: newTicket.user,
            agent: newTicket.agent,
            title: newTicket.title,
            description: newTicket.description
        }).then(Response => {
            console.log(Response);
            return Response.data;
        }).catch(error => {
            console.log(error);
            
        })
        ;
    }


}


export default new TicketService();