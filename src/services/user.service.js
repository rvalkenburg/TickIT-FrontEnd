import axios from 'axios';
import authHeader from './auth-header';
import { config } from './config'

class UserService {
    async getAllUsers() {
        return await axios.get(config.apiUrl + '/user', {
            headers: authHeader(),
        }).then(response => {
            return response.data
        })
            .catch(error => {
                console.log(error);
            })
    }
    async getAllAgents() {
        return await axios.get(config.apiUrl + '/user/agents', {
            headers: authHeader(),
        })
    }
    async getUsersByCompany(id) {
        return await axios.get(config.apiUrl + '/user/company/' + id, {
            headers: authHeader(),
        })
    }
}

export default new UserService();