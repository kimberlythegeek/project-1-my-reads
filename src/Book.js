import React, { Component } from 'react';
import ChooseBookshelf from './ChooseBookshelf';
import placeholder from './icons/placeholder.png';

/**
* @description Represents a book
*/
class Book extends Component {
  render() {
    const { book, shelf, updateBooks, books } = this.props;
    const image = (!book.imageLinks) ? placeholder : book.imageLinks.thumbnail;
    return (
      <li>
        <div className="book">
          <div className="book-top">

            <div
              className="book-cover"
              style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}
              ></div>
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
  }
}


export default Book;
