import React from "react";
import { Carousel } from "react-bootstrap";

export interface IReview {
  width: number;
  contentWidth: number;
}

const Review = (props: IReview) => {
  const { width, contentWidth } = props;
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
                Testimonials
              </h2>
              <Carousel className="carousel-review">
                <Carousel.Item>
                  <div className="swiper-slide swiper-slide-duplicate">
                    <div className="sc_testimonials_item">
                      <div className="sc_testimonials_item_content">
                        <p>
                          Trying my suit on for the first time was a really
                          special moment. How it felt to wear and how it made me
                          feel was amazing. Thank you so much for my wedding
                          suit. Very enjoyable experience. On the big day the
                          suits looked great and we had many positive comments.
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
                          Hi, I just wanted to let you know that I received the
                          suit this week and I love it. It’s been beautifully
                          made and every detail is perfect. Please pass on my
                          appreciation to the tailor and the team that made it.
                          Thank you guys, you are the best. I will recommend
                          you.
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
                          This is by far the best suit I ’ve owned, and I’ve
                          owned custom made suits before. The suit from Peter
                          Mason fit like a glove. So did the shirt I ordered. I
                          recommend booking an appointment to get measured
                          properly and to choose your own fabric. You are the
                          best!
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
