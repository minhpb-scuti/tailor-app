/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Carousel from "react-bootstrap/Carousel";

export interface ICarouselSlide {
  height: number;
  width: number;
}

const CarouselSlide = (props: ICarouselSlide) => {
  const { height, width } = props;
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
              top: "200px",
            }}
          >
            <div className="slider_1_big_text">
              Embrace
              <span>Your</span>
              Style
            </div>
          </div>
          <div
            style={{
              paddingTop: '311px',
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="button_slide">
              <a className="sc_item_btn sc_button_default" href="/appointment/">
                <span>Book your appoinment</span>
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
              top: "200px",
            }}
          >
            <div className="slider_1_big_text">
              Custom
              <span>Made</span>
              Suits
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: '311px',
            }}
          >
            <div className="button_slide">
              <a className="sc_item_btn sc_button_default" href="/about/">
                <span>discover more</span>
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
              top: "200px",
            }}
          >
            <div className="slider_1_big_text">
              Styles
              <span>and</span>
              Trends
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: '311px',
            }}
          >
            <div className="button_slide">
              <a className="sc_item_btn sc_button_default" href="/blog">
                <span>view our blog</span>
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
