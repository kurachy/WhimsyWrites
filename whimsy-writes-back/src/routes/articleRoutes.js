const express = require('express');
const ArticleController = require('../controllers/articleController');

const router = express.Router();

router.get('/articles', ArticleController.getArticlesWithUserData);
router.get('/articles/user/:userId', ArticleController.getArticlesByUserId)

module.exports = router;
