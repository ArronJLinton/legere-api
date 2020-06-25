const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/api/authors', (req, res) => {
  db.Author.findAll({
    // INNER JOIN on books
    include: [db.Book]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.get('/api/author/:id', (req, res) => {
  db.Author.findAll({
    where: {
      id: req.params.id
    },
    // INNER JOIN on books
    include: [db.Book]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.post('/api/author', (req, res) => {
  /*
    req.body = {
      firstName: 'J.K.'
      lastName: 'Rowling'
    }
   */
  db.Author.create(req.body)
  .then((response) => res.status(200).json(response))
  .catch(error => res.status(500).json(error))
})

module.exports = router;