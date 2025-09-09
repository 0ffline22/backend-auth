document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'message';
    
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            messageDiv.className = 'message success';
            messageDiv.textContent = 'Login exitoso. Bienvenido ' + data.user.username;
            
           
            document.getElementById('loginForm').reset();
            
          
            setTimeout(() => {
                alert('Login exitoso.');
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