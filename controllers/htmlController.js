// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/library", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/library.html"));
});

router.get("/bookDetail/:id", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/bookDetail.html"));
});

router.get("/addBook", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/addBook.html"));
});

module.exports = router;
