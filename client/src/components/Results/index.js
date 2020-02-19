import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {
  state = {
    savedBooks: []
  };
  //life cycle https://reactjs.org/docs/react-component.html
  componentDidMount() {
    API.savedBooks()
      .then(savedBooks => this.setState({ savedBooks: savedBooks }))
      .catch(err => console.error(err));
  }
  //additional details/help with the search, button etc https://dev.to/iam_timsmith/lets-build-a-search-bar-in-react-120j
  handleSave = book => {
    if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then(deletedBook =>
          this.setState({
            savedBooks: this.state.savedBooks.filter(
              book => book._id !== deletedBook._id
            )
          })
        )
        .catch(err => console.error(err));
    } else {
      API.saveBook(book)
        .then(savedBook =>
          this.setState({
            savedBooks: this.state.savedBooks.concat([savedBook])
          })
        )
        .catch(err => console.error(err));
    }
  };
  //show results
  render() {
    return (
      <div>
        {!this.props.books.length ? (
          <h1 className="text-center">No Results to Display</h1>
        ) : (
          <div>
            {this.props.books.map(result => (
              <div className="card mb-3" key={result._id}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      alt={result.title}
                      className="img-fluid"
                      src={result.image}
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">
                        {result.title} by {result.authors}
                      </h5>
                      <p className="card-text">{result.description}</p>
                      <div>
                        <a
                          href={result.link}
                          className="btn btn-outline-primary"
                          target="_blank"
                        >
                          Details
                        </a>
                        <button
                          onClick={() => this.handleSave(result)}
                          className="btn btn-outline-dark"
                        >
                          {this.state.savedBooks
                            .map(book => book._id)
                            .includes(result._id)
                            ? "Unsave"
                            : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Results;
