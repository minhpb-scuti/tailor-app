import React, { useState, useEffect } from "react";
import Layer2 from "../../static/image/2-layers.webp";
import Service1 from "../../static/image/service-1.jpg";
import Service2 from "../../static/image/service-2.jpg";
import Service3 from "../../static/image/service-3.jpg";
import Service4 from "../../static/image/service-4.jpg";
import Bg15 from "../../static/image/background-15.webp";
import Bg17 from "../../static/image/background-17.webp";
import Product1 from "../../static/image/product-1.webp";
import Product2 from "../../static/image/product-2.webp";
import Product3 from "../../static/image/product-3.webp";
import Product4 from "../../static/image/product-4.webp";
import Header from "../Header";
import Slider from "../Slider";
import Footer from "../Footer";
import {
  getWidthContent,
  useWindowDimensions,
  getHeightCarousel,
} from "../../customHook/index";
import { useLocation } from "react-router-dom";
import Social from "../Social";
import Review from "../Review";
import Story from "../Story";
import Tailor from "../Tailor";
import { useTranslation, Trans } from "react-i18next";

const Home = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isPlayVideo, setIsPlayVideo] = useState<boolean>(false);
  const handleClickVideo = () => {
    setIsPlayVideo(true);
  };

  const { width } = useWindowDimensions();
  const contentWidth = getWidthContent(width);

  useEffect(() => {}, [width]);
  const i18nextLng = localStorage.getItem("i18nextLng");

  return (
    <body className="home page-template-default page page-id-27 custom-background theme-petermason frontpage woocommerce-js body_tag scheme_default blog_mode_home body_style_wide is_stream blog_style_excerpt sidebar_hide expand_content remove_margins header_style_header-custom-396 header_position_default menu_style_top trx_addons_present wpb-js-composer js-comp-ver-6.9.0 vc_responsive added_to_cart_inited desktop_layout">
      <div className="body_wrap">
        <div className="page_wrap">
          <Header
            children={<Slider height={getHeightCarousel(width)} />}
            pathname={location.pathname}
          />
          <div className="page_content_wrap scheme_default">
            <div className="content_wrap">
              <div className="content">
                <article
                  id="post-27"
                  className="post_item_single post_type_page post-27 page type-page status-publish hentry"
                >
                  <div className="post_content entry-content">
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid"
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
                              className="vc_empty_space height_medium"
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
                              className="vc_empty_space height_medium"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-10 sc_layouts_column_icons_position_left">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="wpb_single_image wpb_content_element vc_align_left">
                                      <figure className="wpb_wrapper vc_figure">
                                        <div className="vc_single_image-wrapper vc_box_border_grey">
                                          <img
                                            src={Layer2}
                                            className="vc_single_image-img attachment-full"
                                            alt=""
                                            loading="lazy"
                                            title="2-layers"
                                            style={{
                                              maxWidth: "100%",
                                            }}
                                          />
                                        </div>
                                      </figure>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: "0.85rem" }}
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
                              id="sc_title_26052858"
                              className="sc_title sc_title_default"
                            >
                              <h2 className="sc_item_title sc_title_title sc_align_default sc_item_title_style_style_h1">
                                {i18nextLng?.includes("en")
                                  ? "Discover true Quality"
                                  : "Khám phá chất lượng thực sự"}
                              </h2>
                              <div className="sc_item_subtitle_container sc_align_default sc_item_title_style_style_h1">
                                <h6 className="sc_item_subtitle sc_title_subtitle sc_item_title_style_style_h1">
                                  {i18nextLng?.includes("en")
                                    ? "HANDCRAFTED Suit"
                                    : "Bộ đồ THỦ CÔNG Suit"}
                                </h6>
                              </div>
                              <div className="sc_item_descr sc_title_descr sc_align_default">
                                {i18nextLng?.includes("en")
                                  ? "We provide you with great suits that befit you and your lifestyle. Our suits are made from the highest quality fabrics and guaranteed to give you functionality, durability and comfort. Our skilled master tailors handle all of our cutting and sewing, ensuring precision in all production processes and paying attention to the details. Come to us and choose the best suit for your lifestyle.."
                                  : "Chúng tôi cung cấp cho bạn những bộ đồ tuyệt vời phù hợp với bạn và phong cách sống của bạn. Những bộ quần áo của chúng tôi được làm từ những loại vải chất lượng cao nhất và đảm bảo mang đến cho bạn chức năng, độ bền và sự thoải mái. Các thợ may lành nghề của chúng tôi xử lý tất cả các khâu cắt và may của chúng tôi, đảm bảo độ chính xác trong tất cả các quy trình sản xuất và chú ý đến các chi tiết. Hãy đến với chúng tôi và chọn những bộ đồ phù hợp nhất với phong cách sống của bạn."}
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
                            <div className="sc_item_button sc_button_wrap sc_align_left">
                              <a
                                href="/about-us/"
                                id="sc_button_620154969"
                                className="sc_button sc_button_default sc_button_size_normal sc_button_icon_left"
                              >
                                <span className="sc_button_text">
                                  <span className="sc_button_title">
                                    {i18nextLng?.includes("en")
                                      ? "Learn about us"
                                      : "Đọc thêm về chúng tôi"}
                                  </span>
                                </span>
                                {/* /.sc_button_text */}
                              </a>
                              {/* /.sc_button */}
                            </div>
                            {/* /.sc_item_button */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="vc_row wpb_row vc_row-fluid"
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
                              className="vc_empty_space height_small"
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
                              className="vc_empty_space height_medium"
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
                      className="vc_row wpb_row vc_row-fluid vc_custom_1482405014156 vc_row-has-fill"
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
                              className="vc_empty_space height_small"
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
                            <div
                              className="sc_services sc_services_default"
                              data-slides-per-view={4}
                              data-slides-min-width={200}
                            >
                              <div className="sc_item_subtitle_container sc_align_center sc_item_title_style_style_2">
                                <h6 className="sc_item_subtitle sc_services_subtitle sc_item_title_style_style_2">
                                  <Trans i18nKey="our_service">
                                    <span>{t("our_service")}</span>
                                  </Trans>
                                </h6>
                              </div>
                              <div className="sc_services_columns sc_item_columns trx_addons_columns_wrap columns_padding_bottom">
                                <div className="trx_addons_column-1_4">
                                  <div className="sc_services_item with_image sc_services_item_featured_top">
                                    <div className="post_featured with_thumb hover_icon sc_services_item_thumb">
                                      <img
                                        src={Service1}
                                        className="attachment-petermason-thumb-square size-petermason-thumb-square wp-post-image"
                                        alt="Custom Accessories"
                                        width={400}
                                        height={400}
                                      />
                                      <div className="mask" />
                                      <div className="icons">
                                        <a
                                          href="/services/accessories/"
                                          aria-hidden="true"
                                          className="icon_plus"
                                        >
                                          +
                                        </a>
                                      </div>
                                    </div>
                                    <div className="sc_services_item_info">
                                      <div className="sc_services_item_header">
                                        <h4 className="sc_services_item_title">
                                          <a href="/services/accessories/">
                                            <Trans i18nKey="wedding_services">
                                              <span>
                                                {t("wedding_services")}
                                              </span>
                                            </Trans>
                                          </a>
                                        </h4>
                                        <div className="sc_services_item_subtitle" />
                                      </div>
                                      <div className="sc_services_item_content">
                                        <p>
                                          <Trans i18nKey="custom_acc_desc">
                                            <span>{t("custom_acc_desc")}</span>
                                          </Trans>
                                        </p>
                                      </div>
                                      <div className="sc_services_item_button sc_item_button">
                                        <a
                                          href="/services/accessories/"
                                          className="sc_button sc_button_style_2 sc_button_size_normal sc_button_hover_slide_bottom"
                                        >
                                          <Trans i18nKey="discover">
                                            <span>{t("discover")}</span>
                                          </Trans>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="trx_addons_column-1_4">
                                  <div className="sc_services_item with_image sc_services_item_featured_top">
                                    <div className="post_featured with_thumb hover_icon sc_services_item_thumb">
                                      <img
                                        src={Service4}
                                        className="attachment-petermason-thumb-square size-petermason-thumb-square wp-post-image"
                                        alt="Custom Tailoring"
                                        loading="lazy"
                                        width={400}
                                        height={400}
                                      />
                                      <div className="mask" />
                                      <div className="icons">
                                        <a
                                          href="/services/custom-tailoring/"
                                          aria-hidden="true"
                                          className="icon_plus"
                                        >
                                          +
                                        </a>
                                      </div>
                                    </div>
                                    <div className="sc_services_item_info">
                                      <div className="sc_services_item_header">
                                        <h4 className="sc_services_item_title">
                                          <a href="/services/custom-tailoring/">
                                            <Trans i18nKey="custom_tailoring">
                                              <span>
                                                {t("custom_tailoring")}
                                              </span>
                                            </Trans>
                                          </a>
                                        </h4>
                                        <div className="sc_services_item_subtitle" />
                                      </div>
                                      <div className="sc_services_item_content">
                                        <p>
                                          <Trans i18nKey="custom_tailor_desc">
                                            <span>
                                              {t("custom_tailor_desc")}
                                            </span>
                                          </Trans>
                                        </p>
                                      </div>
                                      <div className="sc_services_item_button sc_item_button">
                                        <a
                                          href="/services/custom-tailoring/"
                                          className="sc_button sc_button_style_2 sc_button_size_normal sc_button_hover_slide_bottom"
                                        >
                                          <Trans i18nKey="discover">
                                            <span>{t("discover")}</span>
                                          </Trans>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="trx_addons_column-1_4">
                                  <div className="sc_services_item with_image sc_services_item_featured_top">
                                    <div className="post_featured with_thumb hover_icon sc_services_item_thumb">
                                      <img
                                        src={Service2}
                                        className="attachment-petermason-thumb-square size-petermason-thumb-square wp-post-image"
                                        alt="Suit Resizing"
                                        loading="lazy"
                                        width={400}
                                        height={400}
                                      />
                                      <div className="mask" />
                                      <div className="icons">
                                        <a
                                          href="/services/suit-resizing/"
                                          aria-hidden="true"
                                          className="icon_plus"
                                        >
                                          +
                                        </a>
                                      </div>
                                    </div>
                                    <div className="sc_services_item_info">
                                      <div className="sc_services_item_header">
                                        <h4 className="sc_services_item_title">
                                          <a href="/services/suit-resizing/">
                                            <Trans i18nKey="suit_resizing">
                                              <span>{t("suit_resizing")}</span>
                                            </Trans>
                                          </a>
                                        </h4>
                                        <div className="sc_services_item_subtitle" />
                                      </div>
                                      <div className="sc_services_item_content">
                                        <p>
                                          <Trans i18nKey="suit_resizing_desc">
                                            <span>
                                              {t("suit_resizing_desc")}
                                            </span>
                                          </Trans>
                                        </p>
                                      </div>
                                      <div className="sc_services_item_button sc_item_button">
                                        <a
                                          href="/services/suit-resizing/"
                                          className="sc_button sc_button_style_2 sc_button_size_normal sc_button_hover_slide_bottom"
                                        >
                                          <Trans i18nKey="discover">
                                            <span>{t("discover")}</span>
                                          </Trans>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="trx_addons_column-1_4">
                                  <div className="sc_services_item with_image sc_services_item_featured_top">
                                    <div className="post_featured with_thumb hover_icon sc_services_item_thumb">
                                      <img
                                        src={Service3}
                                        className="attachment-petermason-thumb-square size-petermason-thumb-square wp-post-image"
                                        alt="Wedding Services"
                                        loading="lazy"
                                        width={400}
                                        height={400}
                                      />
                                      <div className="mask" />
                                      <div className="icons">
                                        <a
                                          href="/services/weddings/"
                                          aria-hidden="true"
                                          className="icon_plus"
                                        >
                                          +
                                        </a>
                                      </div>
                                    </div>
                                    <div className="sc_services_item_info">
                                      <div className="sc_services_item_header">
                                        <h4 className="sc_services_item_title">
                                          <a href="/services/weddings/">
                                            <Trans i18nKey="wedding_services">
                                              <span>
                                                {t("wedding_services")}
                                              </span>
                                            </Trans>
                                          </a>
                                        </h4>
                                        <div className="sc_services_item_subtitle" />
                                      </div>
                                      <div className="sc_services_item_content">
                                        <p>
                                          <Trans i18nKey="wedding_service_desc">
                                            <span>
                                              {t("wedding_service_desc")}
                                            </span>
                                          </Trans>
                                        </p>
                                      </div>
                                      <div className="sc_services_item_button sc_item_button">
                                        <a
                                          href="/services/weddings/"
                                          className="sc_button sc_button_style_2 sc_button_size_normal sc_button_hover_slide_bottom"
                                        >
                                          <Trans i18nKey="discover">
                                            <span>{t("discover")}</span>
                                          </Trans>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* /.sc_services */}
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
                      className="vc_row wpb_row vc_row-fluid vc_custom_1482412998471 vc_row-has-fill vc_row-o-equal-height vc_row-o-content-middle vc_row-flex scheme_dark"
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
                      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-9 vc_col-md-8 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: "1.5rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_large"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="sc_title_701708044"
                              className="sc_title sc_title_default"
                            >
                              <h2 className="sc_item_title sc_title_title sc_align_default sc_item_title_style_style_3">
                                <Trans i18nKey="your_design_we_deliver">
                                  <span>{t("your_design_we_deliver")}</span>
                                </Trans>
                              </h2>
                              <div className="sc_item_subtitle_container sc_align_default sc_item_title_style_style_3">
                                <h6 className="sc_item_subtitle sc_title_subtitle sc_item_title_style_style_3">
                                  {/* Providing you with maximum level of comfort
                                  &amp; confidence in every suit! */}
                                  <Trans i18nKey="your_design_we_deliver_desc">
                                    <span>
                                      {t("your_design_we_deliver_desc")}
                                    </span>
                                  </Trans>
                                </h6>
                              </div>
                            </div>
                            {/* /.sc_title */}
                            <div
                              className="vc_empty_space"
                              style={{ height: "1.5rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_large hide_on_mobile"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-4 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: "1.5rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_large hide_on_mobile"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="sc_item_button sc_button_wrap">
                              <a
                                href="/appointment/"
                                id="sc_button_801030983"
                                className="sc_button sc_button_default sc_button_size_normal sc_button_icon_left"
                              >
                                <span className="sc_button_text">
                                  <Trans i18nKey="book_your_appointment">
                                    <span className="sc_button_title">
                                      {t("book_your_appointment")}
                                    </span>
                                  </Trans>
                                </span>
                                {/* /.sc_button_text */}
                              </a>
                              {/* /.sc_button */}
                            </div>
                            {/* /.sc_item_button */}
                            <div
                              className="vc_empty_space"
                              style={{ height: "1.5rem" }}
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
                      className="vc_row wpb_row vc_row-fluid"
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
                              className="vc_empty_space height_medium"
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
                      <div className="wpb_column vc_column_container vc_col-sm-6 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space height_medium"
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
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-11 sc_layouts_column_icons_position_left">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div
                                      id="widget_video_455684702"
                                      className="widget_area sc_widget_video vc_widget_video wpb_content_element"
                                    >
                                      <aside
                                        id="widget_video_455684702_widget"
                                        className="widget widget_video"
                                      >
                                        <div
                                          className={`trx_addons_video_player with_cover hover_play ${
                                            isPlayVideo ? "video_play" : ""
                                          }`}
                                        >
                                          <img
                                            src={Bg15}
                                            alt="bg-15"
                                            width={505}
                                            height={396}
                                          />
                                          <div className="video_mask" />
                                          <div
                                            className="video_hover_play video_hover inited sc_button_hover_style_dark"
                                            onClick={handleClickVideo}
                                          />
                                          <div
                                            className="video_embed video_frame"
                                            style={{
                                              height: "100%",
                                            }}
                                          >
                                            {isPlayVideo && (
                                              <iframe
                                                src="https://player.vimeo.com/video/44548560?autoplay=1"
                                                title="USA NETWORK SUITS & MR PORTER, SUITS & STYLE"
                                                allowFullScreen
                                                width={520}
                                                height={292}
                                                style={{
                                                  height: "100%",
                                                }}
                                              />
                                            )}
                                          </div>
                                        </div>
                                      </aside>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space height_medium"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "0.85rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="sc_title_1379491417"
                              className="sc_title sc_title_default"
                            >
                              <h2 className="sc_item_title sc_title_title sc_align_default sc_item_title_style_style_h1">
                                <Trans i18nKey="peter_in_media">
                                  <span>{t("peter_in_media")}</span>
                                </Trans>
                              </h2>
                              <div className="sc_item_subtitle_container sc_align_default sc_item_title_style_style_h1">
                                <h6 className="sc_item_subtitle sc_title_subtitle sc_item_title_style_style_h1">
                                  <Trans i18nKey="peter_in_media">
                                    <span>{t("peter_in_media")}</span>
                                  </Trans>
                                  &amp;
                                  <Trans i18nKey="articles">
                                    <span>{t("peter_in_media")}</span>
                                  </Trans>
                                </h6>
                              </div>
                              <div className="sc_item_descr sc_title_descr sc_align_default">
                                <Trans i18nKey="media_desc">
                                  <span>{t("media_desc")}</span>
                                </Trans>
                              </div>
                            </div>
                            {/* /.sc_title */}
                            <div
                              className="vc_empty_space"
                              style={{ height: "1.85rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_small"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="sc_item_button sc_button_wrap">
                              <a
                                href="/about/"
                                id="sc_button_1729976947"
                                className="sc_button sc_button_default sc_button_size_normal sc_button_icon_left"
                              >
                                <span className="sc_button_text">
                                  <Trans i18nKey="watch_our_video">
                                    <span className="sc_button_title">
                                      {t("watch_our_video")}
                                    </span>
                                  </Trans>
                                </span>
                                {/* /.sc_button_text */}
                              </a>
                              {/* /.sc_button */}
                            </div>
                            {/* /.sc_item_button */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="vc_row wpb_row vc_row-fluid"
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
                              className="vc_empty_space height_small"
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
                            <div
                              className="vc_empty_space height_small"
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <Tailor width={width} contentWidth={contentWidth} />
                    <div className="vc_row-full-width vc_clearfix" />
                    <Review width={width} contentWidth={contentWidth} />
                    <div className="vc_row-full-width vc_clearfix" />
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space height_small"
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
                    <Story />
                    <div className="vc_row wpb_row vc_row-fluid">
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
                              className="vc_empty_space height_small"
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
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1480595814502 vc_row-has-fill"
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
                              className="vc_empty_space height_small"
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
                            <div
                              className="vc_empty_space height_small"
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
                            <div
                              id="sc_title_1932558129"
                              className="sc_title sc_title_default"
                            >
                              <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_style_h1">
                                <Trans i18nKey="ready_to_wear">
                                  <span>{t("ready_to_wear")}</span>
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
                                            Slim Fit 2pc Black Mini Checkered
                                            Suit
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
                                            Modern Fit 2pc Ultra Black Suit
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
                                            Slim Fit 3pc Solid Blue Suit
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
                                            Traditional Fit 2pc Brown Suit
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1482413008792 vc_row-has-fill vc_row-o-equal-height vc_row-o-content-middle vc_row-flex scheme_dark"
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
                      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-8 vc_col-md-8 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: "0.65rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_large"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              id="sc_title_569375030"
                              className="sc_title sc_title_default"
                            >
                              <h2 className="sc_item_title sc_title_title sc_align_default sc_item_title_style_style_3">
                                <Trans i18nKey="lastest_styles_and_trends">
                                  <span>{t("lastest_styles_and_trends")}</span>
                                </Trans>
                              </h2>
                              <div className="sc_item_subtitle_container sc_align_default sc_item_title_style_style_3">
                                <h6 className="sc_item_subtitle sc_title_subtitle sc_item_title_style_style_3">
                                  <Trans i18nKey="collection_desc">
                                    <span>{t("collection_desc")}</span>
                                  </Trans>
                                </h6>
                              </div>
                            </div>
                            {/* /.sc_title */}
                            <div
                              className="vc_empty_space hide_on_mobile"
                              style={{ height: "0.65rem" }}
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
                      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-4 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space hide_on_mobile"
                              style={{ height: "0.65rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_large hide_on_mobile"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-1 vc_col-lg-11 vc_col-md-offset-1 vc_col-md-11 sc_layouts_column_icons_position_left">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="sc_item_button sc_button_wrap">
                                      <a
                                        href="/shop/"
                                        id="sc_button_91779929"
                                        className="sc_button sc_button_default sc_button_size_normal sc_button_icon_left"
                                      >
                                        <span className="sc_button_text">
                                          <span className="sc_button_title">
                                            <Trans i18nKey="view_our_custom_collection">
                                              <span>
                                                {t(
                                                  "view_our_custom_collection"
                                                )}
                                              </span>
                                            </Trans>
                                          </span>
                                        </span>
                                        {/* /.sc_button_text */}
                                      </a>
                                      {/* /.sc_button */}
                                    </div>
                                    {/* /.sc_item_button */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "0.65rem" }}
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="img_custom_height wpb_column vc_column_container vc_col-sm-5 vc_col-lg-3 vc_col-md-3 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
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
                            <div className="wpb_single_image wpb_content_element vc_align_left">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                  <img
                                    src={Bg17}
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                    title="background-17"
                                    width={235}
                                    height={396}
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-7 vc_col-lg-3 vc_col-md-3 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner vc_custom_1482767961284">
                          <div className="wpb_wrapper">
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
                              id="sc_googlemap_956238791_wrap"
                              className="sc_googlemap_wrap"
                            >
                              <div
                                id="sc_googlemap_956238791"
                                className="sc_googlemap sc_googlemap_default inited"
                                style={{ width: "100%", height: "396px" }}
                                data-zoom={14}
                                data-style="paper"
                              >
                                <iframe
                                  title="map"
                                  src="https://maps.google.com/maps?t=m&output=embed&iwloc=near&z=14&q=350+5th+Ave%2C+New+York%2C+NY+10118%2C+USA"
                                />
                              </div>
                            </div>
                            {/* /.sc_googlemap_wrap */}
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-5 vc_col-md-5 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner vc_custom_1482768102082">
                          <div className="wpb_wrapper">
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
                              id="widget_contacts_211082118"
                              className="widget_area sc_widget_contacts vc_widget_contacts wpb_content_element"
                            >
                              <aside
                                id="widget_contacts_211082118_widget"
                                className="widget widget_contacts"
                              >
                                <h5 className="widget_title">
                                  <Trans i18nKey="contact_info">
                                    <span>{t("contact_info")}</span>
                                  </Trans>
                                </h5>
                                <div className="contacts_description">
                                  <p>
                                    <Trans i18nKey="contact_info_desc">
                                      <span>{t("contact_info_desc")}</span>
                                    </Trans>
                                  </p>
                                </div>
                                <div className="contacts_info">
                                  <div className="contacts_right">
                                    <span className="contacts_address">
                                      2277 Lorem Ave., San Diego, CA 22553
                                    </span>
                                    <div className="contacts_worktime">
                                      <p>
                                        <Trans i18nKey="monday_friday">
                                          <span>{t("monday_friday")}</span>
                                        </Trans>
                                        : 10 am - 10pm
                                        <br />
                                        <Trans i18nKey="sunday">
                                          <span>{t("sunday")}</span>
                                        </Trans>
                                        : 11 am - 9pm
                                      </p>
                                    </div>
                                    <span className="contacts_phone">
                                      <a href="tel:123 - 456 - 7890">
                                        123 - 456 - 7890
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </aside>
                            </div>
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
                              style={{ height: "0.429rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="vc_empty_space height_medium"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1482236490778 vc_custom_1482236490778">
                              <span className="vc_sep_holder vc_sep_holder_l">
                                <span
                                  style={{ borderColor: "#e8d7c2" }}
                                  className="vc_sep_line"
                                />
                              </span>
                              <span className="vc_sep_holder vc_sep_holder_r">
                                <span
                                  style={{ borderColor: "#e8d7c2" }}
                                  className="vc_sep_line"
                                />
                              </span>
                            </div>
                            <div
                              className="vc_empty_space height_tiny"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Social />
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: "0.5rem" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1482236496442 vc_custom_1482236496442">
                              <span className="vc_sep_holder vc_sep_holder_l">
                                <span
                                  style={{ borderColor: "#e8d7c2" }}
                                  className="vc_sep_line"
                                />
                              </span>
                              <span className="vc_sep_holder vc_sep_holder_r">
                                <span
                                  style={{ borderColor: "#e8d7c2" }}
                                  className="vc_sep_line"
                                />
                              </span>
                            </div>
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
                            <div
                              className="vc_empty_space height_medium"
                              style={{ height: "0px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Home;
