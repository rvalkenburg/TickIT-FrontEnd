import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1338/company';

class CompanyService {
    async getAllCompanies() {
        return await axios.get(API_URL + '/all', {
            headers: authHeader(),
        })
    }
    async getCompany(id) {
        return await axios.get(API_URL + "/" + id, {
            headers: authHeader(),
        })
    }
    async createCompany(newCompany) {
        return await axios.post(API_URL, {
            name: newCompany.name,
            address: newCompany.address,
            city: newCompany.city,
            country: newCompany.country,
        }, {
            headers: authHeader()
        })
    }
}
export default new CompanyService();