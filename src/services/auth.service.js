import axios from 'axios';
import { config } from './config'

class AuthService {
  login(account) {
    console.log(account)
    return axios.post(config.apiUrl + '/auth/login', {
        email: account.username,
        password: account.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('account', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('account');
  }

  register(account) {
    return axios.post(config.apiUrl + '/auth/register', {
      username: account.username,
      firstname: account.firstname,
      surname: account.surname,
      password: account.password,
      company: account.company,
    })
  }
}

export default new AuthService();