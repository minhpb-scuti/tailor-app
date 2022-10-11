/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Footer from "../Footer";
import HeaderShop from "../HeaderShop";
// import Product1 from "../../static/image/product-1.webp";
// import Product2 from "../../static/image/product-2.webp";
// import Product3 from "../../static/image/product-3.webp";
// import Product4 from "../../static/image/product-4.webp";
// import Product5 from "../../static/image/product-5.webp";
// import Product6 from "../../static/image/product-6.webp";

const Shop = () => {
  const { pathname } = useLocation();

  return (
    <body className="archive post-type-archive post-type-archive-product custom-background theme-petermason woocommerce-shop woocommerce woocommerce-page woocommerce-js body_tag scheme_default blog_mode_shop body_style_wide is_stream blog_style_excerpt sidebar_show sidebar_left header_style_header-custom-398 header_position_default menu_style_top trx_addons_present wpb-js-composer js-comp-ver-6.9.0 vc_responsive added_to_cart_inited desktop_layout">
      <HeaderShop
        pathname={pathname}
        children={
          <BreadCrumb
            text="Slim Fit 2pc Black Mini Checkered Suit"
            text1="shop"
            href1="/shop"
            text2="Blazers"
          />
        }
      />
      <Footer />
    </body>
  );
};

export default Shop;
