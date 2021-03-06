import React, { Component } from 'react';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

/**
* @description Represents a page to search for books
*/
class SearchPage extends Component {

  state = {
    searchResults: []
  }

  /**
  * @description Updates view when search results change
  */
  handleSearch = (results) => {
    this.setState({searchResults: results});
  }

  render() {
    const { updateBooks, books } = this.props;
    return (
      <div className="search-books">
        <SearchForm onSearch={this.handleSearch} />
        <SearchResults
          searchResults={this.state.searchResults}
          updateBooks={updateBooks}
          books={books}
        />
      </div>
    );
  }
}

export default SearchPage;
