const route = require('express').Router()


route.get('/', (req, res) => {
   res.render('get-started')
})

module.exports = {
   route
}