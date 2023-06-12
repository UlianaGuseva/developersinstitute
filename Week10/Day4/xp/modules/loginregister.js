const {db} = require('../config/db.js')

const insertLogin = (user) => {
    console.log(user);
    return db('register')
    .select('*')
    .where({username:user})
}


const insertLogintoTable = (username, password) => {
    return db('login')
    .insert({username, password})
    .returning('*')
}

const updateRegisterTable = (time, username) => {
    return db('register')
    .update({last_login:time})
    .where({username:username})
    .returning('*')
}


const insertRegister = (username, password, firstname, lastname, email) => {
    console.log("db register");
    try{ 
        return db('register')
        .insert({username, password, firstname, lastname, email})
        .returning('*')
    } catch (e){
    console.log("error", e);
    return e
   }
}

module.exports= {
    insertLogin,
    insertRegister,
    insertLogintoTable,
    updateRegisterTable
}