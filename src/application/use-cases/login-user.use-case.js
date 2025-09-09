const userRepository = require('../../adapters/out/user.repository');

class LoginUserUseCase {
  async execute(username, password) {
 
    const user = await userRepository.findByUsername(username);
    if (!user) {
      throw new Error('Credenciales inválidas');
    }
    

    if (user.password !== password) {
      throw new Error('Credenciales inválidas');
    }
    
 
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

module.exports = new LoginUserUseCase();