import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Story from "../Story";
import Tailor from "../Tailor";
import Review from "../Review";
import Social from "../Social";
import BlogUpdate from "../BlogUpdate";
import { getWidthContent, useWindowDimensions } from "../../customHook";


export const Index = () => (
  <div className="vc_row wpb_row vc_row-fluid sc_layouts_row sc_layouts_row_type_normal sc_layouts_hide_on_frontpage">
    <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column sc_layouts_column_align_center sc_layouts_column_icons_position_left">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div className="vc_empty_space" style={{ height: "4.9rem" }}>
            <span className="vc_empty_space_inner" />
          </div>
          <div className="sc_layouts_item">
            <div id="sc_layouts_title_1418826751" className="sc_layouts_title">
              <div className="sc_layouts_title_title">
                <h1 className="sc_layouts_title_caption">About Us</h1>
              </div>
              <div className="sc_layouts_title_breadcrumbs">
                <div className="breadcrumbs">
                  <a className="breadcrumbs_item home" href="/">
                    Home
                  </a>
                  <span className="breadcrumbs_delimiter"></span>
                  <span className="breadcrumbs_item current">About Us</span>
                </div>
              </div>
              <div className="sc_layouts_title_breadcrumbs" />
            </div>
            {/* /.sc_layouts_title */}
          </div>
          <div className="vc_empty_space">
            <span className="vc_empty_space_inner"></span>
          </div>
          <div className="vc_empty_space" style={{ height: "3.25rem" }}>
            <span className="vc_empty_space_inner" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  const { width } = useWindowDimensions();
  const contentWidth = getWidthContent(width);
  const location = useLocation();

  useEffect(() => {}, [width]);
  return (
    <div className="body_wrap">
      <div className="page_wrap">
        <Header children={<Index />} pathname={location.pathname} />
        <div className="page_content_wrap scheme_default">
          <div className="content_wrap">
            <div className="content">
              <article
                id="post-27"
                className="post_item_single post_type_page post-27 page type-page status-publish hentry"
              >
                <div className="post_content entry-content">
                  <Story />
                  <Tailor width={width} contentWidth={contentWidth} />
                  <div className="vc_row-full-width vc_clearfix" />
                  <Review width={width} contentWidth={contentWidth} />
                  <div className="vc_row-full-width vc_clearfix"></div>
                  <BlogUpdate />
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
  );
};

export default AboutUs;
