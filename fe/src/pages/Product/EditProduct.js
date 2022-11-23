import React, { Component } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
class EditProduct extends Component {
  state = {
    name: "",
    price: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {
    // const id = this.props.match.useParams.id;
    const res = await axios.get(`http://localhost:8000/api/edit-product/1`);
    if (res.data.status === 200) {
      console.log(res.data.products);
      this.setState({
        name: res.data.products.name,
        price: res.data.products.price,
      });
    }
  }

  updateProduct = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      "http://localhost:8000/api/update-product/1",
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        name: "",
        price: "",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div
                className="card-header"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h4>Update Products</h4>
                <a className="btn btn-primary" href="/">
                  Back
                </a>
              </div>
              <div className="card-body">
                <form onSubmit={this.updateProduct}>
                  <div class="form-group" style={{ marginBottom: "15px" }}>
                    <label>Product Name</label>
                    <input
                      type={"text"}
                      name={"name"}
                      className={"form-control"}
                      onChange={this.handleInput}
                      value={this.state.name}
                    />
                  </div>
                  <div class="form-group" style={{ marginBottom: "15px" }}>
                    <label>Product Price</label>
                    <input
                      type={"text"}
                      name={"price"}
                      className={"form-control"}
                      onChange={this.handleInput}
                      value={this.state.price}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      {" "}
                      Save{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProduct;
