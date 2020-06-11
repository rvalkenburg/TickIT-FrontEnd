import axios from 'axios';

const API_URL = 'http://localhost:1338/auth/';

class AuthService {
  login(account) {
    console.log(account)
    return axios.post(API_URL + 'login', {
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
    return axios.post(API_URL + 'register', {
      username: account.username,
      firstname: account.firstname,
      surname: account.surname,
      password: account.password,
      company: account.company,
    }).then(Account => {
      console.log(Account)
    });
  }
}

export default new AuthService();