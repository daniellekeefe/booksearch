import axios from "axios";
//npm i axios and leverage axios from the API
export default {
  //book query
  getBook: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Deletes the book & id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  },
  // Saves a book to DB
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  },
  // Retreive book from DB
  savedBooks: function() {
    return axios.get("/api/books").then(result => result.data);
  }
};
