import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import policy from "../assets/fake-data/policy";
import heroSliderData from "../assets/fake-data/hero-slider";
import productData from "../assets/fake-data/products";
import banner from "../assets/images/banner.png";
import { getStorage,ref, getDownloadURL } from "firebase/storage";

class Home extends Component {
  state = {
    products: [],
    loading: true,
  };

  async componentDidMount() {
    if(localStorage.getItem('accessToken')){
      const res = await axios.get(
        `http://localhost:8000/api/user`,{ headers: {'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`} }
      );
      localStorage.setItem('user',JSON.stringify(res.data));
    }
    const res = await axios.get("http://localhost:8000/api/products");
    console.log(res.data.status);
    if (res.data.status === 200) {
      res.data.products.map((item, index) => {
        const storage = getStorage();
        getDownloadURL(ref(storage, item.image01))
        .then((url) => {
          const img = document.getElementById(`img1${item.id}`);
          img.setAttribute('src', url);
        })
      .catch((error) => {
        // Handle any errors
      });
      getDownloadURL(ref(storage, item.image02))
        .then((url) => {
          const img = document.getElementById(`img2${item.id}`);
          img.setAttribute('src', url);
        })
      .catch((error) => {
        // Handle any errors
      });
      });
      console.log(res.data.products);

      this.setState({
        products: res.data.products,
        loading: false,
      });
    }
    console.log(this.state.products);

    // this.state.products.map((item, index) => {
    //     item.image01 = require(`../assets/images/products/${item.image01}`).default
    // })
  }
  deleteProduct = async (e, id) => {
    const thidClicked = e.currentTarget;
    const res = await axios.delete(
      `http://localhost:8000/api/delete-product/${id}`
    );
    if (res.data.status === 200) {
      thidClicked.closest("tr").remove();
      console.log(res.data.message);
    }
  };

  render() {
    return (
      <Helmet title="Trang chủ">
        {/* hero slider */}
        <HeroSlider
          data={heroSliderData}
          control={true}
          auto={false}
          timeOut={5000}
        />
        {/* end hero slider */}

        {/* policy section */}
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => (
                <Link key={index} to="/policy">
                  <PolicyCard
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                  />
                </Link>
              ))}
            </Grid>
          </SectionBody>
        </Section>
        {/* end policy section */}

        {/* best selling section */}
        <Section>
          <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {this.state.products.slice(0,4).map((item, index) => (
                <ProductCard
                  key={index}
                  id={item.id}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  categorySlug={item.categorySlug}
                  list={this.state.products}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        {/* end best selling section */}

        {/* new arrival section */}
        <Section>
          <SectionTitle>sản phẩm mới</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {this.state.products.slice(5,9).map((item, index) => (
                <ProductCard
                  key={index}
                  id={item.id}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  categorySlug={item.categorySlug}
                  list={this.state.products}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        {/* end new arrival section */}

        {/* banner */}
        <Section>
          <SectionBody>
            <Link to="/catalog">
              <img src={banner} alt="" />
            </Link>
          </SectionBody>
        </Section>
        {/* end banner */}

        {/* popular product section */}
        <Section>
          <SectionTitle>phổ biến</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {this.state.products.slice(10,14).map((item, index) => (
                <ProductCard
                  key={index}
                  id={item.id}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  categorySlug={item.categorySlug}
                  list={this.state.products}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        {/* end popular product section */}
      </Helmet>
    );
  }
}

export default Home;
