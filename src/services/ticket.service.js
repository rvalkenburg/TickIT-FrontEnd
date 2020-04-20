import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/tickets/';

class TicketService {
    async getAllTickets() {  
      const response = await axios
            .get(API_URL + 'all', {
                headers: authHeader()
            });
        return response.data;
    }
  }
  
  export default new TicketService();