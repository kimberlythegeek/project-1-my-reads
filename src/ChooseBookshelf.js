import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

/**
* @description Represents a dropdown to select a new shelf for a book
*/
class ChooseBookshelf extends Component {

  constructor(props) {
    super(props);
    // If shelf is defined, set default value to current shelf
    if(props.shelf) {
      this.state = { value: props.shelf };
    }
  }

  state = {
    value: 'none'
  }

  /**
  * @description Event handler for changes in dropdown input
  */
  handleChange = event => {
    const newValue = event.target.value;
    // Update BooksAPI when a book is moved to a different bookshelf
    BooksAPI.update(this.props.book, newValue)
      .then(() => {
        // Update parent component to match changes
        this.props.updateBooks();
      });
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          {/* Disable "none" if on a bookshelf.
              Currently there is no way to remove books from a bookshelf. */}
          <option value="none" disabled={this.state.value !== "none"}>None</option>
        </select>
      </div>
    );
  }
}

export default ChooseBookshelf;
