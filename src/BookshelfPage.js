import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

/**
* @description Represents a page to display bookshelves
*/
const BookshelfPage = ({ bookshelves, books, updateBooks }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      {bookshelves.map(bookshelf => (
        <Bookshelf
          key={bookshelf.name}
          bookshelfName={bookshelf.title}
          bookshelfID={bookshelf.name}
          books={books}
          updateBooks={updateBooks}
        />
      ))}

    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

export default BookshelfPage;
