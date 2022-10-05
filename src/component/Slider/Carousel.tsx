import Carousel from "react-bootstrap/Carousel";

export interface ICarouselSlide {
  height: number;
}

const CarouselSlide = (props: ICarouselSlide) => {
  const { height } = props;
  return (
    <Carousel>
      <Carousel.Item>
        <div className="parallax-wrap">
          <div className="title-carousel">
            Embrace
            <span>Your</span>
            Style
          </div>
        </div>
        <Carousel.Caption
          style={{
            paddingBottom: "20px",
          }}
        >
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
          style={{
            height: height,
          }}
        />
        <Carousel.Caption
          style={{
            paddingBottom: "20px",
          }}
        >
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          style={{
            height: height,
          }}
        />
        <Carousel.Caption
          style={{
            paddingBottom: "20px",
          }}
        >
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
