import React, { Component } from "react";
import axios from "axios";

import "../../../assets/css/grid.css";
import "../../../assets/css/index.css";
import "../../../assets/css/theme.css";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import swal from "sweetalert";

class Products extends Component {
  state = {
    products: [],
    loading: true,
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:8000/api/products");
    console.log(res.data.status);
    if (res.data.status === 200) {
      res.data.products.map((item, index) => {
        const storage = getStorage();
        getDownloadURL(ref(storage, item.image01))
        .then((url) => {
          const img = document.getElementById(`img1${item.id}`);
          img.setAttribute('src', url);
          item.image01 = url;
        })
      .catch((error) => {
        // Handle any errors
      });
      
      });
      this.setState({
        products: res.data.products,
        loading: false,
      });
    }
  }
  deleteProduct = async (e, id) => {
    const thidClicked = e.currentTarget;
    const res = await axios.delete(
      `http://localhost:8000/api/delete-product/${id}`
    );
    if (res.data.status === 200) {
      swal("Success","Xóa thành công","success");

      thidClicked.closest("tr").remove();
      console.log(res.data.message);
    }
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
        </tr>
      );
    } else {
      HTMLTable = this.state.products.map((item,index) => {
        return (
          <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.status}</td>
            <td><img id={`img1${item.id}`} style={{width: '90px', height:'70px'}} src={item.image01} alt="" /></td>
            <td>
              <a style={{marginRight: '8px'}}
                className="btn btn-success btn-sm"
                href={`editproduct/${item.id}`}
              >
                Edit
              </a>
              <a
                className="btn btn-danger btn-sm"
                onClick={(e) => this.deleteProduct(e, item.id)}
              >
                {" "}
                Delete
              </a>
            </td>
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
                  <h4>Products</h4>
                  <a className="btn btn-primary" href="/admin/AddProduct">
                    Add Product
                  </a>
                </div>
                <div className="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">price</th>
                        <th scope="col">qty</th>
                        <th scope="col">status</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
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

export default Products;
