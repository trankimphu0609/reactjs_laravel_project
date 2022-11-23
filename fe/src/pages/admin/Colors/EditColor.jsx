import React, { Component } from "react";
import axios from "axios";

import "../../../assets/css/grid.css";
import "../../../assets/css/index.css";
import "../../../assets/css/theme.css";
import swal from "sweetalert";

class EditColor extends Component {
  state = {
    name: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`http://localhost:8000/api/edit-color/${id}`);
    if (res.data.status === 200) {
      this.setState({
        name: res.data.colors.name,
      });
    }
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  updateColor = async (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const res = await axios.put(
      `http://localhost:8000/api/update-color/${id}`,
      this.state
    );
    if (res.data.status === 200) {
      swal("Success","Sửa thành công","success");

      console.log(res.data.message);
      this.setState({
        name: "",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{width: '500px', margin: '0 auto'}}>
              <div>
                <h4>Update Color</h4>
                <a style={{margin: '-50px 0 0 377px'}} className="btn btn-secondary" href="/admin/colors">
                  Back
                </a>
              </div>
              <div>
                <form onSubmit={this.updateColor}>
                  <div>
                    <label style={{fontSize: '1.2rem', color: 'black'}}>Name</label>
                    <input style={{marginLeft:'20px', padding:'2px', width: '200px', borderRadius: '5px', border: '2px solid #2ad3ff', outline: 'none'}}
                      type={"text"}
                      name={"name"}
                      onChange={this.handleInput}
                      value={this.state.name}
                    />
                  </div>

                  <div>
                    <button  class="btn btn-primary"  type="submit"> Save </button>
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

export default EditColor;
