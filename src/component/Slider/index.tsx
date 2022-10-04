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
        <aside id="trx_addons_widget_slider-2" className="widget widget_slider">
          <div className="slider_wrap slider_engine_revo slider_alias_slider_1">
            <div className="wp-block-themepunch-revslider 0">
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
          </div>
        </aside>
      </div>
      {/* /.header_widgets_inner */}
    </div>
  );
};

export default index;
