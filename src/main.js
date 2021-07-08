import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(example, data);

let objFiltoUno = document.getElementById("filtrouno"); // convertir a objeto el Menu desplegable 1
// elementos del filto
// Por Numero de pokemon
// Por Tipo de Pokemon
// Por Orden Alfabetico
let objTexBox1 = document.getElementById("txbxnumeropokemon"); //Convertir a objeto el textbox de numero de pokemon
document.getElementById("btnbuscar").addEventListener("click",filtrar); //listener de boton filtrar o buscar
document.getElementById("filtrouno").addEventListener("toggle",fnOcultarTxBx) //listener de cambios en menu desplegable 1

//document.getElementById("test").innerHTML = data.pokemon[0]['size']['height'];


function fnfiltradoTipo(){
  console.log(objTexBox1.value);
  document.getElementById("test").innerHTML = data['pokemon'][objTexBox1.value-1]['num'];
  document.getElementById("test").innerHTML = data['pokemon'][objTexBox1.value-1]['name'];
}

function fnFiltadoAlfabetico(){
  
}

function fnOcultarTxBx(){

  console.log(objFiltoUno.value);
  if(objFiltoUno.value==1){

  }
}


 