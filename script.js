
//declaro variables
let primeraOpcion="1"
let segundaOpcion="2"
let bienvenida="Bienvenidx a Descubrir tu Carta del Dia"

//defino funciones
function  empezarTest () {
    while(true){
    let inicio=prompt("¿Cuál es tu estado de ánimo hoy?; 1- Feliz o 2- Triste")
  if (inicio==primeraOpcion){preguntaUno()}
  else if (inicio==segundaOpcion) {preguntaDos()}
  else{ alert("solo acepto 1 y 2"); }
  }
  }

  alert(bienvenida)
  empezarTest ()

  //Preguntas nivel 1

  function  preguntaUno () {
    while(true){
    let inicio=prompt("¿Cuál color prefieres?; 1- Verde o 2- Amarillo")
  if (inicio==primeraOpcion){preguntaTres()}
  else if (inicio==segundaOpcion) {preguntaCuatro()}
  else{ alert("solo acepto 1 y 2"); }
  }
  }
  
  function  preguntaDos () {
    while(true){
    let inicio=prompt("¿Cuál color ves que predomine mas al cerrar los ojos?; 1- Negro o 2- Turquesa")
  if (inicio==primeraOpcion){preguntaCinco()}
  else if (inicio==segundaOpcion) {preguntaSeis()}
  else{ alert("solo acepto 1 y 2"); }
  }
  }

  //Preguntas nivel 2

  function  preguntaTres () {

    while(true){
   let inicio=prompt("¿Cual estacion del año que prefieres? 1- Primavera 2- Verano")
  
  if (inicio==primeraOpcion){alert ("Tu carta del dia es: Lekhabel");end}
  else if (inicio==segundaOpcion) {alert ("Tu carta del dia es: Aladiah");end}
  else{ alert("solo acepto 1 y 2")}
  }
  }

  function  preguntaCuatro () {

    while(true){
   let inicio=prompt("¿Con quiente irias de vacaciones? 1- Iria solx 2- Con Familia o amigxs")
  
  if (inicio==primeraOpcion){alert ("Tu carta del dia es: Ariel");end}
  else if (inicio==segundaOpcion) {alert ("Tu carta del dia es: Michael");end}
  else{ alert("solo acepto 1 y 2")}
  }
  }

  function  preguntaCinco () {

    while(true){
   let inicio=prompt("¿Cual estacion del año que prefieres? 1- Otoño 2- Invierno")
  
  if (inicio==primeraOpcion){alert ("Tu carta del dia es: Lekhabel");end}
  else if (inicio==segundaOpcion) {alert ("Tu carta del dia es: Sitael");end}
  else{ alert("solo acepto 1 y 2")}
  }
  }

  function  preguntaSeis () {

    while(true){
   let inicio=prompt("¿Cual estacion del año que prefieres? 1- Otoño 2- Invierno")
  
  if (inicio==primeraOpcion){alert ("Tu carta del dia es: Sitael");end}
  else if (inicio==segundaOpcion) {alert ("Tu carta del dia es: Leviah");end}
  else{ alert("solo acepto 1 y 2")}
  }
  }