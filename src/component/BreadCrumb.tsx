import React from "react";

export interface IBreadCrumb {
  text: string;
}

const BreadCrumb = (props: IBreadCrumb) => (
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
                <h1 className="sc_layouts_title_caption">{props.text}</h1>
              </div>
              <div className="sc_layouts_title_breadcrumbs">
                <div className="breadcrumbs">
                  <a className="breadcrumbs_item home" href="/">
                    Home
                  </a>
                  <span className="breadcrumbs_delimiter"></span>
                  <span className="breadcrumbs_item current">{props.text}</span>
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

export default BreadCrumb;
