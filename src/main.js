
import data from './data/pokemon/pokemon.js';
import data2 from './data/pokemon/types.js';
import { sortData } from './data.js';
import {filterData} from './data.js';

console.log(data);
const objFiltroDos = document.getElementById("filtrodos");
const objFiltroUno = document.getElementById("filtrouno");

document.getElementById("filtrouno").addEventListener("change", addPropFiltro2);
//document.getElementById("btnbuscar").addEventListener("click",filtrar);

var propertyFiltro1= Object.keys(data.pokemon[0]) //recuperamos propiedades
     
propertyFiltro1 = propertyFiltro1.filter(function(exc) {
  if(exc != 'size' && exc != 'img' && exc != 'weaknesses' && exc != 'about'&& exc != 'generation' && exc != 'pokemon-rarity' && exc != 'encounter' && exc != 'spawn-chance' && exc  != 'buddy-distance-km'){
    return true
  }
  else{
    return false
  }
});

     addOptions(propertyFiltro1) //llena el selector del filtro 1
     addListPok(data) //Muestra todos los pokemons en pantalla



function addListPok(data){ // En esta funcion llenamos la lista para mostrar todos lo pokemon en pantalla
  var listPok = data.pokemon.map(function(pok){
  return '<li><figure><a href=pokemon.html><img src='+pok.img+'></a><figure> '+pok.name+'</li>'
})
document.getElementById("listPok").innerHTML = listPok.join(""); //con el metodo join quitamos , de la lsta para que no aparezca en pantalla la coma despues de cada imag
}


function addOptions(prop) { //En esta funciòn llenamos el filtro1 con las propieades excepto img y about

  for (let value in prop) {
    var option = document.createElement("option");
    option.text = traductor(prop[value]);
    option.value=prop[value];
    objFiltroUno.add(option);
   
  }
  
}

function addPropFiltro2() { //En esta funciòn llenamos el filtro1 con las propieades excepto img y about

  let optionFiltro1= objFiltroUno.value;
  
  let tipo;
  let tipoArray="";
  let arrayProp=[];
  
  for (let i=0; i<=data.pokemon.length-1; i++){
   
    if(optionFiltro1=== "name"){
      
      tipo = Object.values(data.pokemon[i][optionFiltro1]);
      tipoArray="";
      for(let k=0; k<=tipo.length-1;k++){
        tipoArray=tipoArray+tipo[k];
      }
      arrayProp.push(tipoArray);
    }
    else{
    for(let j=0; j<=data.pokemon[i][optionFiltro1].length-1;j++){
      tipo = Object.values(data.pokemon[i][optionFiltro1][j]);
      tipoArray="";
      for(let k=0; k<=tipo.length-1;k++){
        tipoArray=tipoArray+tipo[k];
      }
      arrayProp.push(tipoArray);
    }
   }
  }
  console.log(arrayProp);
  let subcategoria= arrayProp.filter((item, index)=>{
    
    return arrayProp.indexOf(item)===index;
  })
  
  subcategoria.sort();
  
  document.getElementById("filtrodos").innerHTML="";
  for (let value in subcategoria) {
    let option = document.createElement("option");
    
    if (optionFiltro1==="name"){
      option.text = subcategoria[value];
      option.value=subcategoria[value];
    }
    else{
    option.text = traductor(subcategoria[value]);
    option.value=subcategoria[value];
    }
    objFiltroDos.add(option);
    
  }

}
  

function traductor(palabra){
  switch (palabra){
    case "name": return "Nombre"
    break;
    case "num": return "Número"
    break;
    case "egg": return "Huevo"
    break;
    case "evolution": return "Evolución"
    break;
    case "quick-move": return "Movimiento rapido"
    break;
    case "resistant": return "Resistencia"
    break;
    case "special-attack": return "Ataque especial"
    break;
    case "stats": return "Estadisticas"
    break;
    case "type": return "Tipo"
    break;
    case "bug": return "Insecto"
    break;
    case "dark": return "Maligno"
    break;
    case "dragon": return "Dragón"
    break;
    case "electric": return "Electrico"
    break;
    case "fairy": return "Ada"
    break;
    case "fighting": return "Pelea"
    break;
    case "fire": return "Fuego"
    break;
    case "flying": return "Volador"
    break;
    case "ghost": return "Fantasma"
    break;
    case "grass": return "Planta"
    break;
    case "ground": return "Tierra"
    break;
    case "ice": return "Hielo"
    break;
    case "normal": return "Normal"
    break;
    case "poison": return "Veneno"
    break;
    case "psychic": return "Psiquico"
    break;
    case "rock": return "Roca"
    break;
    case "steel": return "Metal"
    break;
    case "water": return "Agua"
    break;
    default: return "no definido"
   
  }
}
 
















 