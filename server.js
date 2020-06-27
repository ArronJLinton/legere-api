const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./controllers/book.js'));
// app.use(require('./controllers/authorController.js'));
app.use(require('./controllers/chapter.js'));

db.sequelize.sync({ force: false }).then(function(){
  app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
  });
})
