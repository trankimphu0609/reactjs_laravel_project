import React, { Component } from "react";
import axios from "axios";


class Product extends Component {
    state = {
        name: '',
        price: ''
    }
    getProduct = ()=>{
        const res = axios.get('http://localhost:8000/api/products');
        console.log(res.data.status);
        if (res.data.status === 200) {
          this.setState({
            products: res.data.products,
            loading: false
          });
        }
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveProduct = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8000/api/add-product", this.state);
        if (res.data.status === 200) {
            console.log(res.data.message);
            this.setState({
                name: '',
                price: ''
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header" style={{ display: "flex", justifyContent: "space-between" }}>
                                <h4>
                                    Add Products

                                </h4>
                                <a className="btn btn-primary" href="/">Back</a>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={this.saveProduct}>
                                    <div class="form-group" style={{ marginBottom: "15px" }}>
                                        <label>Product Name</label>
                                        <input type={"text"} name={"name"} className={"form-control"} onChange={this.handleInput} value={this.state.name} />
                                    </div>
                                    <div class="form-group" style={{ marginBottom: "15px" }}>
                                        <label>Product Price</label>
                                        <input type={"text"} name={"price"} className={"form-control"} onChange={this.handleInput} value={this.state.price} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary"> Save </button>
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

export default Product;