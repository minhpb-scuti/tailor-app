/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Carousel from "react-bootstrap/Carousel";
export interface ICarouselSlide {
  height: number;
}

const CarouselSlide = (props: ICarouselSlide) => {
  const i18nextLng = localStorage.getItem("i18nextLng");
  const { height } = props;
  return (
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            height: height,
          }}
        >
          <div
            className="parallax-wrap"
            style={{
              width: "100%",
              left: "0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="slider_1_big_text">
              {i18nextLng?.includes("en") ? (
                <>
                  Embrace
                  <span>Your</span>
                  Style{" "}
                </>
              ) : (
                <>
                  Thể hiện <span>phong cách</span>của bạn
                </>
              )}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            className="btn_slide"
          >
            <div className="button_slide">
              <a className="sc_item_btn sc_button_default" href="/appointment/">
                {i18nextLng?.includes("en") ? (
                  <span>Book your appoinment</span>
                ) : (
                  <span>Đặt lịch hẹn của bạn</span>
                )}
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            height: height,
          }}
        >
          <div
            className="parallax-wrap"
            style={{
              width: "100%",
              left: "0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="slider_1_big_text">
              {i18nextLng?.includes("en") ? (
                <>
                  Custom
                  <span>Made</span>
                  Suits
                </>
              ) : (
                <>
                  Quần áo <span>đăt</span> làm riêng
                </>
              )}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            className="btn_slide"
          >
            <div className="button_slide">
              <a className="sc_item_btn sc_button_default" href="/about/">
                <span></span>
                {i18nextLng?.includes("en") ? (
                  <span>discover more</span>
                ) : (
                  <span>khám phá nhiều hơn</span>
                )}
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            height: height,
          }}
        >
          <div
            className="parallax-wrap"
            style={{
              width: "100%",
              left: "0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="slider_1_big_text">
              {i18nextLng?.includes("en") ? (
                <>
                  Styles
                  <span>and</span>
                  Trends
                </>
              ) : (
                <>
                  Phong cách
                  <span>và</span>
                  Xu hướng
                </>
              )}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            className="btn_slide"
          >
            <div className="button_slide">
              <a className="sc_item_btn sc_button_default" href="/blog">
                {i18nextLng?.includes("en") ? (
                  <span>View Our Blog</span>
                ) : (
                  <span>Xem blog của chúng tôi</span>
                )}
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
