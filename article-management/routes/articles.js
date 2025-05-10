const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articlesController");

router.get("/", articlesController.getArticles);
router.post("/", articlesController.addArticle);
router.put("/:id", articlesController.updateArticle);
router.delete("/:id", articlesController.deleteArticle);

module.exports = router;
