const bolivianos = 6.92; // id=10 se refiere a bolivianos
const pesosChile = 942.04; // id=20 se refiere a Pesos Chilenos
const pesosMex = 17.02; // id=30 se refiere a Pesos Mexicano
const pesosArge = 876.75; // id=40 se refiere a Pesos Argentinos
const dolar = 1; // id=50 se refiere a Dolares
var aux = 0; //variable auxiliar 1 para la conversion de monedas
var aux_2; // variable auxiliar 2
var auto = new Boolean (false) // automatizar el cambio
const moneda1 = document.getElementById("monto1");
const cambio1 = document.getElementById("de");

const moneda2 = document.getElementById("monto2");
const cambio2 = document.getElementById("a");

function convertir() {  
  const cambio_1 = cambio1.value;
  const cambio_2 = cambio2.value;
  
  console.log(cambio1.value)
  console.log(cambio2.value)

  if (cambio1.value == 10){  //de Bolivianos a
    if (cambio2.value == 10)
      aux = (moneda1.value); //a bolivianos

    if (cambio2.value == 20)
      aux = (moneda1.value) * (pesosChile/bolivianos); //a pesos Chilenos
      
    if (cambio2.value == 30)
      aux = (moneda1.value) * (pesosMex/bolivianos); // a pesos mexicanos
    
    if (cambio2.value == 40)
      aux = (moneda1.value) * (pesosArge/bolivianos); // a pesos argentinos
    
    if (cambio2.value == 50)
      aux = (moneda1.value) * (dolar/bolivianos); // a dolares
}

if (cambio1.value == 20){  //de Pesos Chilenos a
  if (cambio2.value == 10)
    aux = (moneda1.value) * (bolivianos/pesosChile); //a bolivianos

  if (cambio2.value == 20)
    aux = (moneda1.value); //a pesos Chilenos
    
  if (cambio2.value == 30)
    aux = (moneda1.value) * (pesosMex/pesosChile); // a pesos mexicanos
  
  if (cambio2.value == 40)
    aux = (moneda1.value) * (pesosArge/pesosChile); // a pesos argentinos
  
  if (cambio2.value == 50)
    aux = (moneda1.value) * (dolar/pesosChile); // a dolares
}

if (cambio1.value == 30){  //de Pesos Mexicanos a
  if (cambio2.value == 10)
    aux = (moneda1.value) * (bolivianos/pesosMex); //a bolivianos

  if (cambio2.value == 20)
    aux = (moneda1.value) * (pesosChile/pesosMex); //a pesos Chilenos
    
  if (cambio2.value == 30)
    aux = (moneda1.value); // a pesos mexicanos
  
  if (cambio2.value == 40)
    aux = (moneda1.value) * (pesosArge/pesosMex); // a pesos argentinos
  
  if (cambio2.value == 50)
    aux = (moneda1.value) * (dolar/pesosMex); // a dolares
}

if (cambio1.value == 40){  //de Pesos Argentinos a
  if (cambio2.value == 10)
    aux = (moneda1.value) * (bolivianos/pesosArge); //a bolivianos

  if (cambio2.value == 20)
    aux = (moneda1.value) * (pesosChile/pesosArge); //a pesos Chilenos
    
  if (cambio2.value == 30)
    aux = (moneda1.value) * (pesosMex/pesosArge); // a pesos mexicanos
  
  if (cambio2.value == 40)
    aux = (moneda1.value); // a pesos argentinos
  
  if (cambio2.value == 50)
    aux = (moneda1.value) * (dolar/pesosArge); // a dolares
}

if (cambio1.value == 50){  //de Dolar a
  if (cambio2.value == 10)
    aux = (moneda1.value) * (bolivianos/dolar); //a bolivianos

  if (cambio2.value == 20)
    aux = (moneda1.value) * (pesosChile/dolar); //a pesos Chilenos
    
  if (cambio2.value == 30)
    aux = (moneda1.value) * (pesosMex/dolar); // a pesos mexicanos
  
  if (cambio2.value == 40)
    aux = (moneda1.value) * (pesosArge/dolar); // a pesos argentinos
  
  if (cambio2.value == 50)
    aux = (moneda1.value); // a dolares
}
moneda2.value = aux;
console.log(aux)
}




//cambio de manera automatica sin pulsar el boton de calcular

//cambio1.addEventListener('change', convertir);
//moneda1.addEventListener('input', convertir);
//cambio2.addEventListener('change', convertir);
//moneda2.addEventListener('input', convertir);


const btn = document.getElementById('calcular');
btn.addEventListener('click', () => {
convertir();
})

convertir();