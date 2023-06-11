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


const insertRegister = (username, password, firstname, lastname, email) => {
    console.log("db register");
    try{ return db('register')
    .insert({username, password, firstname, lastname, email})
    .returning('*')
    }
   catch (e){
    return e
   }
}

module.exports= {
    insertLogin,
    insertRegister,
    insertLogintoTable
}