const API_URL = 'http://localhost:8000/api'

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const nome = document.getElementById('nome').value;
            const sobrenome = document.getElementById('sobrenome').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch(`${API_URL}/register/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        nome: nome,
                        sobrenome: sobrenome,
                        password: password
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Registro bem sucedido:', data);
                } else {
                    console.error('Registro falhou:', response.statusText);
                }
            } catch (error) {
                console.error('Ocorreu um erro:', error);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const response = await fetch(`${API_URL}/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password})
            });

            
            if (response.ok) {
                const data = await response.json();
                console.log('Login bem succedido:', data);
                localStorage.setItem('username', JSON.stringify(email));
                window.location.href = 'http://127.0.0.1:5500/toDoList.html';
            } else {
                console.error('Login falhou:', response.statusText);
            }
        });
    }
});

