import React, { Component } from 'react';
import Book from './Book';

/**
* @description Represents a list of search results
*/
class SearchResults extends Component {
  render() {
    const { searchResults, updateBooks } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {/* Only call map() if searchResults is defined and contains data */}
          {searchResults && searchResults.length > 0 &&
            (searchResults.map((book) =>
              <Book key={book.id} book={book} updateBooks={updateBooks} />
            ))
          }
        </ol>
      </div>
    );
  }
}

export default SearchResults;
