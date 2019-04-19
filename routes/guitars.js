const route = require('express').Router()
const {
   Guitars
} = require('../db')

route.get('/', async (req, res) => {
   let guitarData = await Guitars.findAll()
   res.render('guitars', {
      user: req.user,
      guitarData
   })
})


module.exports = {
   route
}