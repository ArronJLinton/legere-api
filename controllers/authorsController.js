const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/api/author', (req, res) => {
  db.Author.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Book]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

// router.get('/api/author/:id', (req, res) => {
//   db.Author.findAll({
//     where: {
//       id: req.params.id
//     },
//     include: [db.Book]
//   })
//   .then(results => res.json(results))
//   .catch(error => res.json(error))
// });

router.post('/api/author', (req, res) => {
  const { firstName, lastName, title, summary, bookCover } = req.body;
  db.Author.findOrCreate({
    where: { firstName, lastName}
    })
  .then((data) => {
    const AuthorId = data[0].dataValues.id
   return db.Book.create({title, summary, bookCover, AuthorId})
  })
  .then((response) => res.status(200).json(response))
  .catch(error => res.status(500).json(error))
})

module.exports = router;