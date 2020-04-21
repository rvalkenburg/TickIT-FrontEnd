import axios from 'axios';
//import authHeader from './auth-header';

const API_URL = 'http://localhost:1338/ticket/';

class TicketService {
    async getAllTickets() {
         return await axios
            .get(API_URL + 'all').then(Response => {
                return Response.data;
            }).catch(error => {
                console.log(error);
            })
        }
        
    }


export default new TicketService();