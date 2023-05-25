class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
}

const users = [
    new User('admin@gmail.com' , '1234'),
]

const login = (event) =>{
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userFound = users.find(user => user.email  == email && user.password == password)
    if(userFound){
        const verficacion =userFound.email = email && userFound.password == password;
        if(verficacion){
            alertMensaje1('Entro');
            document.querySelector('.formularioLogin').reset();
            window.location = "Admin.html";
        }else{
            alertMensaje2('Usuario o Contraseña Incorrectos');
            document.querySelector('.formularioLogin').reset();
        }
    }
    else{
        alertMensaje2('Usuario o Contraseña Incorrectos');
        document.querySelector('.formularioLogin').reset();
    }   
}

function alertMensaje1(mensaje){
    let alertMensaje = document.createElement('div');
    alertMensaje.classList.add('alert' , 'alert-success');
    alertMensaje.setAttribute('role','alert');
    alertMensaje.innerText = mensaje;
    let container = document.querySelector('.formularioLogin');
    container.appendChild(alertMensaje);
}

function alertMensaje2(mensaje){
    let alertMensaje = document.createElement('div');
    alertMensaje.classList.add('alert' , 'alert-danger');
    alertMensaje.setAttribute('role','alert');
    alertMensaje.innerText = mensaje;
    let container = document.querySelector('.formularioLogin');
    container.appendChild(alertMensaje);
}
