import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { storage } from "../../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "../../../assets/css/grid.css";
import "../../../assets/css/index.css";
import "../../../assets/css/theme.css";

function AddProduct() {
  const [categorylist, setCategorylist] = useState([]);
  const [colorlist, setColorlist] = useState([]);
  const [sizelist, setSizelist] = useState([]);

  const [productInput, setProduct] = useState({
    title: "",
    price: "",
    qty: "",
    description: "",

    categorySlug: "",
    image01: "",
    image02: "",
    status: "",
    colors: [],
    sizes: [],
  });
  const [pricture, setPicture] = useState();
  const [pricture1, setPicture1] = useState();
  const [errorlist, setError] = useState([]);
  const [selectSize, setSelectSize] = useState([]);
  const handleInput = (e) => {
    e.persist();
    setProduct({ ...productInput, [e.target.name]: e.target.value });
  };
  const handleCheckBoxSize = (e) => {
    setSelectSize([]);
    //console.log(e.target);
  };
  const handleImage = (e) => {
    setPicture({ image: e.target.files[0] });
    //console.log(pricture.image);
  };
  const handleChange = (e) => {
    setProduct({
      image01: e.target.files[0],
    });
  };
  const handleImage1 = (e) => {
    setPicture1({ image: e.target.files[0] });
    //console.log(pricture1.image);
  };

  useEffect(() => {
    let isMounted = true;

    axios.get(`http://localhost:8000/api/categorys`).then((res) => {
      if (res.data.status === 200) {
        setCategorylist(res.data.categorys);
      }
      console.log(res.data.categorys);
    });
    axios.get(`http://localhost:8000/api/sizes`).then((res) => {
      if (res.data.status === 200) {
        setSizelist(res.data.sizes);
      }
      console.log(res.data.sizes);
    });
    axios.get(`http://localhost:8000/api/colors`).then((res) => {
      if (res.data.status === 200) {
        setColorlist(res.data.colors);
      }
      console.log(res.data.colors);
    });
    // listAll(imageListRef).then((res)=>{
    //   res.items.forEach((item)=>{
    //     getDownloadURL(item).then((url)=>{

    //     })
    //   })
    // })
    return () => {
      isMounted = false;
    };
  }, []);
  // const renderPhoto = (source) =>{
  //     // return <img src={source} />
  // }
  const { handleSubmit, register } = useForm();
  const [dataSubmit, setDataSubmit] = useState({});
  const imageListRef = ref(storage, "images/")
  const submitProduct = async (data) => {
    setDataSubmit(data);
    //    e.preventDefault();
    productInput.colors = data.colors;
    productInput.sizes = data.sizes;
    const formData = new FormData();
    formData.append("title", productInput.title);
    formData.append("price", productInput.price);
    formData.append("qty", productInput.qty);
    formData.append("description", productInput.description);
    formData.append("categorySlug", productInput.categorySlug);
    formData.append("status", productInput.status);
    formData.append("colors", productInput.colors);
    formData.append("sizes", productInput.sizes);

    //console.log(pricture.image)
    const imageRef = ref(storage, `images/${pricture.image.name + v4()}`);
    uploadBytes(imageRef, pricture.image).then(() => {
      getDownloadURL(ref(storage, imageRef.fullPath))
        .then((url) => {
          console.log(url);
        })
        .catch((error) => {
          // Handle any errors
        });
    });
    const imageRef1 = ref(storage, `images/${pricture1.image.name + v4()}`);
    uploadBytes(imageRef1, pricture1.image).then(() => {
      getDownloadURL(ref(storage, imageRef1.fullPath))
        .then((url) => {
          console.log(url);
        })
        .catch((error) => {
          // Handle any errors
        });
    });
    formData.append("image01", imageRef.fullPath);
    formData.append("image02", imageRef1.fullPath);

    for (const value of formData.values()) {
      console.log(value);
    }

    // });
    // await axios.post('http://localhost:8000/api/add-product',{
    //     headers: { "Content-Type": "multipart/form-data" }
    // }, formData).then(res => {
    //     if (res.data.status === 200) {
    //         //swal("Success",res.data.message,"success");
    //         setProduct({
    //             ...productInput,
    //             title: '',
    //             price: '',
    //             qty: '',
    //             description: '',

    //             categorySlug: '',
    //             image01: '',
    //             image02: '',
    //             status: '',
    //         });
    //         setError([]);
    //     }
    //     else{
    //         //swal("All Fields are mandetory", "", "error");
    //         //setError(res.data.errors);
    //         console.log(res)
    //     }
    //     console.log(res.data.message);
    // }).catch(e=>{
    //     console.log(e);
    // });

    await axios({
      method: "POST",
      url: "http://localhost:8000/api/add-product",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        swal("Success", "Thêm thành công", "success");
        console.log(response);
        setProduct({
          ...productInput,
          title: "",
          price: "",
          qty: "",
          description: "",

          categorySlug: "",
          image01: "",
          image02: "",
          status: "",
          colors: [],
          sizes: [],
        });
      })
      .catch(function (response) {
        swal("Error", "Thêm không thành công", "error");
        console.log(response.data);
      });
  };

  return (
    <div className="container-fluid px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>
            Add Product
            <Link
              to="/admin/products"
              className="btn btn-primary btn-sm float-end"
            >
              View Product
            </Link>
          </h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(submitProduct)} encType="multipart/form-data">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane card-body border fade show active"
                style={{ display: "flex" }}
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="col-6">
                  <div className="form-group mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      name="title"
                      onChange={handleInput}
                      value={productInput.title}
                      className="form-control"
                    />
                    <small className="text-danger">{errorlist.title}</small>
                  </div>
                  <div className="form-group mb-3">
                    <label>Price</label>
                    <input
                      type="text"
                      name="price"
                      onChange={handleInput}
                      value={productInput.price}
                      className="form-control"
                    />
                    <small className="text-danger">{errorlist.price}</small>
                  </div>
                  <div className="form-group mb-3">
                    <label>Quantity</label>
                    <input
                      type="text"
                      name="qty"
                      onChange={handleInput}
                      value={productInput.qty}
                      className="form-control"
                    />
                    <small className="text-danger">{errorlist.qty}</small>
                  </div>
                  <div className="form-group mb-3">
                    <label>Description</label>
                    <textarea
                      name="description"
                      onChange={handleInput}
                      value={productInput.description}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-6">
                  <div className="col-md-8 form-group mb-3">
                    <label>Select Category</label>
                    <select
                      name="categorySlug"
                      onChange={handleInput}
                      value={productInput.categorySlug}
                      className="form-control"
                    >
                      <option>Select Category</option>
                      {categorylist.map((item) => {
                        return (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    <small className="text-danger">
                      {errorlist.categorySlug}
                    </small>
                  </div>
                  <div className="col-md-8 form-group mb-3">
                    <label>Image01</label>
                    <input
                      type="file"
                      name="image01"
                      onChange={handleImage}
                      className="form-control"
                    />
                    {/* <div className="result">
                                            {renderPhoto(pricture)}
                                        </div> */}
                    <small className="text-danger">{errorlist.image01}</small>
                  </div>
                  <div className="col-md-8 form-group mb-3">
                    <label>Image02</label>
                    <input
                      type="file"
                      name="image02"
                      onChange={handleImage1}
                      className="form-control"
                    />
                    <small className="text-danger">{errorlist.image02}</small>
                  </div>

                  <div className="col-md-8 form-group mb-3">
                    <label>Status</label>
                    <select
                      name="status"
                      onChange={handleInput}
                      value={productInput.status}
                      className="form-control"
                    >
                      <option selected value={"0"}>Tắt kích hoạt</option>
                      <option value={"1"}>Kích hoạt</option>
                    </select>
                  </div>
                </div>

                {/* <div className="col-md-4 form-group mb-3">
                                    <label>Featured (checked=shown)</label>
                                    <input type="checkbox" name="featured" onChange={handleInput} value={productInput.featured} className="w-50 h-50" />
                                </div> */}
              </div>
              <div className="row">
                <div className="col-md-8 form-group mb-3">
                  <label>Select Sizes</label>
                  <div style={{ display: "flex", marginLeft: "15px" }}>
                    {sizelist.map((item) => {
                      return (
                        <div
                          className="form-group"
                          style={{ marginRight: "15px" }}
                        >
                          {/* <input type="checkbox" name="featured" onChange={handleInput} value={productInput.featured} style={{ marginRight: '10px' }} />
                                                        <label>{item.name}</label> */}
                          <input
                            type="checkbox"
                            name="sizes"
                            class="btn-check btn-checkTest"
                            id={item.id + item.name}
                            autocomplete="off"
                            value={item.id}
                            {...register("sizes")}
                          />
                          <label
                            class="btn btn-outline-primary"
                            for={item.id + item.name}
                          >
                            {item.name}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-8 form-group mb-3">
                  <label>Select Color</label>
                  <div style={{ display: "flex", marginLeft: "15px" }}>
                    {colorlist.map((item) => {
                      return (
                        <div
                          className="form-group"
                          style={{ marginRight: "15px" }}
                        >
                          <input
                            type="checkbox"
                            name="colors"
                            class="btn-check btn-checkTest"
                            id={item.id + item.name}
                            autocomplete="off"
                            value={item.id}
                            {...register("colors")}
                          />
                          <label
                            class="btn btn-outline-primary"
                            for={item.id + item.name}
                          >
                            {item.name}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary px-4 mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
