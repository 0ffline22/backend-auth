
let users = [];
let currentId = 1;

class UserRepository {
  async findByUsername(username) {
    return users.find(user => user.username === username);
  }
  
  async findById(id) {
    return users.find(user => user.id === id);
  }
  
  async save(user) {
    const newUser = {
      id: currentId++,
      username: user.username,
      password: user.password,
      createdAt: new Date()
    };
    
    users.push(newUser);
    return newUser;
  }
  
  async getAll() {
    return [...users];
  }
}

module.exports = new UserRepository();