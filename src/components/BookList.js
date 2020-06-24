import React, { Component } from "react";
import axios from "axios";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [], keyword: "", cart: 0 };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onBorrowBook = this.onBorrowBook.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => {
        this.setState({ books: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onHandleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({ [name]: value });
  }

  onSearch(event) {
    this.setState({
      keyword: this.state.keyword,
    });
  }

  onBorrowBook() {
    let { cart } = this.state;
    this.setState({
      cart: cart + 1,
    });
  }

  render() {
    let { books, keyword, cart } = this.state;
    if (keyword) {
      books = books.filter((book) => {
        return book.title.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    return (
      <div className="row">
        <h4 className="col-12 text-danger">Cart ({cart})</h4>
        <br />
        <div className="col-6">
          <div className="input-group">
            <input
              type="text"
              name="keyword"
              value={keyword}
              onChange={this.onHandleChange}
              className="form-control shadow-none"
              placeholder="Nhập từ khoá..."
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary shadow-none"
                type="button"
                onClick={this.onSearch}
              >
                Tìm
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Cover</th>
                <th scope="col">Name</th>
                <th scope="col">Rent</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => {
                return (
                  <tr key={book._id}>
                    <td>
                      <img src={book.coverUrl} alt="cover" width={"64px"} />
                    </td>
                    <td className="align-middle">{book.title}</td>
                    <td className="align-middle">
                      <button
                        type="button"
                        class="btn btn-primary shadow-none"
                        onClick={this.onBorrowBook}
                      >
                        Borrow
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BookList;
