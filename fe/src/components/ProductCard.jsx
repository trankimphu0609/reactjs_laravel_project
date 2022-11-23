import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { set } from "../redux/product-modal/productModalSlice";

import Button from "./Button";

import numberWithCommas from "../utils/numberWithCommas";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  // const storage = getStorage();
  //       getDownloadURL(ref(storage, props.image01))
  //       .then((url) => {
  //         const img = document.getElementById(`img1${props.id}`);
  //         img.setAttribute('src', url);
  //       })
  //     .catch((error) => {
  //       // Handle any errors
  //     });
  //     getDownloadURL(ref(storage, props.image02))
  //       .then((url) => {
  //         const img = document.getElementById(`img2${props.id}`);
  //         img.setAttribute('src', url);
  //       })
  //     .catch((error) => {
  //       // Handle any errors
  //     });
  
  //const x = require('../images/products/product-01 (1).jpg').default;
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.id}`}>
        <div className="product-card__image">
          <img id={`img1${props.id}`} src={`${props.img01}`} alt="" />
          <img id={`img2${props.id}`} src={`${props.img02}`} alt="" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">
          {numberWithCommas(props.price)}
          <span className="product-card__price__old">
            <del>{numberWithCommas(25000)}</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
          color="btn-warning"
          onClick={() => {
            dispatch(set(props.id));
            //console.log(props.list);
          }}
        >
          chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  categorySlug: PropTypes.string.isRequired,
};

export default ProductCard;
