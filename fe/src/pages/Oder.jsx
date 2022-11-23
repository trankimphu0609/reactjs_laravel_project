import React, { Component } from "react";
import axios from "axios";

import "../assets/css/grid.css";
import "../assets/css/index.css";
import "../assets/css/theme.css";
import swal from "sweetalert";

export default class Oder extends Component {
  state = {
    name: "",
    order: [],
    loading: true,
  };

  async componentDidMount() {
    const member = localStorage.getItem('user');
    let obj = JSON.parse(member);

    const res = await axios.get(`http://localhost:8000/api/odersByID/${obj.id}`);
    console.log(res.data.status);
    if (res.data.status === 200) {
      this.setState({
        order: res.data.order,
        loading: false,
      });
    }
  }
  updateStatus = async (e, id, status) => {
    const thidClicked = e.currentTarget;
    
    if(status == 1){
      const res = await axios.post(
        `http://localhost:8000/api/update-oder/${id}`,{'status': Number(status) +1}
      );
      if (res.data.status === 200) {
        swal("Success","Nhận hàng thành công","success");
        this.setState({
          order: res.data.order,
          loading: false,
        });
      }
    }
    console.log(id)
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
        </tr>
      );
    } else {
      HTMLTable = this.state.order.map((item) => {
        var status ='Đã nhận';
        var color = 'btn btn-success btn-sm';
        if(item.status == '0'){
          status ='Đang chờ xác nhận'
          color = 'btn btn-danger btn-sm btn-sm';
          
        }else{
          if(item.status == '1'){
            status ='Đang vận chuyển'
            color = 'btn btn-secondary btn-sm';
          }
        }
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.memberName}</td>
            <td>{item.cost}</td>
            <td><a
                className={color}
                onClick={(e) => this.updateStatus(e, item.id,item.status)}
              >
                {status}
              </a></td>
            <td>
              <a
                href={`orderdetail/${item.id}`}
                className="btn btn-primary btn-sm"
              >
                Detail
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
                  <h4>Orders</h4>
                </div>
                <div className="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">MemberID</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Status</th>
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
