import React, { Component } from "react";
import axios from "axios";

import "../../../assets/css/grid.css";
import "../../../assets/css/index.css";
import "../../../assets/css/theme.css";
import swal from "sweetalert";

class Sizes extends Component {
  state = {
    name: "",
    sizes: [],
    loading: true,
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:8000/api/sizes");
    console.log(res.data.status);
    if (res.data.status === 200) {
      this.setState({
        sizes: res.data.sizes,
        loading: false,
      });
    }
  }
  deleteSize = async (e, id) => {
    const thidClicked = e.currentTarget;
    const res = await axios.delete(
      `http://localhost:8000/api/delete-size/${id}`
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
        </tr>
      );
    } else {
      HTMLTable = this.state.sizes.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <a style={{marginRight: '8px'}}
                className="btn btn-success btn-sm"
                href={`editsize/${item.id}`}
              >
                Edit
              </a>
              <a
                className="btn btn-danger btn-sm"
                onClick={(e) => this.deleteSize(e, item.id)}
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
                  <h4>Sizes</h4>
                  <a className="btn btn-primary" href="/admin/AddSize">
                    Add Size
                  </a>
                </div>
                <div className="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>

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

export default Sizes;
