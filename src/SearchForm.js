import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';


/**
* @description Represents a search input form
*/
class SearchForm extends Component {

  state = {
    searchTerm: ''
  };

  /**
  * @description Event handler for search input
  */
  handleChange = event => {
    const newValue = event.target.value;
    this.setState({searchTerm: newValue});
  }

  /**
  * @description When search term changes, call API search again
  */
  componentDidUpdate() {
    BooksAPI.search(this.state.searchTerm)
      .then(results => {
        // Pass new results to SearchResults component
        this.props.onSearch(results);
      });
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            value={this.state.searchValue}
            onChange={this.handleChange}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>
    );
  }
}

export default SearchForm;
