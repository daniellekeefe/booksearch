const router = require("express").Router();
const bookRoutes = require("./books");
//help from book activity
// Book routes
router.use("/books", bookRoutes);

module.exports = router;
