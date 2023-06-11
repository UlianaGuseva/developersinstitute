const express = require('express')
const router = express.Router()

const {
    _insertLogin,
    _insertRegister
 } = require('../controllers/loginregister.js')

router.post('/login', _insertLogin)
router.post('/register', _insertRegister)

module.exports = {
    router
}