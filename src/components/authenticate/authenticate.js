let token = require('./../../commons/token');
class Authenticate {

  constructor() {}

  login(username, password) {
    return new Promise((resolve, reject) => {
      if (username && password) {
        let currentUser = {
          id: 'a1b2c3',
          name: 'Juan Perez',
          role: 'admin'
        };
        let tokenInfo = {token: token.generateToken(currentUser)};
        resolve(tokenInfo);
      } else {
        reject('Username and password required');
      }
      
    });
  }
}

module.exports = Authenticate;