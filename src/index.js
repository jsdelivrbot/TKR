import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/Search_bar';
import BookList from './components/book_list';
import BookDetail from './components/book_detail';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      selectedBook: null
    };

    this.bookSearch("React JS");
  }

  bookSearch(term) {
    const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=${term}`;
    fetch(BASE_URL, {method:'GET'})
      .then(res => res.json())
      .then(
        (result) => {
        let {items} = result;
        this.setState({
          books: items,
          selectedBook: items[0]
        });
        console.log(this.state.books);
      });
  }
  render() {
    const bookSearch = _.debounce(term => {
      this.bookSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={bookSearch} />
        <BookDetail book={this.state.selectedBook} />
        <BookList
          onBookSelect={selectedBook => this.setState({selectedBook})}
          books={this.state.books}
        />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector(".container"));