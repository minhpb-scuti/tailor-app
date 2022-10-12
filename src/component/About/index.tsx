/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import AboutUs from "../../static/image/black-white-5.webp";
import Image18 from "../../static/image/image-18.jpg";
import Image21 from "../../static/image/image-21.jpg";
import Image17 from "../../static/image/image-17.webp";
import Image5 from "../../static/image/image-5.webp";
import { getWidthContent, useWindowDimensions } from "../../customHook";
import Review from "../Review";
import BreadCrumb from "../BreadCrumb";

const About = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();
  const contentWidth = getWidthContent(width);

  useEffect(() => {}, [width]);

  return (
    <div className="scheme_default">
      <Header
        children={<BreadCrumb text="About" />}
        pathname={location.pathname}
      />
      <div className="page_content_wrap scheme_default">
        <div className="content_wrap">
          <div className="content">
            <article
              id="post-29"
              className="post_item_single post_type_page post-29 page type-page status-publish hentry"
            >
              <div className="post_content entry-content">
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
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-5 sc_layouts_column_icons_position_left">
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
                        <div className="wpb_single_image wpb_content_element vc_align_left">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img
                                src={AboutUs}
                                className="vc_single_image-img attachment-full"
                                alt=""
                                loading="lazy"
                                title="black-white-5"
                                width={470}
                                height={442}
                              />
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-7 sc_layouts_column_icons_position_left">
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
                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-11 sc_layouts_column_icons_position_left">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div
                                  id="sc_title_1452872138"
                                  className="sc_title sc_title_default"
                                >
                                  <h2 className="sc_item_title sc_title_title sc_align_default sc_item_title_style_style_h1">
                                    PETER MASON
                                  </h2>
                                  <div className="sc_item_subtitle_container sc_align_default sc_item_title_style_style_h1">
                                    <h6 className="sc_item_subtitle sc_title_subtitle sc_item_title_style_style_h1">
                                      HANDCRAFTED Suit
                                    </h6>
                                  </div>
                                  <div className="sc_item_descr sc_title_descr sc_align_default">
                                    We offer high-quality custom tailored suits
                                    and shirts for men who see the value in
                                    looking sharp and gallant. Our skilled
                                    master tailors handle all of our cutting and
                                    sewing, ensuring precision in all production
                                    processes with attention to the details.
                                    <p />
                                    <p>
                                      A suit is always, always a stylish choice
                                      - but when it's crafted from high-quality
                                      materials. Having a suit made from quality
                                      fabrics defines how it wears and looks. We
                                      guarantee that our suits will suitable to
                                      your lifestyle and your everyday needs.
                                    </p>
                                  </div>
                                </div>
                                {/* /.sc_title */}
                                <div
                                  className="vc_empty_space"
                                  style={{ height: "2.3rem" }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="sc_item_button sc_button_wrap">
                                  <a
                                    href="/about-us/"
                                    id="sc_button_470468405"
                                    className="sc_button sc_button_default sc_button_size_normal sc_button_icon_left"
                                  >
                                    <span className="sc_button_text">
                                      <span className="sc_button_title">
                                        MORE ABOUT US
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
                      </div>
                    </div>
                  </div>
                </div>
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
                      </div>
                    </div>
                  </div>
                </div>
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
                          id="sc_title_1731653445"
                          className="sc_title sc_title_default"
                        >
                          <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">
                            GALLERY
                          </h2>
                        </div>
                        {/* /.sc_title */}
                        <div
                          className="vc_empty_space height_medium"
                          style={{ height: "0px" }}
                        >
                          <span className="vc_empty_space_inner" />
                        </div>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                            a.eg-henryharrison-element-1,\n                            a.eg-henryharrison-element-2 {\n                              -webkit-transition: all 0.4s linear;\n                              -moz-transition: all 0.4s linear;\n                              -o-transition: all 0.4s linear;\n                              -ms-transition: all 0.4s linear;\n                              transition: all 0.4s linear;\n                            }\n                            .eg-jimmy-carter-element-11 i:before {\n                              margin-left: 0px;\n                              margin-right: 0px;\n                            }\n                            .eg-harding-element-17 {\n                              letter-spacing: 1px;\n                            }\n                            .eg-harding-wrapper .esg-entry-media {\n                              overflow: hidden;\n                              box-sizing: border-box;\n                              -webkit-box-sizing: border-box;\n                              -moz-box-sizing: border-box;\n                              padding: 30px 30px 0px 30px;\n                            }\n                            .eg-harding-wrapper .esg-media-poster {\n                              overflow: hidden;\n                              border-radius: 50%;\n                              -webkit-border-radius: 50%;\n                              -moz-border-radius: 50%;\n                            }\n                            .eg-ulysses-s-grant-wrapper .esg-entry-media {\n                              overflow: hidden;\n                              box-sizing: border-box;\n                              -webkit-box-sizing: border-box;\n                              -moz-box-sizing: border-box;\n                              padding: 30px 30px 0px 30px;\n                            }\n                            .eg-ulysses-s-grant-wrapper .esg-media-poster {\n                              overflow: hidden;\n                              border-radius: 50%;\n                              -webkit-border-radius: 50%;\n                              -moz-border-radius: 50%;\n                            }\n                            .eg-richard-nixon-wrapper .esg-entry-media {\n                              overflow: hidden;\n                              box-sizing: border-box;\n                              -webkit-box-sizing: border-box;\n                              -moz-box-sizing: border-box;\n                              padding: 30px 30px 0px 30px;\n                            }\n                            .eg-richard-nixon-wrapper .esg-media-poster {\n                              overflow: hidden;\n                              border-radius: 50%;\n                              -webkit-border-radius: 50%;\n                              -moz-border-radius: 50%;\n                            }\n                            .eg-herbert-hoover-wrapper .esg-media-poster {\n                              filter: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\");\n                              filter: gray;\n                              -webkit-filter: grayscale(100%);\n                            }\n                            .eg-herbert-hoover-wrapper:hover .esg-media-poster {\n                              filter: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='1 0 0 0 0,0 1 0 0 0,0 0 1 0 0,0 0 0 1 0'/></filter></svg>#grayscale\");\n                              -webkit-filter: grayscale(0%);\n                            }\n                            .eg-lyndon-johnson-wrapper .esg-media-poster {\n                              filter: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\");\n                              filter: gray;\n                              -webkit-filter: grayscale(100%);\n                            }\n                            .eg-lyndon-johnson-wrapper:hover .esg-media-poster {\n                              filter: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='1 0 0 0 0,0 1 0 0 0,0 0 1 0 0,0 0 0 1 0'/></filter></svg>#grayscale\");\n                              -webkit-filter: grayscale(0%);\n                            }\n                            .esg-overlay.eg-ronald-reagan-container {\n                              background: -moz-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -webkit-gradient(\n                                linear,\n                                left top,\n                                left bottom,\n                                color-stop(50%, rgba(0, 0, 0, 0)),\n                                color-stop(99%, rgba(0, 0, 0, 0.83)),\n                                color-stop(100%, rgba(0, 0, 0, 0.85))\n                              );\n                              background: -webkit-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -o-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -ms-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: linear-gradient(\n                                to bottom,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000',endColorstr='#d9000000',GradientType=0 );\n                            }\n                            .eg-georgebush-wrapper .esg-entry-cover {\n                              background: -moz-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -webkit-gradient(\n                                linear,\n                                left top,\n                                left bottom,\n                                color-stop(50%, rgba(0, 0, 0, 0)),\n                                color-stop(99%, rgba(0, 0, 0, 0.83)),\n                                color-stop(100%, rgba(0, 0, 0, 0.85))\n                              );\n                              background: -webkit-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -o-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -ms-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: linear-gradient(\n                                to bottom,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000',endColorstr='#d9000000',GradientType=0 );\n                            }\n                            .eg-jefferson-wrapper {\n                              -webkit-border-radius: 5px !important;\n                              -moz-border-radius: 5px !important;\n                              border-radius: 5px !important;\n                              -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC) !important;\n                            }\n                            .eg-monroe-element-1 {\n                              text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n                            }\n                            .eg-lyndon-johnson-wrapper .esg-entry-cover {\n                              background: -moz-radial-gradient(\n                                center,\n                                ellipse cover,\n                                rgba(0, 0, 0, 0.35) 0%,\n                                rgba(18, 18, 18, 0) 96%,\n                                rgba(19, 19, 19, 0) 100%\n                              );\n                              background: -webkit-gradient(\n                                radial,\n                                center center,\n                                0px,\n                                center center,\n                                100%,\n                                color-stop(0%, rgba(0, 0, 0, 0.35)),\n                                color-stop(96%, rgba(18, 18, 18, 0)),\n                                color-stop(100%, rgba(19, 19, 19, 0))\n                              );\n                              background: -webkit-radial-gradient(\n                                center,\n                                ellipse cover,\n                                rgba(0, 0, 0, 0.35) 0%,\n                                rgba(18, 18, 18, 0) 96%,\n                                rgba(19, 19, 19, 0) 100%\n                              );\n                              background: -o-radial-gradient(\n                                center,\n                                ellipse cover,\n                                rgba(0, 0, 0, 0.35) 0%,\n                                rgba(18, 18, 18, 0) 96%,\n                                rgba(19, 19, 19, 0) 100%\n                              );\n                              background: -ms-radial-gradient(\n                                center,\n                                ellipse cover,\n                                rgba(0, 0, 0, 0.35) 0%,\n                                rgba(18, 18, 18, 0) 96%,\n                                rgba(19, 19, 19, 0) 100%\n                              );\n                              background: radial-gradient(\n                                ellipse at center,\n                                rgba(0, 0, 0, 0.35) 0%,\n                                rgba(18, 18, 18, 0) 96%,\n                                rgba(19, 19, 19, 0) 100%\n                              );\n                              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#59000000',endColorstr='#00131313',GradientType=1 );\n                            }\n                            .eg-wilbert-wrapper .esg-entry-cover {\n                              background: -moz-radial-gradient(\n                                center,\n                                ellipse cover,\n                                rgba(0, 0, 0, 0.35) 0%,\n                                rgba(18, 18, 18, 0) 96%,\n                                rgba(19, 19, 19, 0) 100%\n                              );\n                              background: -webkit-gradient(\n                                radial,\n                                center center,\n                                0px,\n                                center center,\n                                100%,\n                                color-stop(0%, rgba(0, 0, 0, 0.35)),\n                                color-stop(96%, rgba(18, 18, 18, 0)),\n                                color-stop(100%, rgba(19, 19, 19, 0))\n                              );\n                              background: -webkit-radial-gradient(\n                                center,\n                                ellipse cover,\n                                rgba(0, 0, 0, 0.35) 0%,\n                                rgba(18, 18, 18, 0) 96%,\n                                rgba(19, 19, 19, 0) 100%\n                              );\n                              background: -o-radial-gradient(\n                                center,\n                                ellipse cover,\n                                rgba(0, 0, 0, 0.35) 0%,\n                                rgba(18, 18, 18, 0) 96%,\n                                rgba(19, 19, 19, 0) 100%\n                              );\n                              background: -ms-radial-gradient(\n                                center,\n                                ellipse cover,\n                                rgba(0, 0, 0, 0.35) 0%,\n                                rgba(18, 18, 18, 0) 96%,\n                                rgba(19, 19, 19, 0) 100%\n                              );\n                              background: radial-gradient(\n                                ellipse at center,\n                                rgba(0, 0, 0, 0.35) 0%,\n                                rgba(18, 18, 18, 0) 96%,\n                                rgba(19, 19, 19, 0) 100%\n                              );\n                              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#59000000',endColorstr='#00131313',GradientType=1 );\n                            }\n                            .eg-wilbert-wrapper .esg-media-poster {\n                              -webkit-transition: 0.4s ease-in-out;\n                              -moz-transition: 0.4s ease-in-out;\n                              -o-transition: 0.4s ease-in-out;\n                              transition: 0.4s ease-in-out;\n                              filter: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\");\n                              filter: gray;\n                              -webkit-filter: grayscale(100%);\n                            }\n                            .eg-wilbert-wrapper:hover .esg-media-poster {\n                              filter: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='1 0 0 0 0,0 1 0 0 0,0 0 1 0 0,0 0 0 1 0'/></filter></svg>#grayscale\");\n                              -webkit-filter: grayscale(0%);\n                            }\n                            .eg-phillie-element-3:after {\n                              content: \" \";\n                              width: 0px;\n                              height: 0px;\n                              border-style: solid;\n                              border-width: 5px 5px 0 5px;\n                              border-color: #000 transparent transparent\n                                transparent;\n                              left: 50%;\n                              margin-left: -5px;\n                              bottom: -5px;\n                              position: absolute;\n                            }\n                            .eg-howardtaft-wrapper .esg-media-poster,\n                            .eg-howardtaft-wrapper .esg-media-poster {\n                              filter: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='1 0 0 0 0,0 1 0 0 0,0 0 1 0 0,0 0 0 1 0'/></filter></svg>#grayscale\");\n                              -webkit-filter: grayscale(0%);\n                            }\n                            .eg-howardtaft-wrapper:hover .esg-media-poster,\n                            .eg-howardtaft-wrapper:hover .esg-media-poster {\n                              filter: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\");\n                              filter: gray;\n                              -webkit-filter: grayscale(100%);\n                            }\n                            .myportfolio-container .added_to_cart.wc-forward {\n                              font-family: \"Open Sans\";\n                              font-size: 13px;\n                              color: #fff;\n                              margin-top: 10px;\n                            }\n                            .esgbox-title.esgbox-title-outside-wrap {\n                              font-size: 15px;\n                              font-weight: 700;\n                              text-align: center;\n                            }\n                            .esgbox-title.esgbox-title-inside-wrap {\n                              padding-bottom: 10px;\n                              font-size: 15px;\n                              font-weight: 700;\n                              text-align: center;\n                            }\n                            .esg-content.eg-twitterstream-element-33-a {\n                              display: inline-block;\n                            }\n                            .eg-twitterstream-element-35 {\n                              word-break: break-all;\n                            }\n                            .esg-overlay.eg-twitterstream-container {\n                              background: -moz-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -webkit-gradient(\n                                linear,\n                                left top,\n                                left bottom,\n                                color-stop(50%, rgba(0, 0, 0, 0)),\n                                color-stop(99%, rgba(0, 0, 0, 0.83)),\n                                color-stop(100%, rgba(0, 0, 0, 0.85))\n                              );\n                              background: -webkit-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -o-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -ms-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: linear-gradient(\n                                to bottom,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000',endColorstr='#d9000000',GradientType=0 );\n                            }\n                            .esg-content.eg-facebookstream-element-33-a {\n                              display: inline-block;\n                            }\n                            .eg-facebookstream-element-0 {\n                              word-break: break-all;\n                            }\n                            .esg-overlay.eg-flickrstream-container {\n                              background: -moz-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -webkit-gradient(\n                                linear,\n                                left top,\n                                left bottom,\n                                color-stop(50%, rgba(0, 0, 0, 0)),\n                                color-stop(99%, rgba(0, 0, 0, 0.83)),\n                                color-stop(100%, rgba(0, 0, 0, 0.85))\n                              );\n                              background: -webkit-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -o-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: -ms-linear-gradient(\n                                top,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              background: linear-gradient(\n                                to bottom,\n                                rgba(0, 0, 0, 0) 50%,\n                                rgba(0, 0, 0, 0.83) 99%,\n                                rgba(0, 0, 0, 0.85) 100%\n                              );\n                              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000',endColorstr='#d9000000',GradientType=0 );\n                            }\n                          ",
                          }}
                        />
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              '\n                            .custom_1 .navigationbuttons,\n                            .custom_1 .esg-pagination,\n                            .custom_1 .esg-filters {\n                              text-transform: uppercase;\n                              text-align: center;\n                            }\n                            .custom_1 .esg-filterbutton,\n                            .custom_1 .esg-navigationbutton,\n                            .custom_1 .esg-sortbutton,\n                            .custom_1 .esg-cartbutton {\n                              color: #000;\n                              margin-right: 5px;\n                              cursor: pointer;\n                              position: relative;\n                              z-index: 2;\n                              padding: 1px 30px;\n                              border: none;\n                              line-height: 38px;\n                              border-radius: 5px;\n                              -moz-border-radius: 5px;\n                              -webkit-border-radius: 5px;\n                              font-size: 12px;\n                              font-weight: 700;\n                              font-family: "Open Sans", sans-serif;\n                              display: inline-block;\n                              background: #fff;\n                              margin-bottom: 5px;\n                            }\n                            .custom_1 .esg-navigationbutton {\n                              padding: 2px 12px;\n                            }\n                            .custom_1 .esg-navigationbutton * {\n                              color: #000;\n                            }\n                            .custom_1 .esg-pagination-button:last-child {\n                              margin-right: 0;\n                            }\n                            .custom_1 .esg-sortbutton-wrapper,\n                            .custom_1 .esg-cartbutton-wrapper {\n                              display: inline-block;\n                            }\n                            .custom_1 .esg-sortbutton-order,\n                            .custom_1 .esg-cartbutton-order {\n                              display: inline-block;\n                              vertical-align: top;\n                              border: none;\n                              width: 40px;\n                              line-height: 40px;\n                              border-radius: 5px;\n                              -moz-border-radius: 5px;\n                              -webkit-border-radius: 5px;\n                              font-size: 12px;\n                              font-weight: 700;\n                              color: #999;\n                              cursor: pointer;\n                              background: #eee;\n                              background: #fff;\n                              margin-left: 5px;\n                            }\n                            .custom_1 .esg-cartbutton {\n                              color: #fff;\n                              cursor: default !important;\n                            }\n                            .custom_1 .esg-cartbutton .esgicon-basket {\n                              color: #fff;\n                              font-size: 15px;\n                              line-height: 15px;\n                              margin-right: 10px;\n                            }\n                            .custom_1 .esg-cartbutton-wrapper {\n                              cursor: default !important;\n                            }\n                            .custom_1 .esg-sortbutton,\n                            .custom_1 .esg-cartbutton {\n                              display: inline-block;\n                              position: relative;\n                              cursor: pointer;\n                              margin-right: 0px;\n                              border-radius: 5px;\n                              -moz-border-radius: 5px;\n                              -webkit-border-radius: 5px;\n                            }\n                            .custom_1 .esg-navigationbutton:hover,\n                            .custom_1 .esg-filterbutton:hover,\n                            .custom_1 .esg-sortbutton:hover,\n                            .custom_1 .esg-sortbutton-order:hover,\n                            .custom_1 .esg-cartbutton-order:hover,\n                            .custom_1 .esg-filterbutton.selected {\n                              border-color: none;\n                              color: #000;\n                              background: #fff;\n                            }\n                            .custom_1 .esg-navigationbutton:hover * {\n                              color: #333;\n                            }\n                            .custom_1 .esg-sortbutton-order.tp-desc:hover {\n                              color: #333;\n                            }\n                            .custom_1 .esg-filter-checked {\n                              padding: 1px 3px;\n                              color: #cbcbcb;\n                              background: #cbcbcb;\n                              margin-left: 7px;\n                              font-size: 9px;\n                              font-weight: 300;\n                              line-height: 9px;\n                              vertical-align: middle;\n                            }\n                            .custom_1\n                              .esg-filterbutton.selected\n                              .esg-filter-checked,\n                            .custom_1\n                              .esg-filterbutton:hover\n                              .esg-filter-checked {\n                              padding: 1px 3px 1px 3px;\n                              color: #fff;\n                              background: #000;\n                              margin-left: 7px;\n                              font-size: 9px;\n                              font-weight: 300;\n                              line-height: 9px;\n                              vertical-align: middle;\n                            }\n                            .eg-custom_skin_1-container + .esg-cc.eec {\n                              line-height: 0;\n                            }\n                            .custom_1 .eg-custom_skin_1-element-1 {\n                              position: relative;\n                            }\n                            .custom_1 .eg-custom_skin_1-element-1:after {\n                              content: "";\n                              display: block;\n                              width: 40px;\n                              height: 40px;\n                              border: 1px solid #ddd;\n                              z-index: -1;\n                              position: absolute;\n                              left: 50%;\n                              top: 50%;\n                              -webkit-transform: translateX(-50%)\n                                translateY(-50%) rotate(45deg);\n                              -moz-transform: translateX(-50%) translateY(-50%)\n                                rotate(45deg);\n                              -ms-transform: translateX(-50%) translateY(-50%)\n                                rotate(45deg);\n                              transform: translateX(-50%) translateY(-50%)\n                                rotate(45deg);\n                            }\n                            .custom_1 .eg-custom_skin_1-element-1 i:before {\n                              margin: 0;\n                              position: absolute;\n                              left: 50%;\n                              top: 50%;\n                              -webkit-transform: translateX(-50%)\n                                translateY(-50%);\n                              -moz-transform: translateX(-50%) translateY(-50%);\n                              -ms-transform: translateX(-50%) translateY(-50%);\n                              transform: translateX(-50%) translateY(-50%);\n                            }\n                            .custom_1 .eg-custom_skin_1-element-1 {\n                              display: block;\n                              width: 60px;\n                              height: 60px;\n                            }\n                            .custom_1\n                              .eg-custom_skin_1-element-1\n                              i.eg-icon-plus:before {\n                              content: "+";\n                              font-weight: 100;\n                              font-size: 4rem;\n                              padding-top: 2px;\n                              padding-left: 2px;\n                              width: auto;\n                              height: auto;\n                            }\n                          ',
                          }}
                        />
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                            .eg-custom_skin_1-element-1 {\n                              font-size: 16px !important;\n                              line-height: 22px !important;\n                              color: #ffffff !important;\n                              font-weight: 400 !important;\n                              padding: px px px px !important;\n                              border-radius: px px px px !important;\n                              background: transparent !important;\n                              z-index: 2 !important;\n                              display: block;\n                            }\n                          ",
                          }}
                        />
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                            .eg-custom_skin_1-element-1:hover {\n                              font-size: 16px !important;\n                              line-height: 22px !important;\n                              color: #ffffff !important;\n                              font-weight: 400 !important;\n                              border-radius: px px px px !important;\n                              background: transparent !important;\n                            }\n                          ",
                          }}
                        />
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                            .eg-custom_skin_1-element-1-a {\n                              display: inline-block !important;\n                              float: none !important;\n                              clear: none !important;\n                              margin: 0px 0px 0px 0px !important;\n                              position: relative !important;\n                            }\n                          ",
                          }}
                        />
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                            .eg-custom_skin_1-container {\n                              background: rgba(0, 0, 0, 0.65);\n                            }\n                          ",
                          }}
                        />
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                            .eg-custom_skin_1-content {\n                              background: #ffffff;\n                              padding: 0px 0px 0px 0px;\n                              border-width: 0px 0px 0px 0px;\n                              border-radius: 0px 0px 0px 0px;\n                              border-color: transparent;\n                              border-style: double;\n                              text-align: left;\n                            }\n                          ",
                          }}
                        />
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                            .esg-grid .mainul li.eg-custom_skin_1-wrapper {\n                              background: #3f424a;\n                              padding: 0px 0px 0px 0px;\n                              border-width: 0px 0px 0px 0px;\n                              border-radius: 0px 0px 0px 0px;\n                              border-color: transparent;\n                              border-style: none;\n                            }\n                          ",
                          }}
                        />
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                            .esg-grid\n                              .mainul\n                              li.eg-custom_skin_1-wrapper\n                              .esg-media-poster {\n                              background-size: cover;\n                              background-position: center center;\n                              background-repeat: no-repeat;\n                            }\n                          ",
                          }}
                        />
                        {/* THE ESSENTIAL GRID 3.0.16 POST */}
                        <article
                          className="myportfolio-container custom_1 esg-entry-skin-custom_skin_1 source_type_post esg-revealed"
                          id="esg-grid-3-1-wrap"
                          style={{
                            position: "relative",
                            zIndex: 0,
                            minHeight: "100px",
                            height: "auto",
                          }}
                        >
                          <div
                            className="esg-grid-3-1-fullscreen-forcer esg-fullscreen-forcer"
                            style={{ left: "0px", width: "auto" }}
                          >
                            <div
                              id="esg-grid-3-1"
                              className="esg-grid esg-layout-even esg-container"
                              style={{
                                background: "transparent",
                                padding: "0px",
                                boxSizing: "border-box",
                                display: "block",
                                opacity: 1,
                                visibility: "inherit",
                              }}
                            >
                              <div
                                className="esg-overflowtrick"
                                style={{
                                  width: "100%",
                                  height: "615px",
                                  overflow: "hidden",
                                }}
                              >
                                <ul
                                  className="mainul"
                                  style={{ height: "615px" }}
                                >
                                  <li
                                    id="eg-3-post-id-142_7285"
                                    data-skin="custom_skin_1"
                                    className="filterall filter-life-style eg-custom_skin_1-wrapper eg-post-id-142 tp-esg-item itemtoshow isvisiblenow"
                                    data-date={1475141238}
                                    data-cobblesw={1}
                                    data-cobblesh={3}
                                    data-piig="true"
                                    style={{
                                      opacity: 1,
                                      visibility: "inherit",
                                      transform: "translate3d(0px, 0px, 0.1px)",
                                      display: "block",
                                      height: "615px",
                                      width: "370px",
                                      top: "0px",
                                      left: "0px",
                                      transformOrigin: "50% 50% 0px",
                                    }}
                                  >
                                    <div className="esg-media-cover-wrapper">
                                      <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                        <div
                                          className="esg-entry-media"
                                          style={{ paddingBottom: "166.216%" }}
                                        >
                                          <img
                                            src="a_data_002/image-21-740x1024.jpg"
                                            data-no-lazy={1}
                                            alt=""
                                            style={{ display: "none" }}
                                            width={740}
                                            height={1024}
                                          />
                                          <div
                                            className="esg-media-poster"
                                            style={{
                                              opacity: 1,
                                              visibility: "inherit",
                                              backgroundImage: `url(${Image21})`,
                                              transform:
                                                "translate3d(0px, 0px, 0px)",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="esg-entry-cover esg-transition"
                                        data-delay={0}
                                        data-duration="deafult"
                                        data-transition="esg-fade"
                                        style={{
                                          transform: "translate(0px)",
                                          opacity: 0,
                                          visibility: "hidden",
                                          height: "615px",
                                        }}
                                      >
                                        <div
                                          className="esg-overlay esg-transition eg-custom_skin_1-container"
                                          data-delay={0}
                                          data-duration="default"
                                          data-transition="esg-fade"
                                          style={{
                                            transform: "translate(0px)",
                                            opacity: 0,
                                            visibility: "hidden",
                                          }}
                                        />
                                        <div
                                          className="esg-cc eec"
                                          style={{ top: "277px" }}
                                        >
                                          <div
                                            className="esg-center eg-post-142 eg-custom_skin_1-element-1-a esg-transition"
                                            data-delay="0.2"
                                            data-duration="default"
                                            data-transition="esg-zoomback"
                                            style={{
                                              transformOrigin: "50% 50% 0px",
                                              opacity: 0,
                                              visibility: "hidden",
                                              transform: "scale(0.2)",
                                            }}
                                          >
                                            <a
                                              className="eg-custom_skin_1-element-1 eg-post-142"
                                              href="3-winning-suit-styles-for-fall-2016/"
                                              target="_self"
                                            >
                                              <i className="eg-icon-plus" />
                                            </a>
                                          </div>
                                          <div />
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li
                                    id="eg-3-post-id-145_6603"
                                    data-skin="custom_skin_1"
                                    className="filterall filter-life-style eg-custom_skin_1-wrapper eg-post-id-145 tp-esg-item itemtoshow isvisiblenow eg-item-in-focus"
                                    style={{
                                      opacity: 1,
                                      visibility: "inherit",
                                      transform: "translate3d(0px, 0px, 0.1px)",
                                      display: "block",
                                      height: "400px",
                                      width: "770px",
                                      top: "0px",
                                      left: "400px",
                                      transformOrigin: "50% 50% 0px",
                                    }}
                                  >
                                    <div className="esg-media-cover-wrapper">
                                      <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                        <div
                                          className="esg-entry-media"
                                          style={{ paddingBottom: "51.9481%" }}
                                        >
                                          <img
                                            src="a_data_002/image-5-1024x612.webp"
                                            data-no-lazy={1}
                                            alt=""
                                            style={{ display: "none" }}
                                            width={1024}
                                            height={612}
                                          />
                                          <div
                                            className="esg-media-poster"
                                            style={{
                                              opacity: 1,
                                              visibility: "inherit",
                                              backgroundImage: `url(${Image5})`,
                                              transform:
                                                "translate3d(0px, 0px, 0px)",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="esg-entry-cover esg-transition"
                                        data-delay={0}
                                        data-duration="deafult"
                                        data-transition="esg-fade"
                                        style={{
                                          opacity: 0,
                                          visibility: "hidden",
                                          height: "400px",
                                          transformStyle: "flat",
                                          transform: "translate(0px)",
                                        }}
                                      >
                                        <div
                                          className="esg-overlay esg-transition eg-custom_skin_1-container"
                                          data-delay={0}
                                          data-duration="default"
                                          data-transition="esg-fade"
                                          style={{
                                            opacity: 0,
                                            visibility: "hidden",
                                            transformStyle: "flat",
                                            transform: "translate(0px)",
                                          }}
                                        />
                                        <div
                                          className="esg-cc eec"
                                          style={{ top: "170px" }}
                                        >
                                          <div
                                            className="esg-center eg-post-145 eg-custom_skin_1-element-1-a esg-transition"
                                            data-delay="0.2"
                                            data-duration="default"
                                            data-transition="esg-zoomback"
                                            style={{
                                              transformOrigin: "50% 50% 0px",
                                              opacity: 0,
                                              visibility: "hidden",
                                              transformStyle: "flat",
                                              transform: "scale(0.2)",
                                            }}
                                          >
                                            <a
                                              className="eg-custom_skin_1-element-1 eg-post-145"
                                              href="three-piece-suits-top-3-advantages/"
                                              target="_self"
                                            >
                                              <i className="eg-icon-plus" />
                                            </a>
                                          </div>
                                          <div />
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li
                                    id="eg-3-post-id-148_599"
                                    data-skin="custom_skin_1"
                                    className="filterall filter-life-style eg-custom_skin_1-wrapper eg-post-id-148 tp-esg-item itemtoshow isvisiblenow"
                                    style={{
                                      opacity: 1,
                                      visibility: "inherit",
                                      transform: "translate3d(0px, 0px, 0.1px)",
                                      display: "block",
                                      height: "185px",
                                      width: "370px",
                                      top: "430px",
                                      left: "400px",
                                      transformOrigin: "50% 50% 0px",
                                    }}
                                  >
                                    <div className="esg-media-cover-wrapper">
                                      <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                        <div
                                          className="esg-entry-media"
                                          style={{ paddingBottom: "50%" }}
                                        >
                                          <img
                                            src="a_data_002/image-17-1024x540.webp"
                                            data-no-lazy={1}
                                            alt=""
                                            style={{ display: "none" }}
                                            width={1024}
                                            height={540}
                                          />
                                          <div
                                            className="esg-media-poster"
                                            style={{
                                              opacity: 1,
                                              visibility: "inherit",
                                              backgroundImage: `url(${Image17})`,
                                              transform:
                                                "translate3d(0px, 0px, 0px)",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="esg-entry-cover esg-transition"
                                        data-delay={0}
                                        data-duration="deafult"
                                        data-transition="esg-fade"
                                        style={{
                                          transform: "translate(0px)",
                                          opacity: 0,
                                          visibility: "hidden",
                                          height: "185px",
                                        }}
                                      >
                                        <div
                                          className="esg-overlay esg-transition eg-custom_skin_1-container"
                                          data-delay={0}
                                          data-duration="default"
                                          data-transition="esg-fade"
                                          style={{
                                            transform: "translate(0px)",
                                            opacity: 0,
                                            visibility: "hidden",
                                          }}
                                        />
                                        <div
                                          className="esg-cc eec"
                                          style={{ top: "63px" }}
                                        >
                                          <div
                                            className="esg-center eg-post-148 eg-custom_skin_1-element-1-a esg-transition"
                                            data-delay="0.2"
                                            data-duration="default"
                                            data-transition="esg-zoomback"
                                            style={{
                                              transformOrigin: "50% 50% 0px",
                                              opacity: 0,
                                              visibility: "hidden",
                                              transform: "scale(0.2)",
                                            }}
                                          >
                                            <a
                                              className="eg-custom_skin_1-element-1 eg-post-148"
                                              href="do-you-really-need-a-tailor-made-suit/"
                                              target="_self"
                                            >
                                              <i className="eg-icon-plus" />
                                            </a>
                                          </div>
                                          <div />
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li
                                    id="eg-3-post-id-151_9869"
                                    data-skin="custom_skin_1"
                                    className="filterall filter-life-style eg-custom_skin_1-wrapper eg-post-id-151 tp-esg-item itemtoshow isvisiblenow"
                                    style={{
                                      opacity: 1,
                                      visibility: "inherit",
                                      transform: "translate3d(0px, 0px, 0.1px)",
                                      display: "block",
                                      height: "185px",
                                      width: "370px",
                                      top: "430px",
                                      left: "800px",
                                      transformOrigin: "50% 50% 0px",
                                    }}
                                  >
                                    <div className="esg-media-cover-wrapper">
                                      <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                        <div
                                          className="esg-entry-media"
                                          style={{ paddingBottom: "50%" }}
                                        >
                                          <div
                                            className="esg-media-poster"
                                            style={{
                                              opacity: 1,
                                              visibility: "inherit",
                                              backgroundImage: `url(${Image18})`,
                                              transform:
                                                "translate3d(0px, 0px, 0px)",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="esg-entry-cover esg-transition"
                                        data-delay={0}
                                        data-duration="deafult"
                                        data-transition="esg-fade"
                                        style={{
                                          transform: "translate(0px)",
                                          opacity: 0,
                                          visibility: "hidden",
                                          height: "185px",
                                        }}
                                      >
                                        <div
                                          className="esg-overlay esg-transition eg-custom_skin_1-container"
                                          data-delay={0}
                                          data-duration="default"
                                          data-transition="esg-fade"
                                          style={{
                                            transform: "translate(0px)",
                                            opacity: 0,
                                            visibility: "hidden",
                                          }}
                                        />
                                        <div
                                          className="esg-cc eec"
                                          style={{ top: "63px" }}
                                        >
                                          <div
                                            className="esg-center eg-post-151 eg-custom_skin_1-element-1-a esg-transition"
                                            data-delay="0.2"
                                            data-duration="default"
                                            data-transition="esg-zoomback"
                                            style={{
                                              transformOrigin: "50% 50% 0px",
                                              opacity: 0,
                                              visibility: "hidden",
                                              transform: "scale(0.2)",
                                            }}
                                          >
                                            <a
                                              className="eg-custom_skin_1-element-1 eg-post-151"
                                              href="5-benefits-of-buying-custom-made-suits/"
                                              target="_self"
                                            >
                                              <i className="eg-icon-plus" />
                                            </a>
                                          </div>
                                          <div />
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li
                                    id="eg-3-post-id-156_4144"
                                    data-skin="custom_skin_1"
                                    className="filterall filter-life-style eg-custom_skin_1-wrapper eg-post-id-156 tp-esg-item itemonotherpage fitsinfilter"
                                    data-date={1475141663}
                                    data-cobblesw={1}
                                    data-cobblesh={1}
                                    data-piig="true"
                                    style={{
                                      opacity: 0,
                                      visibility: "hidden",
                                      transform: "translate(0px)",
                                    }}
                                  >
                                    <div className="esg-media-cover-wrapper">
                                      <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                        <div
                                          className="esg-entry-media"
                                          style={{ paddingBottom: "50%" }}
                                        >
                                          <img
                                            src="a_data_002/image-14-1024x683.jpg"
                                            data-no-lazy={1}
                                            alt=""
                                            style={{ display: "none" }}
                                            width={1024}
                                            height={683}
                                          />
                                          {/* <div className="esg-media-poster" src="wp-content/uploads/2016/11/image-14-1024x683.jpg" data-src="wp-content/uploads/2016/11/image-14-1024x683.jpg" data-lazythumb="undefined" style={{backgroundImage: 'url(wp-content/uploads/2016/11/image-14-1024x683.jpg)'}} /> */}
                                        </div>
                                      </div>
                                      <div
                                        className="esg-entry-cover esg-transition"
                                        data-delay={0}
                                        data-duration="deafult"
                                        data-transition="esg-fade"
                                        style={{
                                          transform: "translate(0px)",
                                          opacity: 0,
                                          visibility: "hidden",
                                        }}
                                      >
                                        <div
                                          className="esg-overlay esg-transition eg-custom_skin_1-container"
                                          data-delay={0}
                                          data-duration="default"
                                          data-transition="esg-fade"
                                          style={{
                                            transform: "translate(0px)",
                                            opacity: 0,
                                            visibility: "hidden",
                                          }}
                                        />
                                        <div className="esg-cc eec">
                                          <div
                                            className="esg-center eg-post-156 eg-custom_skin_1-element-1-a esg-transition"
                                            data-delay="0.2"
                                            data-duration="default"
                                            data-transition="esg-zoomback"
                                            style={{
                                              transformOrigin: "50% 50% 0px",
                                              opacity: 0,
                                              visibility: "hidden",
                                              transform: "scale(0.2)",
                                            }}
                                          >
                                            <a
                                              className="eg-custom_skin_1-element-1 eg-post-156"
                                              href="modern-groomsmen-attire-ideas-for-2016/"
                                              target="_self"
                                            >
                                              <i className="eg-icon-plus" />
                                            </a>
                                          </div>
                                          <div />
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li
                                    id="eg-3-post-id-158_1762"
                                    data-skin="custom_skin_1"
                                    className="filterall filter-life-style eg-custom_skin_1-wrapper eg-post-id-158 tp-esg-item itemonotherpage fitsinfilter"
                                    data-date={1475141755}
                                    data-cobblesw={1}
                                    data-cobblesh={1}
                                    data-piig="true"
                                    style={{
                                      opacity: 0,
                                      visibility: "hidden",
                                      transform: "translate(0px)",
                                    }}
                                  >
                                    <div className="esg-media-cover-wrapper">
                                      <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                        <div
                                          className="esg-entry-media"
                                          style={{ paddingBottom: "50%" }}
                                        >
                                          <img
                                            src="a_data_002/image-11-1024x576.webp"
                                            data-no-lazy={1}
                                            alt=""
                                            style={{ display: "none" }}
                                            width={1024}
                                            height={576}
                                          />
                                          {/* <div className="esg-media-poster" src="wp-content/uploads/2016/11/image-11-1024x576.jpg" data-src="wp-content/uploads/2016/11/image-11-1024x576.jpg" data-lazythumb="undefined" style={{backgroundImage: 'url(wp-content/uploads/2016/11/image-11-1024x576.jpg)'}} /> */}
                                        </div>
                                      </div>
                                      <div
                                        className="esg-entry-cover esg-transition"
                                        data-delay={0}
                                        data-duration="deafult"
                                        data-transition="esg-fade"
                                        style={{
                                          transform: "translate(0px)",
                                          opacity: 0,
                                          visibility: "hidden",
                                        }}
                                      >
                                        <div
                                          className="esg-overlay esg-transition eg-custom_skin_1-container"
                                          data-delay={0}
                                          data-duration="default"
                                          data-transition="esg-fade"
                                          style={{
                                            transform: "translate(0px)",
                                            opacity: 0,
                                            visibility: "hidden",
                                          }}
                                        />
                                        <div className="esg-cc eec">
                                          <div
                                            className="esg-center eg-post-158 eg-custom_skin_1-element-1-a esg-transition"
                                            data-delay="0.2"
                                            data-duration="default"
                                            data-transition="esg-zoomback"
                                            style={{
                                              transformOrigin: "50% 50% 0px",
                                              opacity: 0,
                                              visibility: "hidden",
                                              transform: "scale(0.2)",
                                            }}
                                          >
                                            <a
                                              className="eg-custom_skin_1-element-1 eg-post-158"
                                              href="custom-fitted-shirts-are-made-to-fit-only-you/"
                                              target="_self"
                                            >
                                              <i className="eg-icon-plus" />
                                            </a>
                                          </div>
                                          <div />
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li
                                    id="eg-3-post-id-160_2968"
                                    data-skin="custom_skin_1"
                                    className="filterall filter-gentleman filter-life-style eg-custom_skin_1-wrapper eg-post-id-160 tp-esg-item itemonotherpage fitsinfilter"
                                    data-date={1475141841}
                                    data-cobblesw={1}
                                    data-cobblesh={1}
                                    data-piig="true"
                                    style={{
                                      opacity: 0,
                                      visibility: "hidden",
                                      transform: "translate(0px)",
                                    }}
                                  >
                                    <div className="esg-media-cover-wrapper">
                                      <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                        <div
                                          className="esg-entry-media"
                                          style={{ paddingBottom: "50%" }}
                                        >
                                          <img
                                            src="a_data_002/image-1-1024x581.webp"
                                            data-no-lazy={1}
                                            alt=""
                                            style={{ display: "none" }}
                                            width={1024}
                                            height={581}
                                          />
                                          {/* <div className="esg-media-poster" src="wp-content/uploads/2016/11/image-1-1024x581.jpg" data-src="wp-content/uploads/2016/11/image-1-1024x581.jpg" data-lazythumb="undefined" style={{backgroundImage: 'url(wp-content/uploads/2016/11/image-1-1024x581.jpg)'}} /> */}
                                        </div>
                                      </div>
                                      <div
                                        className="esg-entry-cover esg-transition"
                                        data-delay={0}
                                        data-duration="deafult"
                                        data-transition="esg-fade"
                                        style={{
                                          transform: "translate(0px)",
                                          opacity: 0,
                                          visibility: "hidden",
                                        }}
                                      >
                                        <div
                                          className="esg-overlay esg-transition eg-custom_skin_1-container"
                                          data-delay={0}
                                          data-duration="default"
                                          data-transition="esg-fade"
                                          style={{
                                            transform: "translate(0px)",
                                            opacity: 0,
                                            visibility: "hidden",
                                          }}
                                        />
                                        <div className="esg-cc eec">
                                          <div
                                            className="esg-center eg-post-160 eg-custom_skin_1-element-1-a esg-transition"
                                            data-delay="0.2"
                                            data-duration="default"
                                            data-transition="esg-zoomback"
                                            style={{
                                              transformOrigin: "50% 50% 0px",
                                              opacity: 0,
                                              visibility: "hidden",
                                              transform: "scale(0.2)",
                                            }}
                                          >
                                            <a
                                              className="eg-custom_skin_1-element-1 eg-post-160"
                                              href="/save-shopping-time-with-custom-tailored-clothing/"
                                              target="_self"
                                            >
                                              <i className="eg-icon-plus" />
                                            </a>
                                          </div>
                                          <div />
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="esg-loader spinner0"
                            style={{ opacity: 0, visibility: "hidden" }}
                          >
                            <div className="dot1" />
                            <div className="dot2" />
                            <div className="bounce1" />
                            <div className="bounce2" />
                            <div className="bounce3" />
                          </div>
                          <div className="esg-relative-placeholder esg-w100-hauto" />
                        </article>
                        <div className="clear" />
                        <div
                          className="vc_empty_space"
                          style={{ height: "2.3rem" }}
                        >
                          <span className="vc_empty_space_inner" />
                        </div>
                        <div
                          className="vc_empty_space height_small"
                          style={{ height: "0px" }}
                        >
                          <span className="vc_empty_space_inner" />
                        </div>
                        <div className="sc_item_button sc_button_wrap sc_align_center">
                          <a
                            href="/grid/"
                            id="sc_button_678914847"
                            className="sc_button sc_button_default sc_button_size_normal sc_button_icon_left"
                          >
                            <span className="sc_button_text">
                              <span className="sc_button_title">
                                View all gallery
                              </span>
                            </span>
                            {/* /.sc_button_text */}
                          </a>
                          {/* /.sc_button */}
                        </div>
                        {/* /.sc_item_button */}
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
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          className="vc_empty_space"
                          style={{ height: "2.15rem" }}
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
                          className="vc_empty_space"
                          style={{ height: "0.8rem" }}
                        >
                          <span className="vc_empty_space_inner" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-lg-offset-1 vc_col-lg-10 vc_col-md-offset-1 vc_col-md-10 vc_col-sm-offset-1 vc_col-xs-12 sc_layouts_column_icons_position_left">
                    <div
                      className="vc_column-inner"
                      style={{
                        padding: "0",
                      }}
                    >
                      <div className="wpb_wrapper">
                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-4 sc_layouts_column_icons_position_left">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div
                                  className="vc_empty_space height_small"
                                  style={{ height: "0px" }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div
                                  id="sc_icons_1927474099"
                                  className="sc_icons sc_icons_modern sc_icons_size_medium sc_align_left"
                                >
                                  <div className="sc_icons_item sc_icons_item_linked">
                                    <div
                                      id="sc_icons_1927474099_icon-facebook"
                                      className="sc_icons_icon sc_icon_type_fontawesome icon-facebook"
                                    >
                                      <span className="sc_icon_type_fontawesome icon-facebook" />
                                    </div>
                                    <div className="sc_icons_item_description">
                                      <h4 className="sc_icons_title">
                                        <span>Find us on Facebook</span>
                                      </h4>
                                    </div>
                                    <a
                                      href="https://business.facebook.com/ThemeRexStudio/"
                                      className="sc_icons_link"
                                      target="_blank"
                                      rel="noreferrer"
                                    />
                                  </div>
                                </div>
                                {/* /.sc_icons */}
                                <div
                                  className="vc_empty_space height_small"
                                  style={{ height: "0px" }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-4 sc_layouts_column_icons_position_left">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div
                                  className="vc_empty_space height_small"
                                  style={{ height: "0px" }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div
                                  id="sc_icons_1153589901"
                                  className="sc_icons sc_icons_modern sc_icons_size_medium sc_align_left"
                                >
                                  <div className="sc_icons_item sc_icons_item_linked">
                                    <div
                                      id="sc_icons_1153589901_icon-twitter"
                                      className="sc_icons_icon sc_icon_type_fontawesome icon-twitter"
                                    >
                                      <span className="sc_icon_type_fontawesome icon-twitter" />
                                    </div>
                                    <div className="sc_icons_item_description">
                                      <h4 className="sc_icons_title">
                                        <span>Follow Us on Twitter</span>
                                      </h4>
                                    </div>
                                    <a
                                      href="https://twitter.com/ThemerexThemes"
                                      className="sc_icons_link"
                                      target="_blank"
                                      rel="noreferrer"
                                    />
                                  </div>
                                </div>
                                {/* /.sc_icons */}
                                <div
                                  className="vc_empty_space height_small"
                                  style={{ height: "0px" }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-4 sc_layouts_column_icons_position_left">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div
                                  className="vc_empty_space height_small"
                                  style={{ height: "0px" }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div
                                  id="sc_icons_1781285499"
                                  className="sc_icons sc_icons_modern sc_icons_size_medium sc_align_left"
                                >
                                  <div className="sc_icons_item sc_icons_item_linked">
                                    <div
                                      id="sc_icons_1781285499_icon-instagramm"
                                      className="sc_icons_icon sc_icon_type_fontawesome icon-instagramm"
                                    >
                                      <span className="sc_icon_type_fontawesome icon-instagramm" />
                                    </div>
                                    <div className="sc_icons_item_description">
                                      <h4 className="sc_icons_title">
                                        <span>Follow Us on Instagram</span>
                                      </h4>
                                    </div>
                                    <a
                                      href="https://www.instagram.com/themerex_net/"
                                      className="sc_icons_link"
                                      target="_blank"
                                      rel="noreferrer"
                                    />
                                  </div>
                                </div>
                                {/* /.sc_icons */}
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
                      </div>
                    </div>
                  </div>
                </div>
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
  );
};

export default About;
