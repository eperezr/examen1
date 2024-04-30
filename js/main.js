
function convertir() {

  const bolivianos = 6.92; //10 bolivianos
  const pesosChile = 942.04; //20 Pesos Chilenos
  const pesosMex = 17.02; //30 Pesos Mexicano
  const pesosArge = 876.75; //40 Pesos Argentinos
  const dolar = 1; //50 Dolares
  
    
  var moneda = document.getElementById("monto").value;
  document.getElementById("moneda");
  const cambio1 = document.getElementById("de").value;
  const cambio2 = document.getElementById("a").value;
  
  var cambioMoneda;
  
  console.log(cambio1)
  console.log(cambio2)
  console.log(cambioMoneda)


if (cambio1 == 10){  //de Bolivianos a
  switch(cambio2){
  case cambio2 === 10:
    cambioMoneda = moneda; //a bolivianos
    document.getElementById('respuesta').innerHTML = cambioMoneda.toFixed(2)
    break;
  case cambio2 === 20:
    cambioMoneda = moneda * (bolivianos/pesosChile); //a pesos Chilenos
    break;
  case cambio2 === 30:
    cambioMoneda = moneda * (bolivianos/pesosMex); // a pesos mexicanos
    break;
  case cambio2 === 40:
    cambioMoneda = moneda * (bolivianos/pesosArge); // a pesos argentinos
    break;
  case cambio2 === 50:
    cambioMoneda = moneda * (bolivianos/dolar); // a dolares
    break;
  }

} else if (cambio1 == 20){ // de pesos Chilenos a
  switch(cambio2){
  case cambio2 === 10:
    cambioMoneda = moneda * (pesosChile/bolivianos); //a bolivianos
    break;
  case cambio2 === 20:
    cambioMoneda = moneda; //a pesos Chilenos
    break;
  case cambio2 === 30:
    cambioMoneda = moneda * (pesosChile/pesosMex); // a pesos mexicanos
    break;
  case cambio2 === 40:
    cambioMoneda = moneda * (pesosChile/pesosArge); // a pesos argentinos
    break;
  case cambio2 === 50:
    cambioMoneda = moneda * (pesosChile/dolar); // a dolares
    break;
  }

} else if (cambio1 == 30) { // de pesos mexicanos a
  switch(cambio2){
  case cambio2 === 10:
    cambioMoneda = moneda * (pesosMex/bolivianos); // a Bolivianos
    break;
  case cambio2 === 20: 
    cambioMoneda = moneda * (pesosMex/pesosChile); // a pesos Chilenos
    break;
  case cambio2 === 30:
    cambioMoneda = moneda; // a pesos mexicanos
    break;
  case cambio2 === 40:
    cambioMoneda = moneda * (pesosMex/pesosArge); // a pesos argentinos
    break;
  case cambio2 === 50:
    cambioMoneda = moneda * (pesosMex/dolar); // a dolares
    break;
  }

} else if (cambio1 == 40) { // de pesos argentinos a
  switch(cambio2){
  case cambio2 === 10:
    cambioMoneda = moneda * (pesosArge/bolivianos); // a Bolivianos
    break;
  case cambio2 === 20: 
    cambioMoneda = moneda * (pesosArge/pesosChile); // a pesos Chilenos
    break;
  case cambio2 === 30:
    cambioMoneda = moneda * (pesosArge/pesosMex); // a pesos mexicanos
    break;
  case cambio2 === 40:
    cambioMoneda = moneda ; // a pesos argentinos
    break;
  case cambio2 === 50:
    cambioMoneda = moneda * (pesosArge/dolar); // a dolares
    break;
  }

}else if (cambio1 == 50) { // de dolar a
  switch(cambio2){
  case cambio2 === 10:
    cambioMoneda = moneda * (dolar/bolivianos); // a Bolivianos
    break;
  case cambio2 === 20: 
    cambioMoneda = moneda * (dolar/pesosChile); // a pesos Chilenos
    break;
  case cambio2 === 30:
    cambioMoneda = moneda * (dolar/pesosMex); // a pesos mexicanos
    break;
  case cambio2 === 40:
    cambioMoneda = moneda * (dolar/pesosArge) ; // a pesos argentinos
    break;
  case cambio2 === 50:
    cambioMoneda = moneda; // a dolares
    break;
  }
}
}


const btn = document.getElementById('calcular');
btn.addEventListener('click', () => {
 alert(moneda);
})


