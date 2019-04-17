const route = require('express').Router()

route.get('/', async (req, res) => {
   res.render('about', {
      user: req.user
   })
})


module.exports = {
   route
}