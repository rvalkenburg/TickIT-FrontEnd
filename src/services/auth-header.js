export default function authHeader() {
  let account = JSON.parse(localStorage.getItem('account'));
  if (account) {
    return {
      Authorization: 'Bearer ' + account.accessToken,
      'Content-Type': 'application/json'
    };
  } else {
    return {};
  }
}