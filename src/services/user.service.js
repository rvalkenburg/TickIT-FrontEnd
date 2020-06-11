import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1338/user/';

class UserService {
    async getAllUsers() {
        return await axios.get(API_URL + 'users', {
            headers: authHeader(),
        }).then(response => {
            return response.data
        })
            .catch(error => {
                console.log(error);
            })
    }
    async getAllAgents() {
        return await axios.get(API_URL + 'agents', {
            headers: authHeader(),
        }).then(response => {
            return response.data
        })
            .catch(error => {
                console.log(error);
            })
    }
    async getUsersByCompany(id) {
        return await axios.get(API_URL + 'company/' + id, {
            headers: authHeader(),
        }).then(response => {
            return response.data
        })
            .catch(error => {
                console.log(error);
            })
    }
}

export default new UserService();