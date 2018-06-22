import React from 'react';
import Book from './Book';

/**
* @description Represents a list of search results
*/
const SearchResults = ({ searchResults, books, updateBooks }) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {/* Only call map() if searchResults is defined and contains data */}
      {searchResults && searchResults.length > 0 &&
        (searchResults.map((book) =>
          <Book
            key={book.id}
            book={book}
            updateBooks={updateBooks}
            books={books}
          />
        ))
      }
    </ol>
  </div>
);

export default SearchResults;
