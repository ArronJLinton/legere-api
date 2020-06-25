const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./controllers/authorsController.js'));
app.use(require('./controllers/booksController.js'));
// app.use(require('./controllers/notesController.js'));

db.sequelize.sync({ force: true }).then(function(){
  app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
  });
})
