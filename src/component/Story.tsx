import React, { useCallback, useState } from "react";
import Bg10 from "../static/image/background-10.webp";

const Story = () => {
  const [activeQuote, setActiveQuote] = useState<number>(1);

  const handleActiveQuote = useCallback((num: number) => {
    setActiveQuote(num);
  }, []);

  return (
    <div className="vc_row wpb_row vc_row-fluid">
      <div className="wpb_column vc_column_container vc_col-sm-6 sc_layouts_column_icons_position_left">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="vc_empty_space" style={{ height: "0.5rem" }}>
              <span className="vc_empty_space_inner" />
            </div>
            <div id="sc_title_678103227" className="sc_title sc_title_default">
              <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">
                our story
              </h2>
            </div>
            {/* /.sc_title */}
            <div className="vc_empty_space" style={{ height: "1.1rem" }}>
              <span className="vc_empty_space_inner" />
            </div>
            <div
              className="vc_empty_space height_small"
              style={{ height: "0px" }}
            >
              <span className="vc_empty_space_inner" />
            </div>
            <div className="vc_tta-container" data-vc-action="collapse">
              <div className="vc_general vc_tta vc_tta-tabs vc_tta-color-grey vc_tta-style-modern vc_tta-shape-square vc_tta-o-shape-group vc_tta-tabs-position-bottom vc_tta-controls-align-center">
                <div className="vc_tta-panels-container">
                  <div className="vc_tta-panels">
                    <div
                      className={`vc_tta-panel ${
                        activeQuote === 1 ? "vc_active" : ""
                      }`}
                    >
                      <div className="vc_tta-panel-heading">
                        <h4 className="vc_tta-panel-title">
                          <a
                            href="#1482331744414-7dfde362-88a0"
                            data-vc-accordion
                            data-vc-container=".vc_tta-container"
                          >
                            <i className="vc_tta-icon fas fa-adjust" />
                            <span className="vc_tta-title-text">1986</span>
                          </a>
                        </h4>
                      </div>
                      <div className="vc_tta-panel-body">
                        <div className="wpb_text_column wpb_content_element">
                          <div className="wpb_wrapper">
                            <p style={{ textAlign: "center" }}>
                              Since our beginning in 1900 our goal has always
                              been to create men’s clothing that looks great,
                              fits perfectly, made from the world’s best fabric
                              mills and is good value for money. Peter Mason’s
                              success is built on understanding the principles
                              of classic tailoring, combining them with modern
                              designs and technology.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`vc_tta-panel ${
                        activeQuote === 2 ? "vc_active" : ""
                      }`}
                    >
                      <div className="vc_tta-panel-heading">
                        <h4 className="vc_tta-panel-title">
                          <a
                            href="#1482331744462-3b6a67fa-a4d2"
                            data-vc-accordion
                            data-vc-container=".vc_tta-container"
                          >
                            <i className="vc_tta-icon fas fa-adjust" />
                            <span className="vc_tta-title-text">1987</span>
                          </a>
                        </h4>
                      </div>
                      <div className="vc_tta-panel-body">
                        <div className="wpb_text_column wpb_content_element">
                          <div className="wpb_wrapper">
                            <p style={{ textAlign: "center" }}>
                              Since our beginning in 1900 our goal has always
                              been to create men’s clothing that looks great,
                              fits perfectly, made from the world’s best fabric
                              mills and is good value for money. Peter Mason’s
                              success is built on understanding the principles
                              of classic tailoring, combining them with modern
                              designs and technology.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`vc_tta-panel ${
                        activeQuote === 3 ? "vc_active" : ""
                      }`}
                    >
                      <div className="vc_tta-panel-heading">
                        <h4 className="vc_tta-panel-title">
                          <a
                            href="#1482332530928-22fdcd7e-6b15"
                            data-vc-accordion
                            data-vc-container=".vc_tta-container"
                          >
                            <i className="vc_tta-icon fas fa-adjust" />
                            <span className="vc_tta-title-text">1988</span>
                          </a>
                        </h4>
                      </div>
                      <div className="vc_tta-panel-body">
                        <div className="wpb_text_column wpb_content_element">
                          <div className="wpb_wrapper">
                            <p style={{ textAlign: "center" }}>
                              Since our beginning in 1900 our goal has always
                              been to create men’s clothing that looks great,
                              fits perfectly, made from the world’s best fabric
                              mills and is good value for money. Peter Mason’s
                              success is built on understanding the principles
                              of classic tailoring, combining them with modern
                              designs and technology.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`vc_tta-panel ${
                        activeQuote === 4 ? "vc_active" : ""
                      }`}
                    >
                      <div className="vc_tta-panel-heading">
                        <h4 className="vc_tta-panel-title">
                          <a
                            href="#1482332875645-02b0ab42-3a6e"
                            data-vc-accordion
                            data-vc-container=".vc_tta-container"
                          >
                            <i className="vc_tta-icon fas fa-adjust" />
                            <span className="vc_tta-title-text">1989</span>
                          </a>
                        </h4>
                      </div>
                      <div className="vc_tta-panel-body">
                        <div className="wpb_text_column wpb_content_element">
                          <div className="wpb_wrapper">
                            <p style={{ textAlign: "center" }}>
                              Since our beginning in 1900 our goal has always
                              been to create men’s clothing that looks great,
                              fits perfectly, made from the world’s best fabric
                              mills and is good value for money. Peter Mason’s
                              success is built on understanding the principles
                              of classic tailoring, combining them with modern
                              designs and technology.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`vc_tta-panel ${
                        activeQuote === 5 ? "vc_active" : ""
                      }`}
                    >
                      <div className="vc_tta-panel-heading">
                        <h4 className="vc_tta-panel-title">
                          <a
                            href="#1482332874984-5ce70ca8-d16f"
                            data-vc-accordion
                            data-vc-container=".vc_tta-container"
                          >
                            <i className="vc_tta-icon fas fa-adjust" />
                            <span className="vc_tta-title-text">1990</span>
                          </a>
                        </h4>
                      </div>
                      <div className="vc_tta-panel-body">
                        <div className="wpb_text_column wpb_content_element">
                          <div className="wpb_wrapper">
                            <p style={{ textAlign: "center" }}>
                              Since our beginning in 1900 our goal has always
                              been to create men’s clothing that looks great,
                              fits perfectly, made from the world’s best fabric
                              mills and is good value for money. Peter Mason’s
                              success is built on understanding the principles
                              of classic tailoring, combining them with modern
                              designs and technology.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_tta-tabs-container">
                  <ul className="vc_tta-tabs-list">
                    <li
                      className={`vc_tta-tab ${
                        activeQuote === 1 ? "vc_active" : ""
                      }`}
                    >
                      <a
                        href="#1482331744414-7dfde362-88a0"
                        onClick={() => handleActiveQuote(1)}
                      >
                        <i className="vc_tta-icon fas fa-adjust" />
                        <span className="vc_tta-title-text">1986</span>
                      </a>
                    </li>
                    <li
                      className={`vc_tta-tab ${
                        activeQuote === 2 ? "vc_active" : ""
                      }`}
                    >
                      <a
                        href="#1482331744414-7dfde362-88a0"
                        onClick={() => handleActiveQuote(2)}
                      >
                        <i className="vc_tta-icon fas fa-adjust" />
                        <span className="vc_tta-title-text">1987</span>
                      </a>
                    </li>
                    <li
                      className={`vc_tta-tab ${
                        activeQuote === 3 ? "vc_active" : ""
                      }`}
                    >
                      <a
                        href="#1482331744414-7dfde362-88a0"
                        onClick={() => handleActiveQuote(3)}
                      >
                        <i className="vc_tta-icon fas fa-adjust" />
                        <span className="vc_tta-title-text">1988</span>
                      </a>
                    </li>
                    <li
                      className={`vc_tta-tab ${
                        activeQuote === 4 ? "vc_active" : ""
                      }`}
                    >
                      <a
                        href="#1482331744414-7dfde362-88a0"
                        onClick={() => handleActiveQuote(4)}
                      >
                        <i className="vc_tta-icon fas fa-adjust" />
                        <span className="vc_tta-title-text">1989</span>
                      </a>
                    </li>
                    <li
                      className={`vc_tta-tab ${
                        activeQuote === 5 ? "vc_active" : ""
                      }`}
                    >
                      <a
                        href="#1482331744414-7dfde362-88a0"
                        onClick={() => handleActiveQuote(5)}
                      >
                        <i className="vc_tta-icon fas fa-adjust" />
                        <span className="vc_tta-title-text">1990</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
      <div className="wpb_column vc_column_container vc_col-sm-6 sc_layouts_column_icons_position_left">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="vc_empty_space" style={{ height: "0.6rem" }}>
              <span className="vc_empty_space_inner" />
            </div>
            <div className="vc_row wpb_row vc_inner vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-11 sc_layouts_column_icons_position_left">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                          <img
                            src={Bg10}
                            className="vc_single_image-img attachment-full"
                            alt=""
                            loading="lazy"
                            title="background-10"
                            width={505}
                            height={396}
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
    </div>
  );
};

export default Story;
