import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import DatePicker from "react-date-picker";

function SelectBasicExample() {
  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());
  return (
    <div>
      <div className="container">

        <div className="wrapper-field" id = "wrapper-field">

        <div className="row" id="field-filter">
          <div className="col-3">

            <b>Category</b>
            <div>
              <Form.Select aria-label="">
                <option>Tất cả sản phẩm</option>
                <option id = "option-category" value="1">Giày</option>
                <option id = "option-category" value="2">Dép</option>
                <option id = "option-category" value="3">Dép có quai hậu</option>
              </Form.Select>
            </div>
          </div>

          <div className="col-8">

            <div className="row">

              <div className="col-4">
                <b>From</b>
                <div>
                  <DatePicker onChange={onChange1} value={value1} />
                </div>
              </div>

              <div className="col-4">
                <b>To</b>
                <div>
                  <DatePicker onChange={onChange2} value={value2} />
                </div>
              </div>

              <div className="col-4" id="btn-statis">
                <a className="btn btn-success btn-sm">Confirm</a>
              </div>

            </div>

            

          </div>
        </div>
          
          
          

        </div>
        <div className="container">
          <div id="title">Thống kê doanh thu và số lượng sản phẩm thuộc tất cả sản phẩm</div>
          <br />
          <div id = "title-time">Từ ngày <span></span> Đến ngày <span></span> </div>
          <br />
          <div className="col-1">
            <div className="row">
              Show
              <Form.Select aria-label="">
                <option>10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </Form.Select>
              entries
            </div>
          </div>
          <div className="container">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">price</th>
                            <th scope="col">qty</th>
                            <th scope="col">revenue</th>
                          </tr>
                        </thead>
                        {/* <tbody>{HTMLTable}</tbody> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div id="title">Top sản phẩm bán chạy</div>
          <br />
          <div id = "title-time">Từ ngày <span></span> Đến ngày <span></span> </div>

          <br />
          <div className="col-1">
            <div className="row">
              Show
              <Form.Select aria-label="">
                <option>10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </Form.Select>
              entries
            </div>
          </div>
          <div className="container">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Top</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">qty</th>
                          </tr>
                        </thead>
                        {/* <tbody>{HTMLTable}</tbody> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectBasicExample;
