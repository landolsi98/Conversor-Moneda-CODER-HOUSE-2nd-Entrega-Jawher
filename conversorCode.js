
// ciclo para verificar 

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
let message = "no tenemos esta moneda";
let result;
let deviseDemandee = prompt("ingresa la moneda requerida")


// Declaracion del array

const listaDeMoneda = ["USD" , "usd" , "JPY" , "jpy" , "TND" , "tnd"];
listaDeMoneda.push("EURO" , "euro")
//Objeto

const tipo = {
  
  valueDolar : 0.98,
  valueYen   : 144.01 ,
  valueDinar : 3.20 ,
  
}
//Conversion todo en euro

if (devise === listaDeMoneda[0] || devise === listaDeMoneda[1] ){
  result = cantidad /  tipo.valueDolar;
  } else if (devise === listaDeMoneda[2] || devise === listaDeMoneda[3]){
  result = cantidad / tipo.valueYen;
  } else if (devise === listaDeMoneda[4]|| devise === listaDeMoneda[5]){
  result = cantidad / tipo.valueDinar;
  } else if (devise === listaDeMoneda[6]|| devise === listaDeMoneda[7]){
    result = cantidad;
  } else 
    result = message;


//Declaracion de variables

let resultDemandee1 , resultDemandee2 , resultDemandee3,resultDemandee4;
let aide = result ; 
 

// Usar funciones para hacer la conversión 

function conversorDolar(moneda1) {
    let conversionDolar = moneda1 * tipo.valueDolar; 
    return conversionDolar;
}

function conversorYen(moneda2) {
    let conversionYen = moneda2 * tipo.valueYen; 
    return conversionYen;
  }

function conversorEuro(moneda3) {
    let conversionEuro = moneda3 ; 
    return conversionEuro;
    }

function conversorDinar(moneda4) {
    let conversionDinar = moneda4 * tipo.valueDinar; 
    return conversionDinar;
      }
    
// Hacer la Conversion


if (deviseDemandee === listaDeMoneda[0] || deviseDemandee === listaDeMoneda[1]){
  let dolar = conversorDolar(aide);
  console.log("el resultado de la conversion es" + " "   + dolar + "$");
  } else if (deviseDemandee === listaDeMoneda[2]  || deviseDemandee === listaDeMoneda[3]){
  let yen = conversorYen(aide);
  console.log("el resultado de la conversion es" + " "   + yen + "¥");
  } else if (deviseDemandee ===listaDeMoneda[6] || deviseDemandee === listaDeMoneda[7]){
  let euro = conversorEuro (aide) ;
  console.log("el resultado de la conversion es" + " "   + euro + "€");
  } else if (deviseDemandee === listaDeMoneda[4] || deviseDemandee === listaDeMoneda[5]){
 let dinar = conversorDinar(aide);   
  console.log("el resultado de la conversion es" + " "   + dinar + "DT");
  } else 
  console.log("No tenemos esta moneda");
  











                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
