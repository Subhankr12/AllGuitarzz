const route = require('express').Router()

route.get('/', async (req, res) => {
   res.render('guitars', {
      user: req.user
   })
})


module.exports = {
   route
}