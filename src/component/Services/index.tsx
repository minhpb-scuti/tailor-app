import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Service1 from "../../static/image/service-1.jpg";
import Service2 from "../../static/image/service-2.jpg";
import Service3 from "../../static/image/service-3.jpg";
import Service4 from "../../static/image/service-4.jpg";

const Services = () => {
  const location = useLocation();
  return (
    <div className="scheme_default">
      <Header
        children={<BreadCrumb text="All Services" />}
        pathname={location.pathname}
      />

      <div className="page_content_wrap scheme_default">
        <div className="content_wrap">
          <div className="content">
            <div className="sc_services sc_services_default">
              <div className="sc_services_columns_wrap trx_addons_columns_wrap columns_padding_bottom">
                <div className="trx_addons_column-1_2">
                  <div className="sc_services_item with_image sc_services_item_featured_top">
                    <div className="post_featured with_thumb hover_icon sc_services_item_thumb">
                      <img
                        src={Service4}
                        className="attachment-petermason-thumb-square size-petermason-thumb-square wp-post-image"
                        alt="Custom Tailoring"
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
                            Custom Tailoring
                          </a>
                        </h4>
                        <div className="sc_services_item_subtitle" />
                      </div>
                      <div className="sc_services_item_content">
                        <p>
                          You can choose all details you want, from buttons to
                          pockets and lapels, we can do everything.
                        </p>
                      </div>
                      <div className="sc_services_item_button sc_item_button">
                        <a
                          href="/services/custom-tailoring/"
                          className="sc_button sc_button_style_2 sc_button_size_normal sc_button_hover_slide_bottom"
                        >
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trx_addons_column-1_2">
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
                          <a href="/services/weddings/">Wedding Services</a>
                        </h4>
                        <div className="sc_services_item_subtitle" />
                      </div>
                      <div className="sc_services_item_content">
                        <p>
                          You and your groomsmen deserve the sharpest suits. Let
                          us help you create suits for your day.
                        </p>
                      </div>
                      <div className="sc_services_item_button sc_item_button">
                        <a
                          href="/services/weddings/"
                          className="sc_button sc_button_style_2 sc_button_size_normal sc_button_hover_slide_bottom"
                        >
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trx_addons_column-1_2">
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
                          <a href="/services/suit-resizing/">Suit Resizing</a>
                        </h4>
                        <div className="sc_services_item_subtitle" />
                      </div>
                      <div className="sc_services_item_content">
                        <p>
                          Each our suit is made to your exact measurements and
                          fit your specific body type
                        </p>
                      </div>
                      <div className="sc_services_item_button sc_item_button">
                        <a
                          href="/services/suit-resizing/"
                          className="sc_button sc_button_style_2 sc_button_size_normal sc_button_hover_slide_bottom"
                        >
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trx_addons_column-1_2">
                  <div className="sc_services_item with_image sc_services_item_featured_top">
                    <div className="post_featured with_thumb hover_icon sc_services_item_thumb">
                      <img
                        src={Service1}
                        className="attachment-petermason-thumb-square size-petermason-thumb-square wp-post-image"
                        alt="Custom Accessories"
                        loading="lazy"
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
                            Custom Accessories
                          </a>
                        </h4>
                        <div className="sc_services_item_subtitle" />
                      </div>
                      <div className="sc_services_item_content">
                        <p>
                          We have a wide range of bow ties which fit everyday
                          fashion as well as special occasions
                        </p>
                      </div>
                      <div className="sc_services_item_button sc_item_button">
                        <a
                          href="/services/accessories/"
                          className="sc_button sc_button_style_2 sc_button_size_normal sc_button_hover_slide_bottom"
                        >
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* .trx_addons_services_columns_wrap */}
            </div>
            {/* .sc_services */}
          </div>
          {/* </.content> */}
        </div>
        {/* </.content_wrap> */}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
