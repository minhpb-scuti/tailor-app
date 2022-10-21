/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import HeaderShop from "../HeaderShop";
import Product1 from "../../static/image/product-1.webp";
import Product2 from "../../static/image/product-2.webp";
import Product3 from "../../static/image/product-3.webp";
import Product4 from "../../static/image/product-4.webp";
import Product5 from "../../static/image/product-5.webp";
import Product6 from "../../static/image/product-6.webp";
import Layer786 from "../../static/image/layer-786.jpg";
import Layer787 from "../../static/image/layer-787.png";
import Partner1 from "../../static/image/partners_1.png";
import Partner2 from "../../static/image/partners_2.png";
import Partner3 from "../../static/image/partners_3.png";
import Partner4 from "../../static/image/partners_4.png";
import Partner5 from "../../static/image/partners_5.png";
import { useWindowDimensions, getWidthContent } from "../../customHook";
import { Trans, useTranslation } from "react-i18next";

const ShopHomePage = () => {
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();
  const contentWidth = getWidthContent(width);
  const { t } = useTranslation();

  return (
    <body className="page-template-default page page-id-194 custom-background theme-petermason woocommerce-js body_tag scheme_default blog_mode_page body_style_wide is_single sidebar_hide expand_content remove_margins header_style_header-custom-621 header_position_default menu_style_top trx_addons_present wpb-js-composer js-comp-ver-6.9.0 vc_responsive added_to_cart_inited desktop_layout">
      <div className="body_wrap">
        <div className="page_wrap">
          <HeaderShop pathname={pathname} children={<></>} />
          <div className="page_content_wrap scheme_default">
            <div className="content_wrap">
              <div className="content">
                <article
                  id="post-810"
                  className="post_item_single post_type_page post-810 page type-page status-publish hentry"
                >
                  <div className="post_content entry-content">
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1482492282213 vc_row-has-fill"
                      style={{
                        position: "relative",
                        left: -(width - contentWidth) / 2,
                        boxSizing: "border-box",
                        width: width,
                        maxWidth: width,
                        paddingLeft: (width - contentWidth) / 2,
                        paddingRight: (width - contentWidth) / 2,
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space height_tiny"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_large"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1482492282213 vc_row-has-fill"
                      style={{
                        position: "relative",
                        left: -(width - contentWidth) / 2,
                        boxSizing: "border-box",
                        width: width,
                        maxWidth: width,
                        paddingLeft: (width - contentWidth) / 2,
                        paddingRight: (width - contentWidth) / 2,
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="sc_promo_1004707038"
                              className="scheme_dark sc_promo sc_promo_modern vc_custom_1482931251491 sc_promo_size_normal sc_promo_no_image"
                            >
                              <div
                                className="sc_promo_text"
                                style={{ width: "100%" }}
                              >
                                <div
                                  className="sc_promo_text_inner"
                                  style={{ margin: "217px 0 14px" }}
                                >
                                  <div className="sc_item_button sc_item_button_simple sc_promo_button sc_align_center sc_button_wrap">
                                    <a
                                      href="/shop/"
                                      id="sc_button_1571038704"
                                      className="sc_button sc_button_simple sc_button_size_normal sc_button_icon_left"
                                    >
                                      <span className="sc_button_text">
                                        <span className="sc_button_title">
                                          <Trans i18nKey="collection_by_store">
                                            <span>
                                              {t("collection_by_store")}
                                            </span>
                                          </Trans>
                                        </span>
                                      </span>
                                      {/* /.sc_button_text */}
                                    </a>
                                    {/* /.sc_button */}
                                  </div>
                                  {/* /.sc_item_button sc_item_button_simple sc_promo_button sc_align_center */}
                                </div>
                              </div>
                              {/* /.sc_promo_text */}
                            </div>
                            {/* /.sc_promo */}
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="sc_promo_1608648294"
                              className="scheme_dark sc_promo sc_promo_modern vc_custom_1482931261420 sc_promo_size_normal sc_promo_no_image"
                            >
                              <div
                                className="sc_promo_text"
                                style={{ width: "100%" }}
                              >
                                <div
                                  className="sc_promo_text_inner"
                                  style={{ margin: "217px 5px 14px" }}
                                >
                                  <div className="sc_item_button sc_item_button_simple sc_promo_button sc_align_center sc_button_wrap">
                                    <a
                                      href="/shop/"
                                      id="sc_button_718864084"
                                      className="sc_button sc_button_simple sc_button_size_normal sc_button_icon_left"
                                    >
                                      <span className="sc_button_text">
                                        <span className="sc_button_title">
                                          <Trans i18nKey="lastest_arrivals">
                                            <span>{t("lastest_arrivals")}</span>
                                          </Trans>
                                        </span>
                                      </span>
                                      {/* /.sc_button_text */}
                                    </a>
                                    {/* /.sc_button */}
                                  </div>
                                  {/* /.sc_item_button sc_item_button_simple sc_promo_button sc_align_center */}
                                </div>
                              </div>
                              {/* /.sc_promo_text */}
                            </div>
                            {/* /.sc_promo */}
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="sc_promo_2095498459"
                              className="scheme_dark sc_promo sc_promo_modern vc_custom_1482931344251 sc_promo_size_normal sc_promo_no_image"
                            >
                              <div
                                className="sc_promo_text"
                                style={{ width: "100%" }}
                              >
                                <div
                                  className="sc_promo_text_inner"
                                  style={{ margin: "217px 0 14px" }}
                                >
                                  <div className="sc_item_button sc_item_button_simple sc_promo_button sc_align_center sc_button_wrap">
                                    <a
                                      href="/shop/"
                                      id="sc_button_141976340"
                                      className="sc_button sc_button_simple sc_button_size_normal sc_button_icon_left"
                                    >
                                      <span className="sc_button_text">
                                        <span className="ssc_button_title">
                                          <Trans i18nKey="top_reasons">
                                            <span>{t("top_reasons")}</span>
                                          </Trans>
                                        </span>
                                      </span>
                                      {/* /.sc_button_text */}
                                    </a>
                                    {/* /.sc_button */}
                                  </div>
                                  {/* /.sc_item_button sc_item_button_simple sc_promo_button sc_align_center */}
                                </div>
                              </div>
                              {/* /.sc_promo_text */}
                            </div>
                            {/* /.sc_promo */}
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1482492282213 vc_row-has-fill"
                      style={{
                        position: "relative",
                        left: -(width - contentWidth) / 2,
                        boxSizing: "border-box",
                        width: width,
                        maxWidth: width,
                        paddingLeft: (width - contentWidth) / 2,
                        paddingRight: (width - contentWidth) / 2,
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space height_tiny"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_large"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: "1.708rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_medium"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_medium"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="sc_title_1429898441"
                              className="sc_title sc_title_default"
                            >
                              <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_style_h1">
                                <Trans i18nKey="recent_products">
                                  <span>{t("recent_products")}</span>
                                </Trans>
                              </h2>
                              <div className="sc_item_subtitle_container sc_align_center sc_item_title_style_style_h1">
                                <h6 className="sc_item_subtitle sc_title_subtitle sc_item_title_style_style_h1">
                                  <Trans i18nKey="online_store">
                                    <span>{t("online_store")}</span>
                                  </Trans>
                                </h6>
                              </div>
                            </div>
                            {/* /.sc_title */}
                            <div
                              className="vc_empty_space height_tiny"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="woocommerce columns-4">
                              <ul className="products columns-4">
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
                                            <Trans i18nKey="product3">
                                              {t("product3")}
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
                                            600.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                        –
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            609.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                      </span>
                                      <a
                                        href="/product/slim-fit-3pc-solid-blue-suit/"
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                                        data-product_id={233}
                                        data-product_sku
                                        aria-label="Select options for “Slim Fit 3pc Solid Blue Suit”"
                                        rel="nofollow"
                                      >
                                        <Trans i18nKey="buy_now">
                                          {t("buy_now")}
                                        </Trans>
                                      </a>
                                    </div>
                                    {/* /.post_data */}
                                  </div>
                                  {/* /.post_item */}
                                </li>
                                <li className="product type-product post-229 status-publish instock product_cat-shirts product_cat-suits product_cat-trousers product_cat-waistcoats product_tag-classic product_tag-fit product_tag-scarves product_tag-skinny-fit has-post-thumbnail shipping-taxable purchasable product-type-variable">
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
                                            500.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                        –
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            530.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                      </span>
                                      <a
                                        href="/product/traditional-fit-2pc-brown-suit/"
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                                        data-product_id={229}
                                        data-product_sku
                                        aria-label="Select options for “Traditional Fit 2pc Brown Suit”"
                                        rel="nofollow"
                                      >
                                        <Trans i18nKey="buy_now">
                                          {t("buy_now")}
                                        </Trans>
                                      </a>
                                    </div>
                                    {/* /.post_data */}
                                  </div>
                                  {/* /.post_item */}
                                </li>
                                <li className="product type-product post-225 status-publish instock product_cat-blazers product_cat-ties product_cat-trousers product_cat-waistcoats product_tag-accessories product_tag-scarves product_tag-wedding has-post-thumbnail sale shipping-taxable purchasable product-type-variable">
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
                                            400.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                      </span>
                                      <a
                                        href="/product/luxury-fit-3pc-black-solid-suit/"
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                                        data-product_id={225}
                                        data-product_sku
                                        aria-label="Select options for “Luxury Fit 3pc Black Solid Suit”"
                                        rel="nofollow"
                                      >
                                        <Trans i18nKey="buy_now">
                                          {t("buy_now")}
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
                                            300.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                        –
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            340.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                      </span>
                                      <a
                                        href="/product/exclusive-fit-3pc-dark-blue-suit/"
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                                        data-product_id={220}
                                        data-product_sku
                                        aria-label="Select options for “Exclusive Fit 3pc Dark Blue Suit”"
                                        rel="nofollow"
                                      >
                                        <Trans i18nKey="buy_now">
                                          {t("buy_now")}
                                        </Trans>
                                      </a>
                                    </div>
                                    {/* /.post_data */}
                                  </div>
                                  {/* /.post_item */}
                                </li>
                              </ul>
                            </div>
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-6 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="sc_action_1549114827"
                              className="scheme_dark sc_action sc_action_modern"
                              data-slides-min-width={250}
                            >
                              <div className="sc_action_content sc_item_content">
                                <div
                                  className="sc_action_item sc_action_item_modern with_image sc_action_fixed_height sc_action_item_mc"
                                  style={{
                                    backgroundImage: `url(${Layer786})`,
                                    height: "220px",
                                    overflow: "hidden",
                                  }}
                                >
                                  <div className="sc_action_item_border" />
                                  <div className="sc_action_item_mask" />
                                  <div className="sc_action_item_inner">
                                    <h3 className="sc_action_item_title">
                                      <Trans i18nKey="save_60">
                                        <span>{t("save_60")}</span>
                                      </Trans>
                                    </h3>
                                    <a
                                      href="/shop/"
                                      className="sc_action_item_link"
                                    >
                                      <Trans i18nKey="learn_more">
                                        <span>{t("learn_more")}</span>
                                      </Trans>
                                    </a>
                                  </div>
                                  {/* /.sc_action_item_inner */}
                                </div>
                              </div>
                            </div>
                            {/* /.sc_action */}
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="sc_action_1653621350"
                              className="scheme_dark sc_action sc_action_modern"
                              data-slides-min-width={250}
                            >
                              <div className="sc_action_content sc_item_content">
                                <div
                                  className="sc_action_item sc_action_item_modern with_image sc_action_fixed_height sc_action_item_mc"
                                  style={{
                                    backgroundImage: `url(${Layer787})`,
                                    height: "220px",
                                    overflow: "hidden",
                                  }}
                                >
                                  <div className="sc_action_item_border" />
                                  <div className="sc_action_item_mask" />
                                  <div className="sc_action_item_inner">
                                    <h3 className="sc_action_item_title">
                                      <Trans i18nKey="save_60">
                                        <span>{t("save_60")}</span>
                                      </Trans>
                                    </h3>
                                    <a
                                      href="/shop/"
                                      className="sc_action_item_link"
                                    >
                                      <Trans i18nKey="learn_more">
                                        <span>{t("learn_more")}</span>
                                      </Trans>
                                    </a>
                                  </div>
                                  {/* /.sc_action_item_inner */}
                                </div>
                              </div>
                            </div>
                            {/* /.sc_action */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: "1.708rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_medium"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_medium"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="sc_title_725913386"
                              className="sc_title sc_title_default"
                            >
                              <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_style_h1">
                                <Trans i18nKey="top_sellers">
                                  <span>{t("top_sellers")}</span>
                                </Trans>
                              </h2>
                              <div className="sc_item_subtitle_container sc_align_center sc_item_title_style_style_h1">
                                <h6 className="sc_item_subtitle sc_title_subtitle sc_item_title_style_style_h1">
                                  <Trans i18nKey="online_store">
                                    <span>{t("online_store")}</span>
                                  </Trans>
                                </h6>
                              </div>
                            </div>
                            {/* /.sc_title */}
                            <div
                              className="vc_empty_space height_tiny"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="woocommerce columns-4">
                              <ul className="products columns-4">
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
                                            400.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                        –
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            459.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                      </span>
                                      <a
                                        href="/product/slim-fit-2pc-black-mini-checkered-suit/"
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                                        data-product_id={241}
                                        data-product_sku
                                        aria-label="Select options for “Slim Fit 2pc Black Mini Checkered Suit”"
                                        rel="nofollow"
                                      >
                                        <Trans i18nKey="buy_now">
                                          {t("buy_now")}
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
                                            300.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                        –
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            329.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                      </span>
                                      <a
                                        href="/product/modern-fit-2pc-ultra-black-suit/"
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                                        data-product_id={237}
                                        data-product_sku
                                        aria-label="Select options for “Modern Fit 2pc Ultra Black Suit”"
                                        rel="nofollow"
                                      >
                                        <Trans i18nKey="buy_now">
                                          {t("buy_now")}
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
                                            <Trans i18nKey="product3">
                                              {t("product3")}
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
                                            600.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                        –
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            609.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                      </span>
                                      <a
                                        href="/product/slim-fit-3pc-solid-blue-suit/"
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                                        data-product_id={233}
                                        data-product_sku
                                        aria-label="Select options for “Slim Fit 3pc Solid Blue Suit”"
                                        rel="nofollow"
                                      >
                                        <Trans i18nKey="buy_now">
                                          {t("buy_now")}
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
                                            500.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                        –
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            530.
                                            <span className="decimals">00</span>
                                          </bdi>
                                        </span>
                                      </span>
                                      <a
                                        href="/product/traditional-fit-2pc-brown-suit/"
                                        data-quantity={1}
                                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                                        data-product_id={229}
                                        data-product_sku
                                        aria-label="Select options for “Traditional Fit 2pc Brown Suit”"
                                        rel="nofollow"
                                      >
                                        <Trans i18nKey="buy_now">
                                          {t("buy_now")}
                                        </Trans>
                                      </a>
                                    </div>
                                    {/* /.post_data */}
                                  </div>
                                  {/* /.post_item */}
                                </li>
                              </ul>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "2.5rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1482496094758 vc_row-has-fill scheme_dark"
                      style={{
                        position: "relative",
                        left: -(width - contentWidth) / 2,
                        boxSizing: "border-box",
                        width: width,
                        maxWidth: width,
                        paddingLeft: (width - contentWidth) / 2,
                        paddingRight: (width - contentWidth) / 2,
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: "2.5rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="widget_slider_824525107"
                              className="widget_area sc_widget_slider vc_widget_slider wpb_content_element"
                            >
                              <aside
                                id="widget_slider_824525107_widget"
                                className="widget widget_slider"
                              >
                                <div className="slider_wrap slider_engine_swiper">
                                  <div
                                    id="widget_slider_824525107_swiper_outer"
                                    className="slider_swiper_outer slider_style_default slider_outer_controls slider_outer_controls_side slider_outer_nopagination slider_outer_notitles slider_outer_multi"
                                  >
                                    <div
                                      id="widget_slider_824525107_swiper"
                                      className="slider_swiper swiper-slider-container slider_controls slider_controls_side slider_nopagination slider_notitles slider_multi slider_noresize slider_height_auto slider_type_images widget_slider_824525107_swiper inited swiper-container-horizontal"
                                      data-interval={7000}
                                      data-effect="slide"
                                      data-pagination="bullets"
                                      data-slides-per-view={5}
                                      data-slides-space={0}
                                      style={{
                                        display: "block",
                                        opacity: 1,
                                        cursor: "grab",
                                      }}
                                      data-slides-min-width={180}
                                      data-busy={0}
                                      data-ratio="234:75"
                                    >
                                      <div
                                        className="swiper-wrapper"
                                        style={{
                                          transform:
                                            "translate3d(-1638px,0px,0px)",
                                          transitionDuration: "0ms",
                                        }}
                                      >
                                        <div
                                          className="swiper-slide swiper-slide-duplicate"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner2} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-duplicate"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner5} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-duplicate"
                                          style={{ width: "234px" }}
                                          data-slide-number={2}
                                          data-swiper-slide-index={2}
                                        >
                                          <img src={Partner1} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-duplicate"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner3} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-duplicate"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner4} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner2} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-prev"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner5} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-active"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner1} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-next"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner3} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner4} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-duplicate"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner2} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-duplicate"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner5} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-duplicate"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner1} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-duplicate"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner3} alt="" />
                                        </div>
                                        <div
                                          className="swiper-slide swiper-slide-duplicate"
                                          style={{ width: "234px" }}
                                        >
                                          <img src={Partner4} alt="" />
                                        </div>
                                      </div>
                                      <div className="slider_controls_wrap">
                                        <a className="slider_prev swiper-button-prev" />
                                        <a className="slider_next swiper-button-next" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </aside>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "2.5rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                  </div>
                  {/* .entry-content */}
                </article>
              </div>
              {/* </.content> */}
            </div>
            {/* </.content_wrap> */}
          </div>

          <Footer />
        </div>
      </div>
    </body>
  );
};

export default ShopHomePage;
