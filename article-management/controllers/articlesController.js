const db = require("../db");

exports.getArticles = (req, res) => {
  const { author, title } = req.query;
  let query = "SELECT * FROM articles WHERE 1=1";
  const params = [];

  if (author) {
    query += " AND author = ?";
    params.push(author);
  }
  if (title) {
    query += " AND title LIKE ?";
    params.push(`%${title}%`);
  }

  db.query(query, params, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addArticle = (req, res) => {
  const { title, content, author } = req.body;
  db.query(
    "INSERT INTO articles (title, content, author) VALUES (?, ?, ?)",
    [title, content, author],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Article added successfully", id: result.insertId });
    }
  );
};

exports.updateArticle = (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  db.query(
    "UPDATE articles SET title=?, content=?, author=? WHERE id=?",
    [title, content, author, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Article updated successfully" });
    }
  );
};

exports.deleteArticle = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM articles WHERE id=?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Article deleted successfully" });
  });
};
