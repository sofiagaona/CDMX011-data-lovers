
export const filterData = (data, condition) => {

  var filterByCondition= Object.filter((pokemon)=>(pokemon.name=condition));

  //var descriptionPok= data.pokemon.find(pokemon => pokemon.name === "charizard");
  return filterByCondition;
};


export const sortData=(data, sortBy, sortOrder)=>{

if (sortOrder==="asc"){
    return data.pokemon.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
  }
  else{
    return data.pokemon.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
  }
}

export const fnFiltradoTipo = (data) => {
  
  //respuesta = respuesta + data['pokemon'][i]['type'];
  
  console.log(data.pokemon.key);
  
  
  //return respuesta;
 
};

