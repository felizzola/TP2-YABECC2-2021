// 2. CRUD de user
import { ObjectId } from 'bson';
import {getConnection} from './connection.js';

const DB_TP = "sample_tp2";
const COLLECTION_USERS = "users";

//      2.1. getUserbyemail
async function getUserbyemail(email){
    const clientmongo = await getConnection();
    const user = clientmongo
            .db(DB_TP)
            .collection(COLLECTION_USERS)
            .findOne({email: email});
    return user; 
}
//      2.2. getUsers
async function getUsers(){
    const clientmongo = await getConnection();
    const users = clientmongo
            .db(DB_TP)
            .collection(COLLECTION_USERS)
            .find()
            .toArray();
    return users;        
}
//      2.3. getUser(id)
async function getUser(id){
    const clientmongo = await getConnection();
    const user = clientmongo
            .db(DB_TP)
            .collection(COLLECTION_USERS)
            .findOne({_id: new ObjectId(id)});
    return user;        
}
//      2.4. pushUser()  pista para encriptar la password modulo bcryptjs
async function pushUser(user){
    const clientmongo = await getConnection();
    const result = clientmongo.db(DB_TP)
            .collection(COLLECTION_USERS)
            .insertOne(user);
    return result;        
}
//      2.5. updateUser()
async function updateUser(user){
    const clientmongo = await getConnection();
    const query = {_id: new ObjectId(user._d)};
    const newValues = {    
        $set:{
            name: user.name,
            email: user.email,
            password: user.password
        }
    };
    const result = await clientmongo.db(DB_TP)
                    .collection(COLLECTION_USERS)
                    .updateOne(query, newValues);
    return result;                
}
//      2.6. deleteUser()
async function deleteUser(id){
    const clientmongo = await getConnection();
    const result = clientmongo.db(DB_TP)
            .collection(COLLECTION_USERS)
            .deleteOne({_id: new ObjectId(id)});
    return result;     
}

export {getUserbyemail, getUsers, getUser, pushUser, updateUser, deleteUser}