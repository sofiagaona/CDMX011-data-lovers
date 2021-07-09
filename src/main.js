import { fnFiltradoTipo } from './data.js';
import data from './data/pokemon/pokemon.js';
import data2 from './data/pokemon/types.js';

























 










let objFiltoUno = document.getElementById("filtrouno"); // convertir a objeto el Menu desplegable 1
let objFiltoDos = document.getElementById("filtrodos"); // convertir a objeto el Menu desplegable 2

// elementos del filto
// Por Numero de pokemon
// Por Tipo de Pokemon
// Por Orden Alfabetico
let objTexBox1 = document.getElementById("txbxnumeropokemon"); //Convertir a objeto el textbox de numero de pokemon
document.getElementById("btnbuscar").addEventListener("click",filtrar); //listener de boton filtrar o buscar
document.getElementById("filtrouno").addEventListener("toggle",fnOcultarTxBx) //listener de cambios en menu desplegable 1
document.getElementById("filtrodos").addEventListener("change",fnMenuDos);


function fnFiltadoAlfabetico(){
  
}

function fnMenuDos(){
  console.log("cambio de menu");
  if(objFiltoDos.option.value =="water"){
    console.log("cambio a agua");
  }
}

function filtrar(){
  
  fnFiltradoTipo(data2);
}

function fnOcultarTxBx(){

  console.log(objFiltoUno.value);
  if(objFiltoUno.value==1){

  }
}


 