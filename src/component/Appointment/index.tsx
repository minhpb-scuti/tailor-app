import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

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
                <h1 className="sc_layouts_title_caption">Appointment</h1>
              </div>
              <div className="sc_layouts_title_breadcrumbs">
                <div className="breadcrumbs">
                  <a className="breadcrumbs_item home" href="/">
                    Home
                  </a>
                  <span className="breadcrumbs_delimiter"></span>
                  <span className="breadcrumbs_item current">Appointment</span>
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

const Appointment = () => {
  const location = useLocation();
  return (
      <div >
      <Header children={<Index />} pathname={location.pathname} />
   <div className="page_content_wrap scheme_default">
    <body>
        <div className="content_wrap">
          <div className="content">
            <article id="post-804" className="post_item_single post_type_page post-804 page type-page status-publish hentry">
              <div className="post_content entry-content">
                <div className="booked-calendar-shortcode-wrap">
                  <div className="booked-calendar-wrap large" style={{height: '1097.1px'}} data-default="2022-10-01">
                    <div className="booked-calendar" data-calendar-date="2022-10-01">
                      <div className="bc-head">
                        <div className="bc-row top">
                          <div className="bc-col">
                            <span className="calendarSavingState" style={{display: 'none'}}>
                              <i className="fa-solid fa-circle-notch fa-spin" />
                            </span>
                            <span className="monthName"> October 2022 </span>
                            <a href="#" data-goto="2022-11-01" className="page-right"><i className="fa-solid fa-arrow-right" /></a>
                          </div>
                        </div>
                        <div className="bc-row days">
                          <div className="bc-col">Mon</div>
                          <div className="bc-col">Tue</div>
                          <div className="bc-col">Wed</div>
                          <div className="bc-col">Thu</div>
                          <div className="bc-col">Fri</div>
                          <div className="bc-col">Sat</div>
                          <div className="bc-col">Sun</div>
                        </div>
                      </div>
                      <div className="bc-body" style={{opacity: 1}}>
                        <div className="bc-row week">
                          <div data-date="2022-09-26" className="bc-col prev-month prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>26</span></span>
                          </div>
                          <div data-date="2022-09-27" className="bc-col prev-month prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>27</span></span>
                          </div>
                          <div data-date="2022-09-28" className="bc-col prev-month prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>28</span></span>
                          </div>
                          <div data-date="2022-09-29" className="bc-col prev-month prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>29</span></span>
                          </div>
                          <div data-date="2022-09-30" className="bc-col prev-month prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>30</span></span>
                          </div>
                          <div data-date="2022-10-1" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>1</span></span>
                          </div>
                          <div data-date="2022-10-2" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>2</span></span>
                          </div>
                        </div>
                        <div className="bc-row week">
                          <div data-date="2022-10-3" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>3</span></span>
                          </div>
                          <div data-date="2022-10-4" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>4</span></span>
                          </div>
                          <div data-date="2022-10-5" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>5</span></span>
                          </div>
                          <div data-date="2022-10-6" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>6</span></span>
                          </div>
                          <div data-date="2022-10-7" className="bc-col today" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>7</span></span>
                          </div>
                          <div data-date="2022-10-8" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>8</span></span>
                          </div>
                          <div data-date="2022-10-9" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>9</span></span>
                          </div>
                        </div>
                        <div className="bc-row week">
                          <div data-date="2022-10-10" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>10</span></span>
                          </div>
                          <div data-date="2022-10-11" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>11</span></span>
                          </div>
                          <div data-date="2022-10-12" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>12</span></span>
                          </div>
                          <div data-date="2022-10-13" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>13</span></span>
                          </div>
                          <div data-date="2022-10-14" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>14</span></span>
                          </div>
                          <div data-date="2022-10-15" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>15</span></span>
                          </div>
                          <div data-date="2022-10-16" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>16</span></span>
                          </div>
                        </div>
                        <div className="bc-row week">
                          <div data-date="2022-10-17" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>17</span></span>
                          </div>
                          <div data-date="2022-10-18" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>18</span></span>
                          </div>
                          <div data-date="2022-10-19" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>19</span></span>
                          </div>
                          <div data-date="2022-10-20" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>20</span></span>
                          </div>
                          <div data-date="2022-10-21" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>21</span></span>
                          </div>
                          <div data-date="2022-10-22" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>22</span></span>
                          </div>
                          <div data-date="2022-10-23" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>23</span></span>
                          </div>
                        </div>
                        <div className="bc-row week">
                          <div data-date="2022-10-24" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>24</span></span>
                          </div>
                          <div data-date="2022-10-25" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>25</span></span>
                          </div>
                          <div data-date="2022-10-26" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>26</span></span>
                          </div>
                          <div data-date="2022-10-27" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>27</span></span>
                          </div>
                          <div data-date="2022-10-28" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>28</span></span>
                          </div>
                          <div data-date="2022-10-29" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>29</span></span>
                          </div>
                          <div data-date="2022-10-30" className="bc-col prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>30</span></span>
                          </div>
                        </div>
                        <div className="bc-row week">
                          <div data-date="2022-10-31" className="bc-col" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>31</span></span>
                          </div>
                          <div data-date="2022-11-1" className="bc-col next-month" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>1</span></span>
                          </div>
                          <div data-date="2022-11-2" className="bc-col next-month" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>2</span></span>
                          </div>
                          <div data-date="2022-11-3" className="bc-col next-month" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>3</span></span>
                          </div>
                          <div data-date="2022-11-4" className="bc-col next-month" style={{height: 'auto'}}>
                            <span className="date tooltipster tooltipstered" style={{lineHeight: 'auto'}}><span className="number" style={{}}>4</span></span>
                          </div>
                          <div data-date="2022-11-5" className="bc-col next-month prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>5</span></span>
                          </div>
                          <div data-date="2022-11-6" className="bc-col next-month prev-date" style={{height: 'auto'}}>
                            <span className="date" style={{lineHeight: 'auto'}}><span className="number" style={{}}>6</span></span>
                          </div>
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
    </body>
      </div>
      <Footer />
    </div>
  );
};

export default Appointment;
