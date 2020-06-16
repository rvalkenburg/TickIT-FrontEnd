export default function isAdmin() {
    let account = JSON.parse(localStorage.getItem('account'));
    if (account.account.role == 'AGENT') {
      return true;
    } else {
      return false;
    }
  }