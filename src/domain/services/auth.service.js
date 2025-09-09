const registerUserUseCase = require('../../application/use-cases/register-user.use-case');
const loginUserUseCase = require('../../application/use-cases/login-user.use-case');
class AuthService {
  async register(username, password) {
    try {
      const user = await registerUserUseCase.execute(username, password);
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  async login(username, password) {
    try {
      const user = await loginUserUseCase.execute(username, password);
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

module.exports = new AuthService();