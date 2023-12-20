const express = require('express');
const ArticleController = require('../controllers/articleController');

const router = express.Router();

router.get('/articles', ArticleController.getArticlesWithUserData);

module.exports = router;
