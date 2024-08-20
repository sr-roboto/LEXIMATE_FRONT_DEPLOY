document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  const login = async (e) => {
    e.preventDefault();

    const emailUsuario = document.querySelector('.userEmail').value;
    const contrasenia = document.querySelector('.pwd').value;

    console.log(emailUsuario, contrasenia);

    const datosUsuario = { Email: emailUsuario, Contrasenia: contrasenia };

    try {
      const peticion = await fetch(
        'https://github.com/sr-roboto/LEXIMATE_FRONT_DEPLOY.git/login',
        {
          method: 'POST',
          body: JSON.stringify(datosUsuario),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const respuesta = await peticion.json();

      if (!peticion.ok) {
        alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      } else {
        localStorage.setItem('token', respuesta.token);
        window.location.href = '../Componentes/home.html';
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      alert(
        'Hubo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.'
      );
    }
  };

  if (form) {
    form.addEventListener('submit', login);
  } else {
    console.error('El formulario con el ID "login-form" no se encontró.');
  }
});
