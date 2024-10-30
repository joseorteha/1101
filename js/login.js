document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener valores de los campos de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Verificar credenciales
    if (username === "Nuestro-Amor" && password === "20") {
        // Redirigir a la página principal u otra página HTML
        window.location.href = 'index.html';  // Cambia 'index.html' al archivo HTML que prefieras
    } else {
        // Mostrar mensaje de error
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});
