
export const filterData = (data, filtroUno, filtroDos) => {

 
 

  for (let i=0; i<=data.pokemon.length -1; i++){
  
    const filterObject = (data, filtroUno, filtroDos) => 
   Object.keys(data.pokemon).reduce((acc, val) => 
   (obj[val][filter] === filterValue ? acc : {
       ...acc,
       [val]: obj[val]
   }                                        
), {});  

      if ((data.pokemon[i][filtroUno][0]==filtroDos)||(data.pokemon[i][filtroUno][1]==filtroDos)){
        console.log(data.pokemon[i].name);
      }
    
      let objDataFilt= data.pokemon[i][filtroUno];
  }
   

  //var descriptionPok= data.pokemon.find(pokemon => pokemon.name === "charizard");
  return objDataFilt
};


export const sortData=(data, sortBy, sortOrder)=>{

if (sortOrder==="asc"){
    return data.pokemon.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
  }
  else{
    return data.pokemon.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
  }
}
 

export const fnFiltradoTipo = (data2) => {
  
  //respuesta = respuesta + data['pokemon'][i]['type'];
  
  //console.log(Object.keys(data.pokemon[0].name));
  console.log(data2);

  
  
  //return respuesta;
 
};

