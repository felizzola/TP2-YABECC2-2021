// CRUD de usuarios

const fs = require('fs');
const PATH = './data/users.json';

// lectura
function getUsers(){
    return JSON.parse(fs.readFileSync(PATH, 'utf-8'));
}

function getUser(id){
    return getUsers().find(user => user._id === id);
}

function getUserbyEmail(email){
    return getUsers().find(user => user.email === email);
}

// alta
function pushUser(user){
    // NO me envian el ID
    // generar un ID
    let users = getUsers();
    user._id =  Date.now().toString(16) + Math.random().toString(36).substring(2);
    users.push(user);
    fs.writeFileSync(PATH, JSON.stringify(users, null, ' '));
    return getUser(user._id);
}

// update
function updateUser(user){
    //TODO: Para ejercicio
    let users = getUsers();
    let userIndex = users.findIndex((element => element._id == user._id));
    users[userIndex].name = user.name;
    users[userIndex].email = user.email;
    users[userIndex].password = user.password;
    fs.writeFileSync(PATH, JSON.stringify(users, null, ' '));
}

// delete
function deleteUser(id){
    //TODO: Para ejercitar
    // slice
    let users = getUsers();
    let userIndex = users.findIndex((user => user._id == id));
    users.splice(userIndex,1);
    fs.writeFileSync(PATH, JSON.stringify(users, null, ' '));
}

module.exports = {getUser, getUsers, getUserbyEmail, pushUser, updateUser, deleteUser};
