const express = require('express');
const router = express.Router();
const db = require('../models');



// router.get('/api/book/:id', (req, res) => {
//   db.Book.findAll({
//     where: {
//       id: req.params.id
//     },
//     include: [db.Note]
//   })
//   .then((response) => res.status(200).json(response))
//   .catch(error => res.status(500).json(error))
// });

router.post('/api/book', (req, res) => {
  /*
    req.body = {
      title: 'Chamber of Secrets'
      coverPhoto: <url>,
      authorId: 1
    }
   */
  db.Book.create(req.body)
  .then((response) => res.status(200).json(response))
  .catch(error => res.status(500).json(error))
})

// router.delete('/api/book/:id', (req, res) => {
//   db.Book.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then((response) => res.status(200).json(response))
//   .catch(error => res.status(500).json(error))
// })


module.exports = router;