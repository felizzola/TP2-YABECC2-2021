const fs = require('fs');
const InventorData = require('./inventor');
const UserData = require('./user');

//const data = fs.readFileSync('./text.txt','utf-8');

//console.log(data);

//console.log(InventorData.getInventor(6));

// const inventor = { "_id": 8, "first" : "pablo", "last": "fernandez", "year": 1879 };

// InventorData.pushInventor(inventor);

// console.log(InventorData.getInventors());
/* 
{
    "_id": 3,
    "first": "Galileo",
    "last": "Galilei",
    "year": 1564
   }, */


//const user = {
//    "name":"Juan Perez",
//    "email":"juanperez@gameofthron.es",
//    "password":"abc123"
//}

//console.log(UserData.pushUser(user));

//const inventor2 = {"_id" : 3 , "first" : "andrea" , "last" : "felizzola" , "year" : 1989 };

//InventorData.updateIventor(3, inventor2);
//console.log("*****UPDATE OF INVENTOR*****");
//console.log(InventorData.getInventors());
 
/*  const user2 = {
    "_id": "59b99dcdcfa9a34dcd7885e7",
    "name": "Andrea Felizzola",
    "email": "felizzolandre@gmail.com",
    "password": "fruit"
}

UserData.updateUser(user2);
console.log("*****UPDATE OF USER*****");  
console.log(UserData.getUsers()); */

/* UserData.deleteUser("59b99dbbcfa9a34dcd7885c3");
console.log("*****DELETE USER*****");  
console.log(UserData.getUsers());  */

InventorData.deleteInventor(1);
console.log("*****DELETE INVENTOR*****");
console.log(InventorData.getInventors());
 