// Primera enrega Proyecto Final

//Validacion de Edad.

let nombre = prompt('Ingresa tu nombre')
let age = prompt ('Cual es tu edad?')

function validacion ()
{if (age <18 ){alert ('Lo siento no puedes ingresar'), location.href='index.html'}
else if (age >=18){alert ('Bienvenido ' + nombre + ' Puedes ingresar')}
else {alert ('No entiendo '), location.href='index.html'}

}
validacion()
