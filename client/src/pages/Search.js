import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
  state = {
    value: "",
    books: []
  };

  componentDidMount() {
    this.searchBook();
  }
//defineing what will be returned for the book input into the search field
  defineBook = bookData => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink
    };
  };
//help from Stu_ReactRouter pages
  searchBook = query => {
    API.getBook(query)
      .then(res =>
        this.setState({
          books: res.data.items.map(bookData => this.defineBook(bookData))
        })
      )
      .catch(err => console.error(err));
  };
//input change from https://stackoverflow.com/questions/43959116/using-a-single-handleinputchange-method-to-for-multiple-input-fields-react
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };
//show results
  render() {
    return (
      <div>
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container">
          <h2>Your search results :)</h2>
          <Results books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default Search;
