import React from 'react';
import ChooseBookshelf from './ChooseBookshelf';
import placeholder from './icons/placeholder.png';

/**
* @description Represents a book
*/
const Book = ({ book, shelf, updateBooks, books }) => (
  <li>
    <div className="book">
      <div className="book-top">
      {book.imageLinks && (
        <div
          className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}
          ></div>
      )}
      {!book.imageLinks && (
        <div
          className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url(${placeholder})` }}
          ></div>
      )}
        <ChooseBookshelf
          book={book}
          shelf={shelf}
          updateBooks={updateBooks}
          books={books}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && (
          book.authors.map(author => (
            <div key={author}>{author}</div>
          ))
        )}
      </div>
    </div>
  </li>
);


export default Book;
