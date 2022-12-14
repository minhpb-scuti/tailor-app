/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Footer from "../Footer";
import HeaderShop from "../HeaderShop";
import Product2 from "../../static/image/product-2.webp";
import Product3 from "../../static/image/product-3.webp";
import Product4 from "../../static/image/product-4.webp";
import Product5 from "../../static/image/product-5.webp";
import Product6 from "../../static/image/product-6.webp";
import { Trans, useTranslation } from "react-i18next";

const Shop = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState<string>("description");
  const { t } = useTranslation();

  return (
    <body className="product-template-default single single-product postid-241 custom-background theme-petermason woocommerce woocommerce-page woocommerce-js body_tag scheme_default blog_mode_shop body_style_wide is_stream blog_style_excerpt sidebar_hide expand_content header_style_header-custom-398 header_position_default menu_style_top trx_addons_present wpb-js-composer js-comp-ver-6.9.0 vc_responsive added_to_cart_inited desktop_layout">
      <HeaderShop
        pathname={pathname}
        children={
          <BreadCrumb
            text="product3"
            text1="shop"
            href1="/shop"
            text2={t("blazers")}
          />
        }
      />
      <div className="page_content_wrap scheme_default">
        <div className="content_wrap">
          <div className="content">
            <article className="post_item_single post_type_product">
              <nav className="woocommerce-breadcrumb">
                <a href="/">Home</a>&nbsp;/&nbsp;
                <a href="#/">Suits</a>
                &nbsp;/&nbsp; <Trans i18nKey="product3">{t("product3")}</Trans>
              </nav>
              <div className="woocommerce-notices-wrapper" />
              <div
                id="product-241"
                className="product type-product post-241 status-publish first instock product_cat-blazers product_cat-suits product_tag-accessories product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable"
              >
                <div
                  className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
                  data-columns={4}
                  style={{
                    opacity: 1,
                    transition: "opacity 0.25s ease-in-out 0s",
                  }}
                >
                  <a href="#" className="woocommerce-product-gallery__trigger">
                    <img
                      draggable="false"
                      className="emoji"
                      alt="????"
                      style={{
                        border: "none",
                      }}
                    />
                  </a>
                  <figure className="woocommerce-product-gallery__wrapper">
                    <div
                      data-thumb="/wp-content/uploads/2016/11/product-1-100x100.jpg"
                      data-thumb-alt
                      className="woocommerce-product-gallery__image"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <a href="#">
                        <img
                          src={Product3}
                          className="wp-post-image"
                          alt=""
                          loading="lazy"
                          title="product-1"
                          width={600}
                          height={600}
                        />
                      </a>
                    </div>
                  </figure>
                </div>
                <div className="summary entry-summary">
                  <h1 className="product_title entry-title">
                    <Trans i18nKey="product3">{t("product3")}</Trans>
                  </h1>
                  <p className="price">
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
                  </p>
                  <div className="woocommerce-product-details__short-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse
                      molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent luptatum zzril delenit.
                    </p>
                  </div>
                  <form className="variations_form cart">
                    <table
                      className="variations"
                      role="presentation"
                      cellSpacing={0}
                    >
                      <tbody>
                        <tr>
                          <th className="label">
                            <label htmlFor="pa_size">size</label>
                          </th>
                          <td className="value">
                            <div className="select_container">
                              <select
                                id="pa_size"
                                name="attribute_pa_size"
                                data-attribute_name="attribute_pa_size"
                                data-show_option_none="yes"
                              >
                                <option selected>Choose an option</option>
                                <option value="m" className="attached enabled">
                                  M
                                </option>
                                <option value="l" className="attached enabled">
                                  L
                                </option>
                              </select>
                            </div>
                            <a
                              className="reset_variations"
                              href="#"
                              style={{ visibility: "hidden" }}
                            >
                              Clear
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="single_variation_wrap">
                      <div
                        className="woocommerce-variation single_variation"
                        style={{ display: "none" }}
                      />
                      <div className="woocommerce-variation-add-to-cart variations_button woocommerce-variation-add-to-cart-disabled">
                        <div className="quantity">
                          <label
                            className="screen-reader-text"
                            htmlFor="quantity_6345848b9eab8"
                          >
                            <Trans i18nKey="product6">{t("product6")}</Trans>
                          </label>
                          <input
                            type="number"
                            id="quantity_6345848b9eab8"
                            className="input-text qty text"
                            step={1}
                            min={1}
                            max={100}
                            name="quantity"
                            defaultValue={1}
                            title="Qty"
                            size={4}
                            autoComplete="off"
                          />
                          <span className="q_inc" />
                          <span className="q_dec" />
                        </div>
                        <button
                          type="submit"
                          className="single_add_to_cart_button button alt sc_button sc_button_style_2 sc_button_hover_slide_bottom disabled wc-variation-selection-needed"
                        >
                          <Trans i18nKey="buy_now">
                            <span>{t("buy_now")}</span>
                          </Trans>
                        </button>
                        <input
                          type="hidden"
                          name="add-to-cart"
                          defaultValue={241}
                        />
                        <input
                          type="hidden"
                          name="product_id"
                          defaultValue={241}
                        />
                        <input
                          type="hidden"
                          name="variation_id"
                          className="variation_id"
                          defaultValue={0}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="product_meta">
                    <span className="sku_wrapper">
                      <Trans i18nKey="sku">
                        <span>{t("sku")}</span>
                      </Trans>
                      : <span className="sku">N/A</span>
                    </span>
                    <span className="posted_in">
                      <Trans i18nKey="categories">
                        <span>{t("categories")}</span>
                      </Trans>
                      :
                      <a href="#" rel="tag">
                        <Trans i18nKey="blazers">
                          <span>{t("blazers")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="tag">
                        <Trans i18nKey="header.suits">
                          <span>{t("header.suits")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="tagged_as">
                      <Trans i18nKey="tags">
                        <span>{t("tags")}</span>
                      </Trans>
                      :
                      <a rel="tag">
                        <Trans i18nKey="accessories">
                          <span>{t("accessories")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="/#/" rel="tag">
                        <Trans i18nKey="wedding">
                          <span>{t("wedding")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="product_id">
                      <Trans i18nKey="product_id">
                        <span>{t("product_id")}</span>
                      </Trans>
                      : <span>241</span>
                    </span>
                  </div>
                </div>
                <div className="trx-stretch-width-wrap scheme_default">
                  <div
                    className="trx-stretch-width inited"
                    style={{
                      position: "relative",
                      boxSizing: "border-box",

                      width: "100%",
                    }}
                  >
                    <div className="woocommerce-tabs wc-tabs-wrapper">
                      <ul className="tabs wc-tabs" role="tablist">
                        <li
                          className={`description_tab ${
                            active === "description" ? "active" : ""
                          }`}
                          onClick={() => setActive("description")}
                          id="tab-title-description"
                          role="tab"
                          aria-controls="tab-description"
                        >
                          <a
                            href="#tab-description"
                            className="sc_button sc_button_style_2 sc_button_hover_slide_bottom"
                          >
                            <Trans i18nKey="description">
                              <span>{t("description")}</span>
                            </Trans>
                          </a>
                        </li>
                        <li
                          className={`additional_information_tab ${
                            active === "information" ? "active" : ""
                          }`}
                          onClick={() => setActive("information")}
                          id="tab-title-additional_information"
                          role="tab"
                          aria-controls="tab-additional_information"
                        >
                          <a
                            href="#tab-additional_information"
                            className="sc_button sc_button_style_2 sc_button_hover_slide_bottom"
                          >
                            <Trans i18nKey="additional_information">
                              <span>{t("additional_information")}</span>
                            </Trans>
                          </a>
                        </li>
                        <li
                          className={`reviews_tab ${
                            active === "review" ? "active" : ""
                          }`}
                          onClick={() => setActive("review")}
                          id="tab-title-reviews"
                          role="tab"
                          aria-controls="tab-reviews"
                        >
                          <a
                            href="#tab-reviews"
                            className="sc_button sc_button_style_2 sc_button_hover_slide_bottom"
                          >
                            <Trans i18nKey="reviews">
                              <span>{t("reviews")}</span>
                            </Trans>
                            (0)
                          </a>
                        </li>
                      </ul>
                      {active === "description" && (
                        <div
                          className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                          id="tab-description"
                          role="tabpanel"
                          aria-labelledby="tab-title-description"
                          style={{ display: "block" }}
                        >
                          <h2>
                            <Trans i18nKey="description">
                              <span>{t("description")}</span>
                            </Trans>
                          </h2>
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
                            delenit augue duis dolore te feugait nulla facilisi.
                          </p>
                        </div>
                      )}
                      {active === "information" && (
                        <div
                          className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab"
                          id="tab-additional_information"
                          role="tabpanel"
                          aria-labelledby="tab-title-additional_information"
                          style={{ display: "block" }}
                        >
                          <h2>
                            <Trans i18nKey="additional_information">
                              <span>{t("additional_information")}</span>
                            </Trans>
                          </h2>
                          <table className="woocommerce-product-attributes shop_attributes">
                            <tbody>
                              <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
                                <th className="woocommerce-product-attributes-item__label">
                                  <Trans i18nKey="size">
                                    <span>{t("size")}</span>
                                  </Trans>
                                </th>
                                <td className="woocommerce-product-attributes-item__value">
                                  <p>M, L</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {active === "review" && (
                        <div
                          className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                          id="tab-reviews"
                          role="tabpanel"
                          aria-labelledby="tab-title-reviews"
                          style={{ display: "block" }}
                        >
                          <div id="reviews" className="woocommerce-Reviews">
                            <div id="comments">
                              <h2 className="woocommerce-Reviews-title">
                                <Trans i18nKey="reviews">
                                  <span>{t("reviews")}</span>
                                </Trans>
                              </h2>
                              <p className="woocommerce-noreviews">
                                <Trans i18nKey="no_review">
                                  <span>{t("no_review")}</span>
                                </Trans>
                              </p>
                            </div>
                            <div id="review_form_wrapper">
                              <div id="review_form">
                                <div id="respond" className="comment-respond">
                                  <span
                                    id="reply-title"
                                    className="comment-reply-title"
                                  >
                                    <Trans i18nKey="be_the_first_review">
                                      <span>{t("be_the_first_review")}</span>
                                    </Trans>{" "}
                                    ???
                                    <Trans i18nKey="product1">
                                      <span>{t("product1")}</span>
                                    </Trans>
                                    ???
                                    <small>
                                      <a
                                        rel="nofollow"
                                        id="cancel-comment-reply-link"
                                        href="/product/slim-fit-2pc-black-mini-checkered-suit/#respond"
                                        style={{ display: "none" }}
                                      >
                                        Cancel reply
                                      </a>
                                    </small>
                                  </span>
                                  <form
                                    id="commentform"
                                    className="comment-form"
                                  >
                                    <p className="comment-notes">
                                      <span id="email-notes">
                                        <Trans i18nKey="email_address_not_published">
                                          <span>
                                            {t("email_address_not_published")}
                                          </span>
                                        </Trans>
                                      </span>
                                      <span
                                        className="required-field-message"
                                        aria-hidden="true"
                                      >
                                        <Trans i18nKey="required_fields_are_marked">
                                          <span>
                                            {t("required_fields_are_marked")}
                                          </span>
                                        </Trans>
                                        <span
                                          className="required"
                                          aria-hidden="true"
                                        >
                                          *
                                        </span>
                                      </span>
                                    </p>
                                    <div className="comment-form-rating">
                                      <label htmlFor="rating">
                                        <Trans i18nKey="your_rating">
                                          <span>{t("your_rating")}</span>
                                        </Trans>
                                        &nbsp;
                                        <span className="required">*</span>
                                      </label>
                                      <p className="stars">
                                        <span>
                                          <a className="star-1" href="#">
                                            1
                                          </a>
                                          <a className="star-2" href="#">
                                            2
                                          </a>
                                          <a className="star-3" href="#">
                                            3
                                          </a>
                                          <a className="star-4" href="#">
                                            4
                                          </a>
                                          <a className="star-5" href="#">
                                            5
                                          </a>
                                        </span>
                                      </p>
                                      <div className="select_container">
                                        <select
                                          name="rating"
                                          id="rating"
                                          required
                                          style={{ display: "none" }}
                                        >
                                          <option selected>Rate???</option>
                                          <option value={5}>Perfect</option>
                                          <option value={4}>Good</option>
                                          <option value={3}>Average</option>
                                          <option value={2}>
                                            Not that bad
                                          </option>
                                          <option value={1}>Very poor</option>
                                        </select>
                                      </div>
                                    </div>
                                    <p className="comment-form-comment">
                                      <label htmlFor="comment">
                                        <Trans i18nKey="your_review">
                                          <span>{t("your_review")}</span>
                                        </Trans>
                                        &nbsp;
                                        <span className="required">*</span>
                                      </label>
                                      <textarea
                                        id="comment"
                                        name="comment"
                                        cols={45}
                                        rows={8}
                                        required
                                        defaultValue={""}
                                      />
                                    </p>
                                    <p className="comment-form-author">
                                      <label htmlFor="author">
                                        <Trans i18nKey="name">
                                          <span>{t("name")}</span>
                                        </Trans>
                                        &nbsp;
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        id="author"
                                        name="author"
                                        type="text"
                                        size={30}
                                        required
                                      />
                                    </p>
                                    <p className="comment-form-email">
                                      <label htmlFor="email">
                                        <Trans i18nKey="email">
                                          <span>{t("email")}</span>
                                        </Trans>
                                        &nbsp;
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        size={30}
                                        required
                                      />
                                    </p>
                                    <p className="wpgdprc-checkbox comment-form-wpgdprc">
                                      <input
                                        type="checkbox"
                                        name="wpgdprc"
                                        id="wpgdprc"
                                        defaultValue={1}
                                        className="inited"
                                      />
                                      <label htmlFor="wpgdprc">
                                        <Trans i18nKey="agree">
                                          <span>{t("agree")}</span>
                                        </Trans>
                                        <abbr
                                          className="wpgdprc-required"
                                          title="You need to accept this checkbox."
                                        >
                                          *
                                        </abbr>
                                      </label>
                                    </p>
                                    <p className="form-submit">
                                      <button
                                        type="submit"
                                        style={{
                                          backgroundColor: "#be9667",
                                        }}
                                      >
                                        <Trans i18nKey="submit">
                                          <span>{t("submit")}</span>
                                        </Trans>
                                      </button>
                                      <input
                                        type="hidden"
                                        name="comment_post_ID"
                                        defaultValue={241}
                                        id="comment_post_ID"
                                      />
                                      <input
                                        type="hidden"
                                        name="comment_parent"
                                        id="comment_parent"
                                        defaultValue={0}
                                      />
                                    </p>
                                  </form>
                                </div>
                                {/* #respond */}
                              </div>
                            </div>
                            <div className="clear" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="trx-stretch-width-original" />
                </div>
                <section className="related products">
                  <h2>
                    <Trans i18nKey="related_products">
                      <span>{t("related_products")}</span>
                    </Trans>
                  </h2>
                  <ul className="products columns-4">
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
                                <Trans i18nKey="product5">
                                  {t("product5")}
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
                          </span>
                          <a
                            href="/product/luxury-fit-3pc-black-solid-suit/"
                            data-quantity={1}
                            className="button product_type_variable add_to_cart_button sc_button_hover_style_inverse sc_button_style_2 sc_button_hover_slide_bottom"
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
                    <li className="product type-product post-233 status-publish instock product_cat-suits product_cat-ties product_cat-trousers product_cat-waistcoats product_tag-accessories product_tag-jackets product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
                      <div className="post_item post_layout_thumbs">
                        <div className="post_featured hover_shop">
                          <a href="/product/slim-fit-3pc-solid-blue-suit/">
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
                            href="/product/slim-fit-3pc-solid-blue-suit/"
                            data-quantity={1}
                            className="button product_type_variable add_to_cart_button sc_button_hover_style_inverse sc_button_style_2 sc_button_hover_slide_bottom"
                            data-product_id={233}
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
                                <Trans i18nKey="product4">
                                  {t("product4")}
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
                            className="button product_type_variable add_to_cart_button sc_button_hover_style_inverse sc_button_style_2 sc_button_hover_slide_bottom"
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
                    <li className="product type-product post-237 status-publish instock product_cat-blazers product_cat-shirts product_cat-suits product_tag-fit product_tag-jackets product_tag-skinny-fit product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
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
                            className="button product_type_variable add_to_cart_button sc_button_hover_style_inverse sc_button_style_2 sc_button_hover_slide_bottom"
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
                  </ul>
                </section>
              </div>
            </article>
            {/* /.post_item_single */}
          </div>
          {/* </.content> */}
        </div>
        {/* </.content_wrap> */}
      </div>

      <Footer />
    </body>
  );
};

export default Shop;
