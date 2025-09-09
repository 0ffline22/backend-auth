document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'message';
    
  
    if (username.length < 3) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'El usuario debe tener al menos 3 caracteres';
        return;
    }
    
    if (password.length < 6) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'La contraseña debe tener al menos 6 caracteres';
        return;
    }
    
    if (password !== confirmPassword) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Las contraseñas no coinciden';
        return;
    }
    
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            messageDiv.className = 'message success';
            messageDiv.textContent = 'Registro exitoso. Ya puedes iniciar sesión.';
            
         
            document.getElementById('registerForm').reset();
            
            
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            messageDiv.className = 'message error';
            messageDiv.textContent = data.error;
        }
    } catch (error) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Error de conexión. Intenta nuevamente.';
    }
});