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

const Guitars = db.define('guitar', {
   guitar_image: {
      type: Sequelize.STRING(200)
   },
   guitar_name: {
      type: Sequelize.STRING(50),
      unique: false,
      allowNull: false
   },
   guitar_desc: {
      type: Sequelize.TEXT
   }
})

const Chords = db.define('chord', {
   chordName: {
      type: Sequelize.STRING(20),
      unique: false,
      allowNull: false
   },
   chordSymbol: {
      type: Sequelize.STRING(10),
      unique: false,
      allowNull: false
   },
   chordImage: {
      type: Sequelize.STRING(200)
   },
   chordDescription: {
      type: Sequelize.TEXT
   }
})

module.exports = {
   db,
   Users,
   Guitars,
   Chords
}