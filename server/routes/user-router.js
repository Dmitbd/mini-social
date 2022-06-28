const express = require('express')

const UserCtrl = require('../controllers/user-cntr')

const router = express.Router()

router.post('/create-user', UserCtrl.createUser)
// router.put('/user/:id', UserCtrl.updateUser)
// router.delete('/user/:id', UserCtrl.deleteUser)
// router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

module.exports = router
