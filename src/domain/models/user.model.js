class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password; 
    this.createdAt = new Date();
  }
  
  validate() {
    if (!this.username || this.username.length < 3) {
      throw new Error('Username debe tener al menos 3 caracteres');
    }
    
    if (!this.password || this.password.length < 6) {
      throw new Error('Password debe tener al menos 6 caracteres');
    }
    
    return true;
  }
}

module.exports = User;