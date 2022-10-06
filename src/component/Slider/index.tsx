import CarouselSlide from "./Carousel";

export interface ISlider {
  height: number;
  width: number;
}

const Index = (props: ISlider) => {
  return (
    <div className="header_widgets_wrap widget_area header_fullwidth">
      <div className="header_widgets_inner widget_area_inner">
        <aside id="trx_addons_widget_slider-2" className="widget widget_slider">
          <div className="slider_wrap slider_engine_revo slider_alias_slider_1">
            <div className="wp-block-themepunch-revslider 0">
              <CarouselSlide height={props.height} width={props.width} />
            </div>
          </div>
        </aside>
      </div>
      {/* /.header_widgets_inner */}
    </div>
  );
};

export default Index;
