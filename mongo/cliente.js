
//import { getInventors, getInventor, addInventor, updateInventor, deleteInventor } from "./inventors.js";
import {getUserbyemail, getUsers, getUser, pushUser, updateUser, deleteUser} from "./users.js";
import { getInventors, getInventor, addInventor, updateInventor, deleteInventor } from "./inventors.js";

try {
    console.log(await getInventors());
    //console.log(await getInventors());
    //console.log(await getInventor('6153b0641a071df5278126ed'));
    // console.log(await addInventor({
    //         "first": "Pepe",
    //         "last": "Gutierrez",
    //         "year": 1879
    // }));
    // console.log(await updateInventor({
    //     _id: "6155087614a2dfea1336f666",
    //     first: "Pepe 2",
    //     last: "Gutierrez 2",
    //     year: 2000
    // }));
    // console.log(await deleteInventor('6155087614a2dfea1336f666'));
    
    //console.log(await getUsers());
    //console.log(await getUser('615be75f1e86b12dc9dcfcb0'));
    //console.log(await getUserbyemail('art_parkinson@gameofthron.es'));
    
    //console.log(await pushUser({
    //    name: "Lionel",
    //    email: "lionel-email@gmail.com",
    //    password: user.password
    //}));
    
    //console.log(await updateInventor({
    //    _id: "615be75f1e86b12dc9dcfcb1",
    //    name: "Carolina",
    //    email: "Pecas",
    //    password: 'how?'
    //}));
    
    //console.log(await deleteUser('615be75f1e86b12dc9dcfcad'));
} catch (error) {    
    // console.log(await deleteInventor('6155087614a2dfea1336f666'));
    console.log(error.message);
    console.log("¡ERROR! Leé el mensaje error para solucionarlo.");
    console.log(error.message);
    console.log("error en el cliente");
}


