import React from "react";
import { Carousel } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
export interface IReview {
  width: number;
  contentWidth: number;
}

const Review = (props: IReview) => {
  const { width, contentWidth } = props;
  const { t } = useTranslation();
  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="true"
      data-vc-stretch-content="true"
      className="vc_row wpb_row vc_row-fluid vc_custom_1482321169790 vc_row-has-fill scheme_dark"
      style={{
        position: "relative",
        left: -(width - contentWidth) / 2,
        boxSizing: "border-box",
        width: width,
        maxWidth: width,
      }}
    >
      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="vc_empty_space" style={{ height: "1.3rem" }}>
              <span className="vc_empty_space_inner" />
            </div>
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
              className="sc_testimonials sc_testimonials_default swiper-slider-container slider_swiper slider_noresize slider_controls slider_pagination swiper_04684897221198052 inited swiper-container-horizontal"
              data-slides-min-width={150}
              id="swiper_04684897221198052"
              style={{
                display: "block",
                opacity: 1,
                cursor: "grab",
              }}
              data-slides-per-view={1}
              data-busy={0}
              data-ratio="1170:215.367"
            >
              <h2 className="sc_item_title sc_testimonials_title sc_align_center sc_item_title_style_default">
                <Trans i18nKey="testimonials">
                  <span>{t("testimonials")}</span>
                </Trans>
              </h2>
              <Carousel className="carousel-review">
                <Carousel.Item>
                  <div className="swiper-slide swiper-slide-duplicate">
                    <div className="sc_testimonials_item">
                      <div className="sc_testimonials_item_content">
                        <p>
                          <Trans i18nKey="testimonial1">
                            <span>{t("testimonial1")}</span>
                          </Trans>
                        </p>
                      </div>
                      <div className="sc_testimonials_item_author">
                        <div className="sc_testimonials_item_author_data">
                          <h4 className="sc_testimonials_item_author_title">
                            Peter Hobden
                          </h4>
                          <div className="sc_testimonials_item_author_subtitle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="swiper-slide swiper-slide-duplicate">
                    <div className="sc_testimonials_item">
                      <div className="sc_testimonials_item_content">
                        <p>
                          <Trans i18nKey="testimonial2">
                            <span>{t("testimonial2")}</span>
                          </Trans>
                        </p>
                      </div>
                      <div className="sc_testimonials_item_author">
                        <div className="sc_testimonials_item_author_data">
                          <h4 className="sc_testimonials_item_author_title">
                            Richard Romero
                          </h4>
                          <div className="sc_testimonials_item_author_subtitle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="swiper-slide swiper-slide-duplicate">
                    <div className="sc_testimonials_item">
                      <div className="sc_testimonials_item_content">
                        <p>
                          <Trans i18nKey="testimonial3">
                            <span>{t("testimonial3")}</span>
                          </Trans>
                        </p>
                      </div>
                      <div className="sc_testimonials_item_author">
                        <div className="sc_testimonials_item_author_data">
                          <h4 className="sc_testimonials_item_author_title">
                            Frankie Morales
                          </h4>
                          <div className="sc_testimonials_item_author_subtitle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            {/* /.sc_testimonials */}
            <div
              className="vc_empty_space height_small"
              style={{ height: "0px" }}
            >
              <span className="vc_empty_space_inner" />
            </div>
            {/* <div
              className="vc_empty_space height_medium"
              style={{ height: "0px" }}
            >
              <span className="vc_empty_space_inner" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
