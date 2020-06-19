import axios from 'axios';
import authHeader from './auth-header';
import { config } from './config'

class CompanyService {
    async getAllCompanies() {
        return await axios.get(config.apiUrl + '/company/all', {
            headers: authHeader(),
        })
    }
    async getCompany(id) {
        return await axios.get(config.apiUrl + "/company/" + id, {
            headers: authHeader(),
        })
    }
    async createCompany(newCompany) {
        return await axios.post(config.apiUrl + "/company", {
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