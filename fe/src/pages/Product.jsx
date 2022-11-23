import React, { useEffect, useState } from "react";

import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

import productData from "../assets/fake-data/products";
import axios from "axios";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { remove } from "../redux/product-modal/productModalSlice";
import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import numberWithCommas from "../utils/numberWithCommas";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import swal from "sweetalert";

const Product = (props) => {
  //const product = productData.getProductBySlug(props.match.params.slug);
  const [categorylist, setCategorylist] = useState([]);
  const [colorlist, setColorlist] = useState([]);
  const [sizelist, setSizelist] = useState([]);
  const [productlist, setProductlist] = useState([]);
  const [colorlistSel, setColorlistSel] = useState([]);
  const [sizelistSel, setSizelistSel] = useState([]);
  const [previewImg, setPreviewImg] = useState();
  const [previewImg1, setPreviewImg1] = useState();
  const [previewImg2, setPreviewImg2] = useState();
  const dispatch = useDispatch();

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [color, setColor] = useState(undefined);
  const [colorID, setColorID] = useState(undefined);

  const [size, setSize] = useState(undefined);
  const [sizeID, setSizeID] = useState(undefined);

  const [quantity, setQuantity] = useState(1);
  const goToCart = () => {
    if (check()) {
      props.history.push("/cart");
    }
  };
  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu sắc!");
      return false;
    }

    if (size === undefined) {
      alert("Vui lòng chọn kích cỡ!");
      return false;
    }

    return true;
  };
  const addToCart = () => {
    if (check()) {
      let newItem = {
        id: productInput.id,
        img01: previewImg1,
        name: productInput.title,
        color: color,
        colorID: colorID,
        size: size,
        sizeID: sizeID,
        price: productInput.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        swal("Success", "Thêm vào giỏ hàng thành công", "success");
      } else {
        alert("Fail");
      }
    }
  };
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
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  //const relatedProducts = productData.getProducts(8);
  const id = props.match.params.slug

  useEffect(() => {
    let isMounted = true;

    axios.get(`http://localhost:8000/api/edit-product/${id}`).then((res) => {
      if (res.data.status === 200) {
        setProduct(res.data.products)
        setSizelist(res.data.sizes);
        setColorlist(res.data.colors);
        setProductlist(res.data.productsSame);
        const storage = getStorage();

        getDownloadURL(ref(storage, res.data.products.image01))
        .then((url) => {
          setPreviewImg(url)
          setPreviewImg1(url)
        })
        getDownloadURL(ref(storage, res.data.products.image02))
        .then((url) => {
          setPreviewImg2(url)
        })
        res.data.productsSame.map((item,index)=>{
          getDownloadURL(ref(storage, item.image01))
          .then((url) => {
            const img1 = document.getElementById(`img1${item.id}`);
            img1.setAttribute('src', url);
            //console.log(url)
          })
          getDownloadURL(ref(storage, item.image02))
          .then((url) => {
            const img3 = document.getElementById(`img2${item.id}`);
            img3.setAttribute('src', url);
          })
        })
        
      }

    });
    axios.get(`http://localhost:8000/api/categorys`).then((res) => {
      if (res.data.status === 200) {
        setCategorylist(res.data.categorys);

      }
      //console.log(res.data.categorys);
    });
    
    return () => {
      isMounted = false;
    };
  }, [])
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [product]);

  return (
    <Helmet title={1}>
      <Section>
        <SectionBody>
          <div className="product">
            <div className="product__images">
              <div className="product__images__list">
                <div
                  className="product__images__list__item"
                  onClick={() => setPreviewImg(previewImg1)}
                >
                  <img src={previewImg1} alt="" />
                </div>
                <div
                  className="product__images__list__item"
                  onClick={() => setPreviewImg(previewImg2)}
                >
                  <img src={previewImg2} alt="" />
                </div>
              </div>
              <div className="product__images__main">
                <img id="img1" src={previewImg} alt="" />
              </div>
              <div
                className={`product-description ${descriptionExpand ? "expand" : ""}`}
              >
                <div className="product-description__title">Chi tiết sản phẩm</div>
                <div
                  className="product-description__content"
                  dangerouslySetInnerHTML={{ __html: productInput.description }}
                ></div>
                <div className="product-description__toggle">
                  <Button
                    size="sm"
                    icon="bx bx-cart"
                    animate={true}
                    color="btn-primary"
                    onClick={() => setDescriptionExpand(!descriptionExpand)}
                  >
                    {descriptionExpand ? "Thu gọn" : "Xem thêm"}
                  </Button>
                </div>
              </div>
            </div>
            <div className="product__info">
              <h1 className="product__info__title">{productInput.title}</h1>
              <div className="product__info__item">
                <span className="product__info__item__price">
                  {numberWithCommas(productInput.price)}
                </span>
              </div>
              <div className="product__info__item">
                <div className="product__info__item__title">Màu sắc</div>
                <div className="product__info__item__list">
                  {colorlist.map((item, index) => (
                    <div
                      key={index}
                      className={`product__info__item__list__item ${color === item.name ? "active" : ""
                        }`}
                      onClick={() => {setColor(item.name); setColorID(item.id)}}
                    >
                      <div className={`circle bg-${item.name}`}></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="product__info__item">
                <div className="product__info__item__title">Kích cỡ</div>
                <div className="product__info__item__list">
                  {sizelist.map((item, index) => (
                    <div
                      key={index}
                      className={`product__info__item__list__item ${size === item.name ? "active" : ""
                        }`}
                      onClick={() => {setSize(item.name); setSizeID(item.id)}}
                    >
                      <span className="product__info__item__list__item__size">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="product__info__item">
                <div className="product__info__item__title">Số lượng</div>
                <div className="product__info__item__quantity">
                  <div
                    className="product__info__item__quantity__btn"
                    onClick={() => updateQuantity("minus")}
                  >
                    <i className="bx bx-minus"></i>
                  </div>
                  <div className="product__info__item__quantity__input">
                    {quantity}
                  </div>
                  <div
                    className="product__info__item__quantity__btn"
                    onClick={() => updateQuantity("plus")}
                  >
                    <i className="bx bx-plus"></i>
                  </div>
                </div>
              </div>
              <div className="product__info__item">
                <Button icon="bx bx-cart" color ={'btn-warning'}
                    animate={true} onClick={() => addToCart()}>thêm vào giỏ</Button>
                <Button icon="bx bx-cart" color ={'btn-danger'}
                    animate={true} onClick={() => goToCart()}>mua ngay</Button>
              </div>
            </div>
            <div
              className={`product-description mobile ${descriptionExpand ? "expand" : ""
                }`}
            >
              <div className="product-description__title">Chi tiết sản phẩm</div>
              <div
                className="product-description__content"
                dangerouslySetInnerHTML={{ __html: productInput.description }}
              ></div>
              <div className="product-description__toggle">
                <Button
                  size="sm"
                  onClick={() => setDescriptionExpand(!descriptionExpand)}
                >
                  {descriptionExpand ? "Thu gọn" : "Xem thêm"}
                </Button>
              </div>
            </div>
          </div>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productlist.map((item, index) => (
              <ProductCard
              key={index}
              id={item.id}
              img01={item.image01}
              img02={item.image02}
              name={item.title}
              price={Number(item.price)}
              categorySlug={item.categorySlug}
              list={productInput}
            />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
