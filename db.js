const Sequelize = require('sequelize')

const db = new Sequelize({
   dialect: 'sqlite',
   storage: __dirname + '/users.db'
})

const Users = db.define('user', {
   username: {
      type: Sequelize.STRING(30),
      unique: false,
      allowNull: false
   },
   password: {
      type: Sequelize.STRING(30),
   },
   email: {
      type: Sequelize.STRING(30)
   },
   fbToken: {
      type: Sequelize.TEXT
   },
   fbId: {
      type: Sequelize.STRING(30),
      unique: true
   }
})

const Home = db.define('home', {
   info: {
      type: Sequelize.TEXT
   }
})

module.exports = {
   db,
   Users,
   Home
}