
/*ciclo para verificar 

let cantidad = parseFloat (prompt("ingresa la cantidad"));
while (Number.isInteger(cantidad)==false) {
alert("Hay que ingresar un numero"); 
let cantidad = parseFloat (prompt("ingresa la cantidad"));
if (Number.isInteger(cantidad)) {
break;
}
}

// Declaracion de variables

let devise = prompt("ingresa la moneda");
*/
let message = "no tenemos esta moneda";
let result;
/*
let deviseDemandee = prompt("ingresa la moneda requerida")
*/


const dolarMoneda = {

  nombre:"USD",
  tipoDeCambio:0.98,
  logo:"$",

}

const yenMoneda ={

  nombre:"JPY",
  tipoDeCambio:144.01,
  logo:"¥",

}

const dinarMoneda = {

  nombre:"TND",
  tipoDeCambio:3.20,
  logo:"DT",
}

const euroMoneda = {

  nombre:"EURO",
  tipoDeCambio:" ",
  logo:"€",
}


// Declaracion del array

const listaDeMoneda =  ["usd" ,  "jpy" ,  "tnd" ,  "euro" ]
listaDeMoneda.push("EURO");
console.log(listaDeMoneda);


for ( const moneda of listaDeMoneda ) {

 storedNames = JSON.parse(localStorage.getItem("listaDeMoneda"));


}

let divisa1 = document.getElementById('div1');
let divisa2 = document.getElementById('div2');
let importe = document.getElementById('cantidad')

// recuperar el buton de cambia
const change = document.getElementById('button');

//un evento 
change.addEventListener('click' , () => {




//Conversion todo en euro

  
if (divisa1 === dolarMoneda.nombre || divisa1 === listaDeMoneda[0]){
  result = importe /  dolarMoneda.tipoDeCambio;
  } else if (divisa1 === yenMoneda.nombre|| divisa1 === listaDeMoneda[1]){
  result = importe / yenMoneda.tipoDeCambio;
  } else if (divisa1 === dinarMoneda.nombre || divisa1 === listaDeMoneda[2]){
  result = importe / dinarMoneda.tipoDeCambio;
  } else if (divisa1 === listaDeMoneda[3]|| divisa1 === listaDeMoneda[4]){
    result = importe;
  } else 
    result = message;

//Declaracion de variables

let resultDemandee1 , resultDemandee2 , resultDemandee3,resultDemandee4;
let aide = result ; 


// Usar funciones para hacer la conversión 

function conversorDolar(moneda1) {
    let conversionDolar = moneda1 * dolarMoneda.tipoDeCambio; 
    return conversionDolar;
}

function conversorYen(moneda2) {
    let conversionYen = moneda2 * yenMoneda.tipoDeCambio; 
    return conversionYen;
  }

function conversorEuro(moneda3) {
    let conversionEuro = moneda3 ; 
    return conversionEuro;
    }

function conversorDinar(moneda4) {
    let conversionDinar = moneda4 * dinarMoneda.tipoDeCambio; 
    return conversionDinar;
      }
    
// Hacer la Conversion


if (divisa2 === dolarMoneda.nombre || divisa2 === listaDeMoneda[0]){
  let dolar = conversorDolar(aide);
  console.log("el resultado de la conversion es" + " "   + dolar + dolarMoneda.logo);
  } else if (divisa2 === yenMoneda.nombre || divisa2 === listaDeMoneda[1]){
  let yen = conversorYen(aide);
  console.log("el resultado de la conversion es" + " "   + yen + yenMoneda.logo);
  } else if (divisa2 ===listaDeMoneda[3] || divisa2 === listaDeMoneda[4]){
  let euro = conversorEuro (aide) ;
  console.log("el resultado de la conversion es" + " "   + euro + "€");
  } else if (divisa2 === dinarMoneda.nombre || divisa2 === listaDeMoneda[2]){
 let dinar = conversorDinar(aide);   
  console.log("el resultado de la conversion es" + " "   + dinar + dinarMoneda.logo);
  } else 
  console.log("No tenemos esta moneda");
  
})







                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      