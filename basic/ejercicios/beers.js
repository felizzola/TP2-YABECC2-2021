/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/
const beers = [
  {
    name: "Purple Iris",
    abv: 6.8,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png",
    type: "IPA",
  },
  {
    name: "Orange Blossom Pilsner",
    abv: 5.5,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png",
    type: "Pilsner",
  },
  {
    name: "Purple Iris",
    abv: 6.8,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png",
    type: "APA",
  },
  {
    name: "Darkness",
    abv: 4.2,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png",
    type: "Stout",
  },
  {
    name: "Belgian Wit",
    abv: 5.4,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png",
    type: "Wheat",
  },
  {
    name: "Stolen Fruit",
    abv: 4.6,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png",
    type: "Wheat",
  },
];

// Resolucion:
const beersWithPrice = [];
const beersWithFileNameAndPrice = [];
const beersOrderByType = [];

function createArrays(arr1, arr2){
for (let i = 0; i < arr2.length; i++) {
  const element = arr2[i];
  arr1.push(element);
}
};

// ********** Part 1 **********
function getPrice(beer) {
  let price;
  if (beer.name == "Purple Iris") {
    price = 320;
  } else if (beer.abv >= 5.0) {
    price = 350;
  } else {
    price = 300;
  }
  return price;
}

function getBeersWithProperties() {
  return beers.map((beer) => ({
      name: beer.name,
      abv: beer.abv,
      label: beer.label,
      type: beer.type,
      price: getPrice(beer),
    }));
}
/* 
Array.prototype.push.apply(beersWithPrice, getBeersWithProperties()); */
createArrays(beersWithPrice, getBeersWithProperties());

console.log('---------------------------------------------------------------');
console.log("NEW BEERS ARRAY WITH PRICE:");
console.log('---------------------------------------------------------------');
console.log(beersWithPrice); 


/*****************************************************************************************************************************/
// ********** Part 2 **********

createArrays(beersWithFileNameAndPrice, beersWithPrice);

function fileName(string){

  let labelSize = string.length;
  let since = string.lastIndexOf('/') + 1;
  let file_name = string.substring(since, labelSize);
  return file_name;

};

function addFileName(list){

  list.forEach(element => {
    element.file_name = fileName(element.label);    
  });

};

addFileName(beersWithFileNameAndPrice);

console.log('---------------------------------------------------------------');
console.log("NEW BEERS ARRAY WITH PRICE AND FILE:");
console.log('---------------------------------------------------------------');
console.log(beersWithFileNameAndPrice);   

/*****************************************************************************************************************************/

// ********** Part 3 **********

/* function compare(a,b){
 (a > b)? 1 :((a < b)? -1 : 0);
} */

  beers.sort((a, b) => {
  let type1 = a.type.toUpperCase();
  let type2 = b.type.toUpperCase();

  if(type1 > type2)
  {
    return 1;
  } 
   if(type1 < type2)
   {
    return -1;
   }
    return 0;
}); 

console.log('---------------------------------------------------------------');
console.log("Beers ORDER BY TYPE:");
console.log('---------------------------------------------------------------');
console.log(beers);

/*****************************************************************************************************************************/