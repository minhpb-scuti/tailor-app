import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Service2 from "../../static/image/service-2-custom.jpg";
import Image4 from "../../static/image/image-4.jpg";
import { Trans, useTranslation } from "react-i18next";

const SuitResizing = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="scheme_default">
      <Header
        children={
          <BreadCrumb
            text="Suit Resizing"
            text1="All Services"
            href1="/services"
          />
        }
        pathname={location.pathname}
      />
      <div className="page_content_wrap scheme_default">
        <div className="content_wrap">
          <div className="content">
            <article
              id="post-205"
              className="services_page itemscope post-205 cpt_services type-cpt_services status-publish has-post-thumbnail hentry"
              itemScope
              itemType="http://schema.org/Article"
            >
              <section className="services_page_header">
                <div className="services_page_featured">
                  <img
                    src={Service2}
                    className="attachment-petermason-thumb-huge size-petermason-thumb-huge wp-post-image"
                    alt="Suit Resizing"
                    itemProp="image"
                    width={1170}
                    height={658}
                  />
                </div>
                <h2 className="services_page_title">Suit Resizing</h2>
              </section>
              <section
                className="services_page_content entry-content"
                itemProp="articleBody"
              >
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element">
                          <div className="wpb_wrapper">
                            <p>
                              Lorem ipsum dolor sit amet, ea pri meis accusam.
                              Et vis accusam rationibus liberavisse, an vix
                              viderer admodum. Atqui docendi omittam ei has,
                              liber constituam id vim. Eam in dico doming
                              definiebas. Cum munere impetus et. Ne nam simul
                              oblique alterum, pri solet omnium id, usu an
                              munere.
                            </p>
                            <h5>I must explain to you how all this mistaken</h5>
                            <p>
                              <img
                                loading="lazy"
                                className="size-medium wp-image-839 alignright"
                                src={Image4}
                                alt=""
                                width={300}
                                height={195}
                              />
                              Ne fugit essent persequeris sed. Qui dico dicam
                              sadipscing no. Ius posse omnes eleifend ne, no sea
                              amet oblique. Mea in wisi utinam facilisi. Eu
                              omnes nonumes reformidans sit, et eam aperiam
                              pertinacia.
                            </p>
                            <p>
                              Te posse nostro labores pri, agam audire eu mei,
                              natum voluptaria an mel. Ut illud maiestatis nec,
                              vis cu propriae deterruisset. Ea mazim suavitate
                              ius. Ei lorem instructior sea, populo
                              necessitatibus ut est. Ne vix voluptua.
                            </p>
                            <p>
                              Porro deleniti apeirian mea at, nostro referrentur
                              an mei. Wisi alienum ullamcorper ea duo, aperiri
                              apeirian vel ad. Sit eu facer soluta fuisset. Ius
                              magna mazim id. In putant consulatu pri, per
                              persius quaeque perpetua an.Ne fugit essent
                              persequeris sed. Qui dico dicam sadipscing no.
                            </p>
                            <blockquote>
                              <p>
                                I must explain to you how all this mistaken idea
                                of denouncing pleasure and praising pain was
                                born and I will give you a complete
                                <br />
                                <cite>Morgan King</cite>
                              </p>
                            </blockquote>
                            <p>
                              Lorem ipsum dolor sit amet, ea pri meis accusam.
                              Et vis accusam rationibus liberavisse, an vix
                              viderer admodum. Atqui docendi omittam ei has,
                              liber constituam id vim. Eam in dico doming
                              definiebas. Cum munere impetus et. Ne nam simul
                              oblique alterum, pri solet omnium id, usu an
                              munere.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-2 vc_col-md-offset-2 vc_col-md-8 sc_layouts_column_icons_position_left">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          className="vc_empty_space"
                          style={{ height: "2.2rem" }}
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
                          id="sc_form_1935781249"
                          className="sc_form sc_form_default sc_align_default"
                        >
                          <h3 className="sc_item_title sc_form_title sc_align_center sc_item_title_style_default">
                            Send message
                          </h3>
                          <form className="sc_form_form inited">
                            <div className="sc_form_details trx_addons_columns_wrap">
                              <div className="trx_addons_column-1_2">
                                <label className="sc_form_field sc_form_field_name required">
                                  <span className="sc_form_field_wrap">
                                    <input
                                      type="text"
                                      name="name"
                                      id="name"
                                      aria-required="true"
                                      placeholder={t("your_name")}
                                    />
                                  </span>
                                </label>
                              </div>
                              <div className="trx_addons_column-1_2">
                                <label className="sc_form_field sc_form_field_email required">
                                  <span className="sc_form_field_wrap">
                                    <input
                                      type="text"
                                      name="email"
                                      id="email"
                                      aria-required="true"
                                      placeholder={t("your_email")}
                                    />
                                  </span>
                                </label>
                              </div>
                            </div>
                            <label className="sc_form_field sc_form_field_message required">
                              <span className="sc_form_field_wrap">
                                <textarea
                                  name="message"
                                  id="message"
                                  aria-required="true"
                                  placeholder="Your message *"
                                  defaultValue={""}
                                />
                              </span>
                            </label>
                            <div className="sc_form_field sc_form_field_button sc_form_field_submit">
                              <button className="sc_button sc_button_default sc_button_size_normal">
                                <Trans i18nKey="submit">
                                  <span>{t("submit")}</span>
                                </Trans>
                              </button>
                            </div>
                            <div className="trx_addons_message_box sc_form_result" />
                          </form>
                        </div>
                        {/* /.sc_form */}
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
              </section>
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

export default SuitResizing;
