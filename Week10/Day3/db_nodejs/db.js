const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: 'S@mbation1',
        database: 'dvdrental',
    }
})

// db.select('city', 'city_id')
// .from('city')
// .then(rows => {
//     console.log(rows);
// })
// .catch(err=>{
//     console.log(err);
// })

// db('city')
// .select('city', 'city_id')
// .where({city:"Callao"})
// .then(rows => {
//     console.log(rows);
// })
// .catch(err=>{
//     console.log(err);
// })

db('city')
// .select('city', 'city_id')
.del()
.where({city_id:101})
.update({city:'Jerusalem'})
.returning('*')
.then(rows => {
    console.log(rows);
})
.catch(err=>{
    console.log(err);
})
