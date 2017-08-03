const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['firstName', 'lastName', 'email', 'imageUrl', 'description', 'id']
  })
    .then(users => {
      res.json(users)
    })
    .catch(next)
})

router.get('/groups/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(foundUser => foundUser.getGroup())
    .then(usersGroups => {res.json(usersGroups)})
    .catch(next)
})

router.get('/friends/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(foundUser => foundUser.getFriend())
    .then(usersFriends => {res.json(usersFriends)})
    .catch(next)
})

