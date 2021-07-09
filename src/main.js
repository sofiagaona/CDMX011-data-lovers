
import data from './data/pokemon/pokemon.js';

import { sortData } from './data.js';
import {filterData} from './data.js';

var sortby="name";
var soryOrder="asc";


var propertyFiltro1= Object.keys(data.pokemon[0]).sort()
console.log(propertyFiltro1)
console.log(addOptions(propertyFiltro1))
//console.log (sortData (data,sortby,soryOrder));

function addOptions(prop) {
  const objFiltoUno = document.getElementById("filtrouno");
  
  for (let value in prop) {
   var option = document.createElement("option");
   option.text = prop[value];
   objFiltoUno.add(option);
  }
  }




 



/*var filterAlphabe=filterAlphabe(data)
console.log(filterAlphabe)*/
// elementos del filto
// Por Numero de pokemon
// Por Tipo de Pokemon
// Por Orden Alfabetico
let objTexBox1 = document.getElementById("txbxnumeropokemon"); //Convertir a objeto el textbox de numero de pokemon
document.getElementById("btnbuscar").addEventListener("click",filtrar); //listener de boton filtrar o buscar
document.getElementById("filtrouno").addEventListener("toggle",fnOcultarTxBx) //listener de cambios en menu desplegable 1

//document.getElementById("test").innerHTML = data.pokemon[0]['size']['height'];


/*function fnfiltradoTipo(){
  console.log(objTexBox1.value);
  document.getElementById("test").innerHTML = data['pokemon'][objTexBox1.value-1]['num'];
  document.getElementById("test").innerHTML = data['pokemon'][objTexBox1.value-1]['name'];
}*/


/*function fnFiltadoAlfabetico(data){
  console.log(data)
  return data
  
}*/

/*function fnOcultarTxBx(){

  console.log(objFiltoUno.value);
  if(objFiltoUno.value==1){

  }
}*/


 