import React, { Component } from "react";
import axios from "axios";

import "../assets/css/grid.css";
import "../assets/css/index.css";
import "../assets/css/theme.css";

export default class OrderDetail extends Component {
  state = {
    name: "",
    orderdetails: [],
    loading: true,
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`http://localhost:8000/api/orderdetailbyID/${id}`);
    if (res.data.status === 200) {
      this.setState({
        orderdetails: res.data.orderdetails,
        loading: false,
      });
    }
  }
  // details = async (e) => {
  //   e.preventDefault();
  //   const id = this.props.match.params.id;
  //   console.log(this.state);
  //   const res = await axios.put(
  //     `http://localhost:8000/api/orderdetailbyID/${id}`,this.state
  //   )
  // }
  render() {
    var HTMLTable = "";
    if (this.state.loading) {
      HTMLTable = (
        <tr>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
        </tr>
      );
    } else {
      HTMLTable = this.state.orderdetails.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.productID}</td>
            <td>{item.oderID}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.colorID}</td>
            <td>{item.sizeID}</td>
            <td>{item.total}</td>
          </tr>
        );
      });
    }
    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div
                  className="card-header"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Order Detail</h4>
                  <a className="btn btn-primary" href="/oder">
                    Back
                  </a>
                </div>
                <div className="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">ProductID</th>
                        <th scope="col">OrderID</th>
                        <th scope="col">ProductName</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">ColorID</th>
                        <th scope="col">SizeID</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>{HTMLTable}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
