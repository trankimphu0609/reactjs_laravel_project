import axios from "axios";
import { Component } from "react";
class Home extends Component {

  state = {
    products: [],
    loading: true
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:8000/api/products');
    console.log(res.data.status);
    if (res.data.status === 200) {
      this.setState({
        products: res.data.products,
        loading: false
      });
    }
  }
  deleteProduct = async (e,id) =>{
    const thidClicked = e.currentTarget;
    const res = await axios.delete(`http://localhost:8000/api/delete-product/${id}`);
    if (res.data.status === 200) {
      thidClicked.closest("tr").remove();
      console.log(res.data.message);
    }
  }

  render() {

    var products_HTMLTable = "";
    if (this.state.loading) {

      products_HTMLTable =
        <tr>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
        </tr>
    } else {
      products_HTMLTable =
        this.state.products.map((item) => {
          return (
            <tr key={item.id}>
              <td >{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.categorySlug}</td>
              <td>{item.slug}</td>
              <td>{item.description}</td>
              <td>
                <a className="btn btn-success btn-sm" href={`edit-product/${item.id}`}>Edit</a>
                {/* <a className="btn btn-danger btn-sm" onClick={(e)=> this.deleteProduct(e,item.id)}>Delete</a> */}
              </td>
            </tr>
          );
        });
    }

    return (<div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header" style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>
                Products

              </h4>
              <a className="btn btn-primary" href="/AddProduct">Add Product</a>
            </div>
            <div className="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">categorySlug</th>
                    <th scope="col">slug</th>
                    <th scope="col">description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products_HTMLTable}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }

};

export default Home;