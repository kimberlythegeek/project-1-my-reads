import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookshelfPage from './BookshelfPage';
import SearchPage from './SearchPage';
import PageNotFound from './PageNotFound';
import './App.css';

// Bookshelf titles and corresponding IDs
const bookshelves = [
  { title: 'Currently Reading', name: 'currentlyReading'},
  { title: 'Want to Read', name: 'wantToRead'},
  { title: 'Read', name: 'read'}
]

/**
* @description Represents the Book app
*/
class BooksApp extends React.Component {

  state = {
    books: []
  }

  /**
  * @description Called upon initialization. Sets state to current book data.
  */
  componentDidMount() {
    // Initial call to API
    this.updateBooks();
  }

  /**
  * @description Used to update state.books when changes are made.
  */
  updateBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }));
      });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          {/* Show Search Page when URL path is [baseURL]/search */}
          <Route path="/search" render={() => (
            <SearchPage
              updateBooks={this.updateBooks}
              books={this.state.books}
            />
          )}/>
          {/* Show Bookshelf Page when on base URL path */}
          <Route exact path="/" render={() => (
            <BookshelfPage
              bookshelves={bookshelves}
              books={this.state.books}
              showSearch={this.showSearch}
              updateBooks={this.updateBooks}
            />
          )} />
          {/* 404 Catch-All Page */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp;
