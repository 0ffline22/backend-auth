const authService = require('../../../domain/services/auth.service');

class AuthController {
  async register(req, res) {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        error: 'Username y password son requeridos' 
      });
    }
    
    const result = await authService.register(username, password);
    
    if (result.success) {
      res.status(201).json({ 
        success: true, 
        message: 'Usuario registrado exitosamente',
        user: result.user 
      });
    } else {
      res.status(400).json({ 
        success: false, 
        error: result.error 
      });
    }
  }
  
  async login(req, res) {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        error: 'Username y password son requeridos' 
      });
    }
    
    const result = await authService.login(username, password);
    
    if (result.success) {
      res.status(200).json({ 
        success: true, 
        message: 'Login exitoso',
        user: result.user 
      });
    } else {
      res.status(401).json({ 
        success: false, 
        error: result.error 
      });
    }
  }
}

module.exports = new AuthController();