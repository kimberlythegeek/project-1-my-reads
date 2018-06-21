import React from 'react';
import Book from './Book';

/**
* @description Represents a list of search results
*/
const SearchResults = (props) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {/* Only call map() if searchResults is defined and contains data */}
      {props.searchResults && props.searchResults.length > 0 &&
        (props.searchResults.map((book) =>
          <Book
            key={book.id}
            book={book}
            updateBooks={props.updateBooks}
            books={props.books}
          />
        ))
      }
    </ol>
  </div>
);

export default SearchResults;
