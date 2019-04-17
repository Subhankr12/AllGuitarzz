const route = require('express').Router()

route.get('/', async (req, res) => {
   res.render('chords', {
      user: req.user
   })
})


module.exports = {
   route
}