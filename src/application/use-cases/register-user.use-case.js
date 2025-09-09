const User = require('../../domain/models/user.model');
const userRepository = require('../../adapters/out/user.repository');

class RegisterUserUseCase {
  async execute(username, password) {
    
    const existingUser = await userRepository.findByUsername(username);
    if (existingUser) {
      throw new Error('El usuario ya existe');
    }
    
    
    const user = new User(null, username, password);
    user.validate();
    
    
    return await userRepository.save(user);
  }
}

module.exports = new RegisterUserUseCase();