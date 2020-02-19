const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema defined allow us to use mongoose/mongo DB
const bookSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  authors: { type: Array },
  description: { type: String },
  image: { type: String },
  link: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
