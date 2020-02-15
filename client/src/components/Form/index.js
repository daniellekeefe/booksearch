import React from "react";

function Form(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="search">
            <h2>Come on let's search for some books....!</h2>
          </label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Let's find you a book..."
            id="search"
          />
          <button
            onClick={props.handleFormSubmit}
            className="btn btn-outline-primary"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
