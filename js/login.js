const form = document.getElementById('form-cont');

const login = async (e) => {
    e.preventDefault();

    const emailUsuario = document.querySelector('.userEmail').value;
    const contrasenia = document.querySelector('.pwd').value;

    console.log(emailUsuario, contrasenia);

    const datosUsuario = { Email: emailUsuario, Contrasenia: contrasenia };

    try {
        const peticion = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: JSON.stringify(datosUsuario),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const respuesta = await peticion.json();

        if (!peticion.ok) {
            $('#myModal').modal('show'); // Mostrar modal de error
        } else {
            localStorage.setItem('token', respuesta.token);
            window.location.href = "../Componentes/home.html";
        }
    
    } catch (error) {
        console.error('Error al intentar iniciar sesión:', error);
        alert('Hubo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
};

form.addEventListener('submit', login);
