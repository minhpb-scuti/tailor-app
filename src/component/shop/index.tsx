/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Footer from "../Footer";
import HeaderShop from "../HeaderShop";
import Product1 from "../../static/image/product-1.webp";
import Product2 from "../../static/image/product-2.webp";
import Product3 from "../../static/image/product-3.webp";
import Product4 from "../../static/image/product-4.webp";
import Product5 from "../../static/image/product-5.webp";
import Product6 from "../../static/image/product-6.webp";
import { Trans, useTranslation } from "react-i18next";

const Shop = () => {
  const { pathname } = useLocation();
  const [layout, setLayout] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <body className="archive post-type-archive post-type-archive-product custom-background theme-petermason woocommerce-shop woocommerce woocommerce-page woocommerce-js body_tag scheme_default blog_mode_shop body_style_wide is_stream blog_style_excerpt sidebar_show sidebar_left header_style_header-custom-398 header_position_default menu_style_top trx_addons_present wpb-js-composer js-comp-ver-6.9.0 vc_responsive added_to_cart_inited desktop_layout">
      <HeaderShop pathname={pathname} children={<BreadCrumb text="shop" />} />
      <div className="page_content_wrap scheme_default">
        <div className="content_wrap">
          <div className="content content_blog">
            {!layout && (
              <div className="list_products shop_mode_list">
                <div className="list_products_header">
                  <nav className="woocommerce-breadcrumb">
                    <a href="/">Home</a>
                    &nbsp;/&nbsp;Shop
                  </nav>
                  <header className="woocommerce-products-header">
                    <h1 className="woocommerce-products-header__title page-title">
                      Shop
                    </h1>
                  </header>
                </div>
                {/* /.list_products_header */}
                <div className="woocommerce-notices-wrapper" />
                <div className="petermason_shop_mode_buttons">
                  <form action="/shop" method="post">
                    <input
                      type="hidden"
                      name="petermason_shop_mode"
                      defaultValue="list"
                    />
                    <a
                      href="#"
                      className="woocommerce_thumbs icon-nine-squares"
                      title="Show products as thumbs"
                      onClick={() => setLayout(false)}
                    />
                    <a
                      href="#"
                      className="woocommerce_list icon-list"
                      title="Show products as list"
                      onClick={() => setLayout(true)}
                    />
                  </form>
                </div>
                {/* /.petermason_shop_mode_buttons */}
                <p className="woocommerce-result-count">
                  <Trans i18nKey="show_all">
                    <span>{t("show_all")}</span>
                  </Trans>
                </p>
                <form className="woocommerce-ordering" method="get">
                  <div className="select_container">
                    <select
                      name="orderby"
                      className="orderby"
                      aria-label="Shop order"
                    >
                      <option value="popularity">
                        <Trans i18nKey="sort_by_popularity">
                          <span>{t("sort_by_popularity")}</span>
                        </Trans>
                      </option>
                      <option value="rating">
                        <Trans i18nKey="sort_by_rating">
                          <span>{t("sort_by_rating")}</span>
                        </Trans>
                      </option>
                      <option value="date" selected>
                        <Trans i18nKey="sort_by_lastest">
                          <span>{t("sort_by_lastest")}</span>
                        </Trans>
                      </option>
                      <option value="price">
                        <Trans i18nKey="sort_low_to_high">
                          <span>{t("sort_low_to_high")}</span>
                        </Trans>
                      </option>
                      <option value="price-desc">
                        <Trans i18nKey="sort_high_to_low">
                          <span>{t("sort_high_to_low")}</span>
                        </Trans>
                      </option>
                    </select>
                  </div>
                  <input type="hidden" name="paged" defaultValue={1} />
                  <input type="hidden" name="q" defaultValue="/shop/" />
                </form>
                <ul className="products columns-2">
                  <li className="product type-product post-241 status-publish first instock product_cat-blazers product_cat-suits product_tag-accessories product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_list">
                      <div className="post_featured hover_shop">
                        <a href="/product/slim-fit-2pc-black-mini-checkered-suit/">
                          <img
                            src={Product1}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/slim-fit-2pc-black-mini-checkered-suit/">
                              <Trans i18nKey="product1">
                                <span>{t("product1")}</span>
                              </Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <div className="post_content entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril
                            delenit.
                          </p>
                        </div>
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              400.<span className="decimals">00</span>
                            </bdi>
                          </span>
                          ???
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              459.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/slim-fit-2pc-black-mini-checkered-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={241}
                          data-product_sku
                          aria-label="Select options for ???Slim Fit 2pc Black Mini Checkered Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                  <li className="product type-product post-237 status-publish last instock product_cat-blazers product_cat-shirts product_cat-suits product_tag-fit product_tag-jackets product_tag-skinny-fit product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_list">
                      <div className="post_featured hover_shop">
                        <a href="/product/modern-fit-2pc-ultra-black-suit/">
                          <img
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            src={Product2}
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/modern-fit-2pc-ultra-black-suit/">
                              <Trans i18nKey="product2">
                                <span>{t("product2")}</span>
                              </Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <div className="post_content entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril
                            delenit.
                          </p>
                        </div>
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              300.<span className="decimals">00</span>
                            </bdi>
                          </span>
                          ???
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              329.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/modern-fit-2pc-ultra-black-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={237}
                          data-product_sku
                          aria-label="Select options for ???Modern Fit 2pc Ultra Black Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                  <li className="product type-product post-233 status-publish first instock product_cat-suits product_cat-ties product_cat-trousers product_cat-waistcoats product_tag-accessories product_tag-jackets product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_list">
                      <div className="post_featured hover_shop">
                        <a href="/product/slim-fit-3pc-solid-blue-suit/">
                          <img
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            src={Product3}
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/slim-fit-3pc-solid-blue-suit/">
                              <Trans i18nKey="product3">{t("product3")}</Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <div className="post_content entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril
                            delenit.
                          </p>
                        </div>
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              600.<span className="decimals">00</span>
                            </bdi>
                          </span>
                          ???
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              609.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/slim-fit-3pc-solid-blue-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={233}
                          data-product_sku
                          aria-label="Select options for ???Slim Fit 3pc Solid Blue Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                  <li className="product type-product post-229 status-publish last instock product_cat-shirts product_cat-suits product_cat-trousers product_cat-waistcoats product_tag-classic product_tag-fit product_tag-scarves product_tag-skinny-fit has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_list">
                      <div className="post_featured hover_shop">
                        <a href="/product/traditional-fit-2pc-brown-suit/">
                          <img
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            src={Product4}
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/traditional-fit-2pc-brown-suit/">
                              <Trans i18nKey="product4">{t("product4")}</Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <div className="post_content entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril
                            delenit.
                          </p>
                        </div>
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              500.<span className="decimals">00</span>
                            </bdi>
                          </span>
                          ???
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              530.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/traditional-fit-2pc-brown-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={229}
                          data-product_sku
                          aria-label="Select options for ???Traditional Fit 2pc Brown Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                  <li className="product type-product post-225 status-publish first instock product_cat-blazers product_cat-ties product_cat-trousers product_cat-waistcoats product_tag-accessories product_tag-scarves product_tag-wedding has-post-thumbnail sale shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_list">
                      <div className="post_featured hover_shop">
                        <a href="/product/luxury-fit-3pc-black-solid-suit/">
                          <span className="onsale">Sale!</span>
                          <img
                            src={Product5}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/luxury-fit-3pc-black-solid-suit/">
                              <Trans i18nKey="product5">{t("product5")}</Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <div className="post_content entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril
                            delenit.
                          </p>
                        </div>
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              400.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/luxury-fit-3pc-black-solid-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={225}
                          data-product_sku
                          aria-label="Select options for ???Luxury Fit 3pc Black Solid Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                  <li className="product type-product post-220 status-publish last instock product_cat-shirts product_cat-waistcoats product_tag-classic product_tag-fit product_tag-jackets product_tag-skinny-fit has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_list">
                      <div className="post_featured hover_shop">
                        <a href="/product/exclusive-fit-3pc-dark-blue-suit/">
                          <img
                            src={Product6}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/exclusive-fit-3pc-dark-blue-suit/">
                                <Trans i18nKey="product6">
                                  {t("product6")}
                                </Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <div className="post_content entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril
                            delenit.
                          </p>
                        </div>
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              300.<span className="decimals">00</span>
                            </bdi>
                          </span>
                          ???
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              340.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/exclusive-fit-3pc-dark-blue-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={220}
                          data-product_sku
                          aria-label="Select options for ???Exclusive Fit 3pc Dark Blue Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                </ul>
              </div>
            )}
            {layout && (
              <div className="list_products shop_mode_thumbs">
                <div className="list_products_header">
                  <nav className="woocommerce-breadcrumb">
                    <a href="/">Home</a>
                    &nbsp;/&nbsp;Shop
                  </nav>
                  <header className="woocommerce-products-header">
                    <h1 className="woocommerce-products-header__title page-title">
                      Shop
                    </h1>
                  </header>
                </div>
                {/* /.list_products_header */}
                <div className="woocommerce-notices-wrapper" />
                <div className="petermason_shop_mode_buttons">
                  <form action="/shop" method="post">
                    <input
                      type="hidden"
                      name="petermason_shop_mode"
                      defaultValue="thumbs"
                    />
                    <a
                      href="#"
                      className="woocommerce_thumbs icon-nine-squares"
                      title="Show products as thumbs"
                      onClick={() => setLayout(false)}
                      style={{
                        color: "#160c06",
                      }}
                    />
                    <a
                      href="#"
                      className="woocommerce_list icon-list"
                      title="Show products as list"
                      onClick={() => setLayout(true)}
                    />
                  </form>
                </div>
                {/* /.petermason_shop_mode_buttons */}
                <p className="woocommerce-result-count">
                  <Trans i18nKey="show_all">
                    <span>{t("show_all")}</span>
                  </Trans>
                </p>
                <form className="woocommerce-ordering" method="get">
                  <div className="select_container">
                    <select
                      name="orderby"
                      className="orderby"
                      aria-label="Shop order"
                    >
                      <option value="popularity">
                        <Trans i18nKey="sort_by_popularity">
                          <span>{t("sort_by_popularity")}</span>
                        </Trans>
                      </option>
                      <option value="rating">
                        <Trans i18nKey="sort_by_rating">
                          <span>{t("sort_by_rating")}</span>
                        </Trans>
                      </option>
                      <option value="date" selected>
                        <Trans i18nKey="sort_by_lastest">
                          <span>{t("sort_by_lastest")}</span>
                        </Trans>
                      </option>
                      <option value="price">
                        <Trans i18nKey="sort_low_to_high">
                          <span>{t("sort_low_to_high")}</span>
                        </Trans>
                      </option>
                      <option value="price-desc">
                        <Trans i18nKey="sort_high_to_low">
                          <span>{t("sort_high_to_low")}</span>
                        </Trans>
                      </option>
                    </select>
                  </div>
                  <input type="hidden" name="paged" defaultValue={1} />
                  <input type="hidden" name="q" defaultValue="/shop/" />
                </form>
                <ul className="products columns-2">
                  <li className="product type-product post-241 status-publish first instock product_cat-blazers product_cat-suits product_tag-accessories product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_thumbs">
                      <div className="post_featured hover_shop">
                        <a href="/product/slim-fit-2pc-black-mini-checkered-suit/">
                          <img
                            src={Product1}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/slim-fit-2pc-black-mini-checkered-suit/">
                              <Trans i18nKey="product1">
                                <span>{t("product1")}</span>
                              </Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              400.<span className="decimals">00</span>
                            </bdi>
                          </span>
                          ???
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              459.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/slim-fit-2pc-black-mini-checkered-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={241}
                          data-product_sku
                          aria-label="Select options for ???Slim Fit 2pc Black Mini Checkered Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                  <li className="product type-product post-237 status-publish last instock product_cat-blazers product_cat-shirts product_cat-suits product_tag-fit product_tag-jackets product_tag-skinny-fit product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_thumbs">
                      <div className="post_featured hover_shop">
                        <a href="/product/modern-fit-2pc-ultra-black-suit/">
                          <img
                            src={Product2}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/modern-fit-2pc-ultra-black-suit/">
                              <Trans i18nKey="product2">
                                <span>{t("product2")}</span>
                              </Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              300.<span className="decimals">00</span>
                            </bdi>
                          </span>
                          ???
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              329.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/modern-fit-2pc-ultra-black-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={237}
                          data-product_sku
                          aria-label="Select options for ???Modern Fit 2pc Ultra Black Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                  <li className="product type-product post-233 status-publish first instock product_cat-suits product_cat-ties product_cat-trousers product_cat-waistcoats product_tag-accessories product_tag-jackets product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_thumbs">
                      <div className="post_featured hover_shop">
                        <a href="/product/slim-fit-3pc-solid-blue-suit/">
                          <img
                            src={Product3}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/slim-fit-3pc-solid-blue-suit/">
                              <Trans i18nKey="product3">{t("product3")}</Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              600.<span className="decimals">00</span>
                            </bdi>
                          </span>
                          ???
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              609.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/slim-fit-3pc-solid-blue-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={233}
                          data-product_sku
                          aria-label="Select options for ???Slim Fit 3pc Solid Blue Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                  <li className="product type-product post-229 status-publish last instock product_cat-shirts product_cat-suits product_cat-trousers product_cat-waistcoats product_tag-classic product_tag-fit product_tag-scarves product_tag-skinny-fit has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_thumbs">
                      <div className="post_featured hover_shop">
                        <a href="/product/traditional-fit-2pc-brown-suit/">
                          <img
                            src={Product4}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/traditional-fit-2pc-brown-suit/">
                              <Trans i18nKey="product4">{t("product4")}</Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              500.<span className="decimals">00</span>
                            </bdi>
                          </span>
                          ???
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              530.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/traditional-fit-2pc-brown-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={229}
                          data-product_sku
                          aria-label="Select options for ???Traditional Fit 2pc Brown Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                  <li className="product type-product post-225 status-publish first instock product_cat-blazers product_cat-ties product_cat-trousers product_cat-waistcoats product_tag-accessories product_tag-scarves product_tag-wedding has-post-thumbnail sale shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_thumbs">
                      <div className="post_featured hover_shop">
                        <a href="/product/luxury-fit-3pc-black-solid-suit/">
                          <span className="onsale">Sale!</span>
                          <img
                            src={Product5}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/luxury-fit-3pc-black-solid-suit/">
                              <Trans i18nKey="product5">{t("product5")}</Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              400.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/luxury-fit-3pc-black-solid-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={225}
                          data-product_sku
                          aria-label="Select options for ???Luxury Fit 3pc Black Solid Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                  <li className="product type-product post-220 status-publish last instock product_cat-shirts product_cat-waistcoats product_tag-classic product_tag-fit product_tag-jackets product_tag-skinny-fit has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <div className="post_item post_layout_thumbs">
                      <div className="post_featured hover_shop">
                        <a href="/product/exclusive-fit-3pc-dark-blue-suit/">
                          <img
                            src={Product6}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            loading="lazy"
                            width={351}
                            height={351}
                          />
                        </a>
                      </div>
                      {/* /.post_featured */}
                      <div className="post_data">
                        <div className="post_header entry-header">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="/product/exclusive-fit-3pc-dark-blue-suit/">
                                <Trans i18nKey="product6">
                                  {t("product6")}
                                </Trans>
                            </a>
                          </h2>
                        </div>
                        {/* /.post_header */}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              300.<span className="decimals">00</span>
                            </bdi>
                          </span>
                          ???
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              340.<span className="decimals">00</span>
                            </bdi>
                          </span>
                        </span>
                        <a
                          href="/product/exclusive-fit-3pc-dark-blue-suit/"
                          data-quantity={1}
                          className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                          data-product_id={220}
                          data-product_sku
                          aria-label="Select options for ???Exclusive Fit 3pc Dark Blue Suit???"
                          rel="nofollow"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </a>
                      </div>
                      {/* /.post_data */}
                    </div>
                    {/* /.post_item */}
                  </li>
                </ul>
              </div>
            )}
            {/* /.list_products */}
          </div>
          {/* </.content> */}
          <div
            className="sidebar left sidebar__left widget_area"
            role="complementary"
          >
            <div className="sidebar_inner">
              <aside
                id="woocommerce_widget_cart-2"
                className="widget woocommerce widget_shopping_cart"
              >
                <h5 className="widget_title">
                  <Trans i18nKey="shopping_cart">
                    <span>{t("shopping_cart")}</span>
                  </Trans>
                </h5>
                <div className="widget_shopping_cart_content">
                  <p className="woocommerce-mini-cart__empty-message">
                    <Trans i18nKey="no_product">
                      <span>{t("no_product")}</span>
                    </Trans>
                  </p>
                </div>
              </aside>
              <aside
                id="woocommerce_price_filter-2"
                className="widget woocommerce widget_price_filter"
              >
                <h5 className="widget_title">
                  <Trans i18nKey="filter_by_price">
                    <span>{t("filter_by_price")}</span>
                  </Trans>
                </h5>
                <form method="get" action="/shop/">
                  <div className="price_slider_wrapper">
                    <div
                      className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      style={{}}
                    >
                      <div
                        className="ui-slider-range ui-corner-all ui-widget-header"
                        style={{ left: "0%", width: "100%" }}
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "0%" }}
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "100%" }}
                      />
                    </div>
                    <div className="price_slider_amount" data-step={10}>
                      <label className="screen-reader-text" htmlFor="min_price">
                        Min price
                      </label>
                      <input
                        type="text"
                        id="min_price"
                        name="min_price"
                        defaultValue={300}
                        data-min={300}
                        placeholder="Min price"
                        style={{ display: "none" }}
                      />
                      <label className="screen-reader-text" htmlFor="max_price">
                        Max price
                      </label>
                      <input
                        type="text"
                        id="max_price"
                        name="max_price"
                        defaultValue={610}
                        data-max={610}
                        placeholder="Max price"
                        style={{ display: "none" }}
                      />
                      <button type="submit" className="button">
                        <Trans i18nKey="filter">
                          <span>{t("filter")}</span>
                        </Trans>
                      </button>
                      <div className="price_label" style={{}}>
                        <Trans i18nKey="price">
                          <span>{t("price")}</span>
                        </Trans>
                        : <span className="from">$300</span> ???
                        <span className="to">$610</span>
                      </div>
                      <input type="hidden" name="q" defaultValue="/shop/" />
                      <div className="clear" />
                    </div>
                  </div>
                </form>
              </aside>
              <aside
                id="woocommerce_product_categories-2"
                className="widget woocommerce widget_product_categories"
              >
                <h5 className="widget_title">
                  <Trans i18nKey="categories">
                    <span>{t("categories")}</span>
                  </Trans>
                </h5>
                <ul className="product-categories">
                  <li className="cat-item cat-item-29">
                    <a href="#">
                      <Trans i18nKey="blazers">
                        <span>{t("blazers")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="cat-item cat-item-30">
                    <a href="#/">
                      <Trans i18nKey="shirts">
                        <span>{t("shirts")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="cat-item cat-item-28">
                    <a href="#/">
                      <Trans i18nKey="header.suits">
                        <span>{t("header.suits")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="cat-item cat-item-33">
                    <a href="#/">
                      <Trans i18nKey="ties">
                        <span>{t("ties")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="cat-item cat-item-32">
                    <a href="#/">
                      <Trans i18nKey="trousers">
                        <span>{t("trousers")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="cat-item cat-item-31">
                    <a href="#/">
                      <Trans i18nKey="waistcoats">
                        <span>{t("waistcoats")}</span>
                      </Trans>
                    </a>
                  </li>
                </ul>
              </aside>
              <aside
                id="woocommerce_product_tag_cloud-2"
                className="widget woocommerce widget_product_tag_cloud"
              >
                <h5 className="widget_title">
                  <Trans i18nKey="tags">
                    <span>{t("tags")}</span>
                  </Trans>
                </h5>
                <div className="tagcloud">
                  <a
                    
                    className="tag-cloud-link tag-link-35 tag-link-position-1 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "15.636363636364pt" }}
                    aria-label="Accessories (3 products)"
                  >
                    <Trans i18nKey="accessories">
                      <span>{t("accessories")}</span>
                    </Trans>
                  </a>
                  <a
                    href="/#/"
                    className="tag-cloud-link tag-link-37 tag-link-position-2 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "8pt" }}
                    aria-label="Classic (2 products)"
                  >
                    <Trans i18nKey="header.classic">
                      <span>{t("header.classic")}</span>
                    </Trans>
                  </a>
                  <a
                    href="/#/"
                    className="tag-cloud-link tag-link-38 tag-link-position-3 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "15.636363636364pt" }}
                    aria-label="Fit (3 products)"
                  >
                    <Trans i18nKey="fit">
                      <span>{t("fit")}</span>
                    </Trans>
                  </a>
                  <a
                    href="#"
                    className="tag-cloud-link tag-link-36 tag-link-position-4 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "15.636363636364pt" }}
                    aria-label="Jackets (3 products)"
                  >
                    <Trans i18nKey="jackets">
                      <span>{t("jackets")}</span>
                    </Trans>
                  </a>
                  <a
                    href="#"
                    className="tag-cloud-link tag-link-40 tag-link-position-5 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "8pt" }}
                    aria-label="Scarves (2 products)"
                  >
                    <Trans i18nKey="scarves">
                      <span>{t("scarves")}</span>
                    </Trans>
                  </a>
                  <a
                    href="#"
                    className="tag-cloud-link tag-link-39 tag-link-position-6 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "15.636363636364pt" }}
                    aria-label="Skinny fit (3 products)"
                  >
                    <Trans i18nKey="skin_ny_fit">
                      <span>{t("skin_ny_fit")}</span>
                    </Trans>
                  </a>
                  <a
                    href="/#/"
                    className="tag-cloud-link tag-link-34 tag-link-position-7 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "22pt" }}
                    aria-label="Wedding (4 products)"
                  >
                    <Trans i18nKey="wedding">
                      <span>{t("wedding")}</span>
                    </Trans>
                  </a>
                </div>
              </aside>
            </div>
            {/* /.sidebar_inner */}
          </div>
          {/* /.sidebar */}
        </div>
        {/* </.content_wrap> */}
      </div>
      <Footer />
    </body>
  );
};

export default Shop;
