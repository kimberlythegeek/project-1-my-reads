import React, { Component } from 'react';
import ChooseBookshelf from './ChooseBookshelf';

/**
* @description Represents a book
*/
class Book extends Component {
  render() {
    const { book, shelf, updateBooks } = this.props;
    const image = (!book.imageLinks) ? '' : book.imageLinks.thumbnail;
    console.log(book);
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
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors.map(author => (
              <div>{author}</div>
            ))}
          </div>
        </div>
      </li>
    );
  }
}


export default Book;
