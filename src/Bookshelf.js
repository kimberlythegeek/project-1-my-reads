import React from 'react';
import Book from './Book';

/**
* @description Represents a Bookshelf
*/
const Bookshelf = ({ bookshelfName, bookshelfID, books, updateBooks }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{bookshelfName}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {/* Filter books array for books on current bookshelf */}
        {books.filter((book) => {
          return book.shelf === bookshelfID;
        }).map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={bookshelfID}
            updateBooks={updateBooks}
          />
        ))}
      </ol>
    </div>
  </div>
);

export default Bookshelf;
