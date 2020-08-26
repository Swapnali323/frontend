import React, { Component } from "react";
import axios from "axios";

export class SearchProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      products: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    // const Post = {
    //   id: this.state.flightId,
    // };
    axios.get("http://localhost:3001/products/prod/" + this.props.match.params.name
   
    )
      // .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({products: response.data});
      });
  }

  render() {
    const Product = this.state.products.map((pass) => (
      <tr key={pass._id}>
        <td>{pass.bookId}</td>
        <td>{pass.firstname}</td>
        <td>{pass.lastname}</td>
        <td>{pass.status}</td>
        {/* <td>
                <button
                  className="btn btn-primary"
                  onClick={() => this.routeChange(flight)}
                >
                  Book
                </button>
              </td> */}
      </tr>
    ));
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>search by flight Id</label>
            <input
              type="text"
              name="name"
              placeholder="Search Products"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Done
          </button>
        </form>

        <hr />
        <div>
          <table className="table table-dark">
            <thead>
              <tr>
                <td>Booking ID</td>
                <td>first name</td>
                <td>last name</td>
                <td>status</td>
              </tr>
            </thead>
            <tbody>{Product}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SearchProduct;