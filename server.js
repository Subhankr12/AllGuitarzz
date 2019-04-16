const express = require('express')
const session = require('express-session')
const {
   db
} = require('./db')
const passport = require('./passport')
const path = require("path")

const app = express()

app.set('view engine', 'hbs')


app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))

app.use(session({
   secret: 'em2b462m4hb6v2j4hv5 23n4jv',
   resave: false,
   saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(`assets`));
app.use('/login', (require('./routes/login').route))
app.use('/signup', (require('./routes/signup').route))
app.use('/home', (require('./routes/home').route))
app.use('/get-started', (require('./routes/get-started').route))

app.get('/', (req, res) => {
   res.redirect('/get-started')
})

app.get('/login', (req, res) => {
   if (!req.user) {
      return res.redirect('/login')
   }
   res.redirect('/home')
})


db.sync({

   })
   .then(() => {
      app.listen(8877, () => {
         console.log('Started on http://localhost:8877')
      })
   })