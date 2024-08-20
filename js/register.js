document.addEventListener('DOMContentLoaded', () => {
  const register = async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('firstName').value;
    const apellido = document.getElementById('lastName').value;
    const correo = document.getElementById('emailAddress').value;
    const genero = document.getElementById('genero').value;
    const fechaNacimiento = document.getElementById('birthDate').value;
    const pais = document.getElementById('country').value;
    const contrasenia = document.getElementById('pwd').value;
    const contraseniaConfirm = document.getElementById('pwdConfirm').value;

    // Validaciones
    if (contrasenia !== contraseniaConfirm) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    let regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gim;
    if (!regexEmail.test(correo)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }
    if (!regexPass.test(contrasenia)) {
      alert(
        'La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.'
      );
      return;
    }

    // Realizar petición al servidor
    const peticion = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({
        NombreUsuario: nombre,
        ApellidoUsuario: apellido,
        Email: correo,
        Genero: genero,
        FechaNacimiento: fechaNacimiento,
        Pais: pais,
        Contrasenia: contrasenia,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (peticion.ok) {
      // Mostrar registro exitoso como alerta
      alert('Registro exitoso');
      window.location.href = './iniciarSesion.html';
    } else {
      const respuesta = await peticion.json();
      if (respuesta.msg === 'El correo ya está registrado') {
        alert(
          'El correo ya está registrado. Por favor, usa otro correo electrónico.'
        );
      } else {
        alert(respuesta.msg);
      }
    }
  };

  const form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', register);
  } else {
    console.error('El formulario con el ID "form" no se encontró.');
  }
});
