const mongoose = require('mongoose')

// const url = `mongodb+srv://HP:Hp123456789@demo.fxg6f.mongodb.net/demo?retryWrites=true&w=majority`;

const url = `mongodb+srv://HP:Hp123456789@demo.fxg6f.mongodb.net?retryWrites=true&w=majority`;

const data = mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

module.exports = data