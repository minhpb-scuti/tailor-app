import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const index = () => {
  return (
    <div className="header_widgets_wrap widget_area header_fullwidth">
    <div className="header_widgets_inner widget_area_inner">
      <aside
        id="trx_addons_widget_slider-2"
        className="widget widget_slider"
      >
        <div className="slider_wrap slider_engine_revo slider_alias_slider_1">
          {/* START slider_1 REVOLUTION SLIDER 6.5.25 */}
          {/* END REVOLUTION SLIDER */}
          <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
        </div>
      </aside>
    </div>
    {/* /.header_widgets_inner */}
  </div>
  )
}

export default index