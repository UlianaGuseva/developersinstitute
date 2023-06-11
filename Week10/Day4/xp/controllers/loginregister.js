const {insertLogin, 
    insertRegister, 
    insertLogintoTable
} = require('../modules/loginregister.js')
const bcrypt = require('bcrypt')

const _insertLogin = async(req, res) => {
    console.log(req.body.username);
    insertLogin(req.body.username.toLowerCase())
    .then(async data => {
        console.log(data);

        if(data.length === 0) return res.status(404).json({msg:'does not exist'})
        const match = await bcrypt.compare(req.body.password, data[0].password)
        if(!match) return res.status(400).json({msg:"wrong password"})
        insertLogintoTable(data[0].username, data[0].password )
        .then(data => {
            console.log(data)
        }) 
        .catch (e => {
            console.log(e);
        })
        res.json(data)

    })
    .catch(err=>{
        console.log(err);
        res.status(404).json({msg:err.message})
    })
}

const _insertRegister = async (req, res) => {
    const data = req.body
    console.log(req.body);
    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hash(data.password, salt)
    console.log("test req.body", req.body);
    const lower_username = data.username.toLowerCase()
    insertRegister(lower_username, hash, data.firstname, data.lastname, data.email )
    .then(data => {
        console.log("data", data);
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
        res.status(404).json({msg:err.message})
    })
}

module.exports={
    _insertLogin,
    _insertRegister
}