/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from "react";
import logo from "../../static/image/png/logo_01.png";
import { useScrollHandler } from "../../customHook";

export interface IHeader {
  children: React.ReactNode;
  pathname: string;
}

let isHovering = false;

const Index = (props: IHeader) => {
  const { children, pathname } = props;
  const [isShowCart, setIsShowCart] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [selectOpen, setSelectOpen] = useState<string>("");
  const [hover, setHover] = useState("leave");
  const scroll = useScrollHandler();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelectOpen = (select: string) => {
    setSelectOpen(select);
  };

  const handleMouseEnter = () => {
    isHovering = true;
  };

  const handleMouseLeave = () => {
    isHovering = false;
  };

  const handleHoverEnter = (str: string) => {
    isHovering = true;
    setHover(str);
  };

  const handleHoverLeave = () => {
    isHovering = false;
    setTimeout(() => {
      if (!isHovering) setHover("leave");
    }, 1500);
  };

  const topFunction = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <header className="top_panel top_panel_custom top_panel_custom_396 with_bg_image petermason_inline_970499150 scheme_default">
        <div className="vc_row wpb_row vc_row-fluid vc_custom_1482933108081 vc_row-o-content-top vc_row-flex sc_layouts_row sc_layouts_row_type_normal">
          <div className="wpb_column vc_column_container vc_col-sm-4 sc_layouts_column sc_layouts_column_align_left sc_layouts_column_icons_position_left">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="vc_empty_space" style={{ height: "2.25rem" }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div
                  id="sc_content_1484111239"
                  className="sc_content sc_content_default"
                >
                  <div className="sc_content_container">
                    <div className="sc_layouts_item">
                      <div
                        id="sc_layouts_iconed_text_54195245"
                        className="sc_layouts_iconed_text"
                      >
                        <a
                          href="tel:123-456-7890"
                          className="sc_layouts_item_link sc_layouts_iconed_text_link"
                        >
                          <span className="sc_layouts_item_icon sc_layouts_iconed_text_icon icon-phone-call" />
                          <span className="sc_layouts_item_details sc_layouts_iconed_text_details">
                            <span className="sc_layouts_item_details_line1 sc_layouts_iconed_text_line1">
                              123-456-7890
                            </span>
                          </span>
                          {/* /.sc_layouts_iconed_text_details */}
                        </a>
                      </div>
                      {/* /.sc_layouts_iconed_text */}
                    </div>
                    <div className="sc_layouts_item">
                      <div
                        id="sc_layouts_iconed_text_1491741880"
                        className="sc_layouts_iconed_text"
                      >
                        <a
                          href="mailto:info@yoursite.com"
                          className="sc_layouts_item_link sc_layouts_iconed_text_link"
                        >
                          <span className="sc_layouts_item_icon sc_layouts_iconed_text_icon icon-mail-1" />
                          <span className="sc_layouts_item_details sc_layouts_iconed_text_details">
                            <span className="sc_layouts_item_details_line1 sc_layouts_iconed_text_line1">
                              info@yoursite.com
                            </span>
                          </span>
                          {/* /.sc_layouts_iconed_text_details */}
                        </a>
                      </div>
                      {/* /.sc_layouts_iconed_text */}
                    </div>
                  </div>
                </div>
                {/* /.sc_content */}
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-4 sc_layouts_column sc_layouts_column_align_center sc_layouts_column_icons_position_left">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="vc_empty_space" style={{ height: "1.2rem" }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="sc_layouts_item">
                  <a
                    href="/"
                    id="sc_layouts_logo_483486611"
                    className="sc_layouts_logo sc_layouts_logo_default"
                  >
                    <img
                      className="logo_image"
                      src={logo}
                      alt=""
                      width={508}
                      height={222}
                    />
                  </a>
                  {/* /.sc_layouts_logo */}
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-4 sc_layouts_column sc_layouts_column_align_right sc_layouts_column_icons_position_left">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="vc_empty_space" style={{ height: "1.6rem" }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="sc_layouts_item">
                  <div
                    id="sc_layouts_cart_2035124673"
                    className="sc_layouts_cart inited"
                    onClick={() => setIsShowCart(!isShowCart)}
                  >
                    <span className="sc_layouts_item_icon sc_layouts_cart_icon trx_addons_icon-basket" />
                    <span className="sc_layouts_item_details sc_layouts_cart_details">
                      <span className="sc_layouts_item_details_line1 sc_layouts_cart_label">
                        Shopping Cart
                      </span>
                      <span className="sc_layouts_item_details_line2 sc_layouts_cart_totals">
                        <span className="sc_layouts_cart_items">0 items</span>-
                        <span className="sc_layouts_cart_summa">$0.00</span>
                      </span>{" "}
                    </span>
                    {/* /.sc_layouts_cart_details */}
                    <span className="sc_layouts_cart_items_short">0</span>
                    <div
                      className="sc_layouts_cart_widget widget_area"
                      style={{
                        display: isShowCart ? "block" : "none",
                      }}
                    >
                      <div className="sc_layouts_cart_widget_items">
                        0 items in cart
                      </div>
                      <span className="sc_layouts_cart_widget_close trx_addons_icon-cancel" />
                      <div
                        className="widget woocommerce widget_shopping_cart"
                        style={{ display: "none" }}
                      >
                        <div className="hide_cart_widget_if_empty">
                          <div className="widget_shopping_cart_content">
                            <p className="woocommerce-mini-cart__empty-message">
                              No products in the cart.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.sc_layouts_cart_widget */}
                  </div>
                  {/* /.sc_layouts_cart */}
                </div>
                <div className="sc_layouts_item">
                  <div className="sc_item_button sc_button_wrap">
                    <a
                      href="/appointment/"
                      id="sc_button_105206174"
                      className="sc_button sc_button_style_2 sc_button_size_normal sc_button_icon_left sc_button_hover_slide_bottom"
                    >
                      <span className="sc_button_text">
                        <span className="sc_button_title">
                          Make an appointment
                        </span>
                      </span>
                      {/* /.sc_button_text */}
                    </a>
                    {/* /.sc_button */}
                  </div>
                  {/* /.sc_item_button */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`vc_row wpb_row vc_row-fluid sc_layouts_row sc_layouts_row_type_normal sc_layouts_row_delimiter sc_layouts_row_fixed ${
            scroll ? "sc_layouts_row_fixed_on" : ""
          }`}
        >
          <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column sc_layouts_column_align_center sc_layouts_column_icons_position_left">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div
                  id="sc_content_352893473"
                  className="sc_content sc_content_default sc_content_width_1_1"
                >
                  <div className="sc_content_container">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column sc_layouts_column_align_center sc_layouts_column_icons_position_left">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="sc_layouts_item">
                              <nav
                                id="sc_layouts_menu_101701878"
                                className="sc_layouts_menu sc_layouts_menu_default menu_hover_fade hide_on_mobile menu_show"
                                data-animation-in="fadeInUpSmall"
                                data-animation-out="fadeOutDownSmall"
                              >
                                <ul
                                  id="menu-main-menu"
                                  className="sc_layouts_menu_nav inited sf-js-enabled sf-arrows"
                                >
                                  <li
                                    id="menu-item-35"
                                    className={`menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor menu-item-has-children menu-item-35
                                    ${
                                      pathname === "/"
                                        ? "current-menu-parent"
                                        : ""
                                    }
                                    ${hover === "home" ? "sfHover" : ""}`}
                                    onMouseEnter={() =>
                                      handleHoverEnter("home")
                                    }
                                    onMouseLeave={() => {
                                      handleHoverLeave();
                                    }}
                                  >
                                    <a href="#" className="sf-with-ul">
                                      <span>Home</span>
                                    </a>
                                    <ul
                                      className={`sub-menu animated fast ${
                                        hover === "home"
                                          ? "fadeInUpSmall"
                                          : "fadeOutDownSmall"
                                      }`}
                                      style={{
                                        display:
                                          hover === "home" ? "block" : "none",
                                      }}
                                      onMouseEnter={handleMouseEnter}
                                      onMouseLeave={handleMouseLeave}
                                    >
                                      <li
                                        id="menu-item-38"
                                        className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-hom page_item page-item-27 current_page_item menu-item-38
                                        ${
                                          pathname === "/"
                                            ? "current-menu-item"
                                            : ""
                                        }
                                        `}
                                      >
                                        <a href="/" aria-current="page">
                                          <span>Homepage Fullwidth</span>
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-278"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-278"
                                      >
                                        <a href="/shop-homepage/">
                                          <span>Homepage Shop</span>
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-819"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-819"
                                      >
                                        <a href="/shop-boxed/">
                                          <span>Homepage Boxed</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="menu-item-41"
                                    className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-41 ${
                                      pathname.includes("feature")
                                        ? "current-menu-parent current-menu-ancestor"
                                        : ""
                                    } ${hover === "feature" ? "sfHover" : ""}`}
                                    onMouseEnter={() =>
                                      handleHoverEnter("feature")
                                    }
                                    onMouseLeave={() => {
                                      handleHoverLeave();
                                    }}
                                  >
                                    <a href="#" className="sf-with-ul">
                                      <span>Features</span>
                                    </a>
                                    <ul
                                      className={`sub-menu animated fast ${
                                        hover === "feature"
                                          ? "fadeInUpSmall"
                                          : "fadeOutDownSmall"
                                      }`}
                                      style={{
                                        display:
                                          hover === "feature"
                                            ? "block"
                                            : "none",
                                      }}
                                      onMouseEnter={handleMouseEnter}
                                      onMouseLeave={handleMouseLeave}
                                    >
                                      <li
                                        id="menu-item-180"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-180"
                                      >
                                        <a href="#" className="sf-with-ul">
                                          <span>Pages</span>
                                        </a>
                                        <ul
                                          className="sub-menu fadeOutDownSmall animated fast"
                                          style={{ display: "none" }}
                                        >
                                          <li
                                            id="menu-item-181"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-181"
                                          >
                                            <a href="#" className="sf-with-ul">
                                              <span>Gallery</span>
                                            </a>
                                            <ul
                                              className="sub-menu animated fast fadeOutDownSmall"
                                              style={{ display: "none" }}
                                            >
                                              <li
                                                id="menu-item-184"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-184"
                                              >
                                                <a href="/grid/">
                                                  <span>Grid</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-183"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-183"
                                              >
                                                <a href="/masonry/">
                                                  <span>Masonry</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-182"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-182"
                                              >
                                                <a href="/cobbles/">
                                                  <span>Cobbles</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li
                                            id="menu-item-271"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-271"
                                          >
                                            <a href="/our-tailors/">
                                              <span>Our Tailors</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-305"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-305"
                                          >
                                            <a href="/services-page/">
                                              <span>Services</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-1159"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1159"
                                          >
                                            <a href="/#">
                                              <span>Privacy Policy</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li
                                        id="menu-item-42"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-42"
                                      >
                                        <a href="#" className="sf-with-ul">
                                          <span>Tools</span>
                                        </a>
                                        <ul
                                          className="sub-menu animated fast fadeOutDownSmall"
                                          style={{ display: "none" }}
                                        >
                                          <li
                                            id="menu-item-350"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-350"
                                          >
                                            <a href="/typography/">
                                              <span>Typography</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-40"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40"
                                          >
                                            <a href="/shortcodes/">
                                              <span>Shortcodes</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-1119"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1119"
                                          >
                                            <a href="/service-plus/">
                                              <span>Service Plus</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-1166"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1166"
                                          >
                                            <a href="/#">
                                              <span>Privacy Policy</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li
                                        id="menu-item-848"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-848"
                                      >
                                        <a href="/appointment/">
                                          <span>Appointment</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="menu-item-43"
                                    className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43 ${
                                      pathname.includes("about")
                                        ? "current-menu-parent current-menu-ancestor"
                                        : ""
                                    } ${hover === "about" ? "sfHover" : ""}`}
                                    onMouseEnter={() =>
                                      handleHoverEnter("about")
                                    }
                                    onMouseLeave={() => {
                                      handleHoverLeave();
                                    }}
                                  >
                                    <a href="#" className="sf-with-ul">
                                      <span>About</span>
                                    </a>
                                    <ul
                                      className={`sub-menu animated fast ${
                                        hover === "about"
                                          ? "fadeInUpSmall"
                                          : "fadeOutDownSmall"
                                      }`}
                                      style={{
                                        display:
                                          hover === "about" ? "block" : "none",
                                      }}
                                      onMouseEnter={handleMouseEnter}
                                      onMouseLeave={handleMouseLeave}
                                    >
                                      <li
                                        id="menu-item-36"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36"
                                      >
                                        <a href="/about/">
                                          <span>Style 1</span>
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-291"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-291"
                                      >
                                        <a href="/about-us/">
                                          <span>Style 2</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="menu-item-39"
                                    className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-39 ${
                                      pathname.includes("suits")
                                        ? "current-menu-parent current-menu-ancestor"
                                        : ""
                                    } ${hover === "suits" ? "sfHover" : ""}`}
                                    onMouseEnter={() =>
                                      handleHoverEnter("suits")
                                    }
                                    onMouseLeave={() => {
                                      handleHoverLeave();
                                    }}
                                  >
                                    <a href="/shop/">
                                      <span>Suits</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-44"
                                    className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-44 ${
                                      pathname.includes("news")
                                        ? "current-menu-parent current-menu-ancestor"
                                        : ""
                                    } ${hover === "news" ? "sfHover" : ""}`}
                                    onMouseEnter={() =>
                                      handleHoverEnter("news")
                                    }
                                    onMouseLeave={() => {
                                      handleHoverLeave();
                                    }}
                                  >
                                    <a href="/blog" className="sf-with-ul">
                                      <span>News</span>
                                    </a>
                                    <ul
                                      className={`sub-menu animated fast ${
                                        hover === "news"
                                          ? "fadeInUpSmall"
                                          : "fadeOutDownSmall"
                                      }`}
                                      style={{
                                        display:
                                          hover === "news" ? "block" : "none",
                                      }}
                                      onMouseEnter={handleMouseEnter}
                                      onMouseLeave={handleMouseLeave}
                                    >
                                      <li
                                        id="menu-item-128"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-128"
                                      >
                                        <a href="#" className="sf-with-ul">
                                          <span>Classic</span>
                                        </a>
                                        <ul
                                          className="sub-menu animated fast fadeOutDownSmall"
                                          style={{ display: "none" }}
                                        >
                                          <li
                                            id="menu-item-828"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-828"
                                          >
                                            <a href="/classic-1-column/">
                                              <span>1 column</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-829"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-829"
                                          >
                                            <a href="/classic-2-columns/">
                                              <span>2 columns</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-830"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-830"
                                          >
                                            <a href="/classic-3-columns/">
                                              <span>3 columns</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li
                                        id="menu-item-129"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-129"
                                      >
                                        <a href="#" className="sf-with-ul">
                                          <span>Chess</span>
                                        </a>
                                        <ul
                                          className="sub-menu animated fast fadeOutDownSmall"
                                          style={{ display: "none" }}
                                        >
                                          <li
                                            id="menu-item-831"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-831"
                                          >
                                            <a href="/chess-2-columns/">
                                              <span>2 columns</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-832"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-832"
                                          >
                                            <a href="/chess-4-columns/">
                                              <span>4 columns</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-833"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-833"
                                          >
                                            <a href="/chess-6-columns/">
                                              <span>6 columns</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li
                                        id="menu-item-130"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-130"
                                      >
                                        <a href="#" className="sf-with-ul">
                                          <span>Portfolio</span>
                                        </a>
                                        <ul
                                          className="sub-menu animated fast fadeOutDownSmall"
                                          style={{ display: "none" }}
                                        >
                                          <li
                                            id="menu-item-834"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-834"
                                          >
                                            <a href="/portfolio-2-columns/">
                                              <span>2 columns</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-835"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-835"
                                          >
                                            <a href="/portfolio-3-columns/">
                                              <span>3 columns</span>
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-836"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-836"
                                          >
                                            <a href="/portfolio-4-columns/">
                                              <span>4 columns</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="menu-item-37"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-37"
                                  >
                                    <a href="/contacts/">
                                      <span>Contacts</span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                              {/* /.sc_layouts_menu */}
                              <div
                                className="sc_layouts_iconed_text sc_layouts_menu_mobile_button"
                                onClick={handleOpen}
                              >
                                <a
                                  className="sc_layouts_item_link sc_layouts_iconed_text_link"
                                  href="#"
                                >
                                  <span className="sc_layouts_item_icon sc_layouts_iconed_text_icon trx_addons_icon-menu" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.sc_content */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="sc_layouts_row_fixed_placeholder"
          style={{ height: "78px" }}
        />
        {children}
        {/* /.header_widgets_wrap */}
      </header>
      {/* mobile */}
      <div className="menu_mobile_overlay" style={{ display: "none" }} />
      <div
        className={`menu_mobile menu_mobile_fullscreen scheme_dark ${
          open ? "opened" : ""
        }`}
      >
        <div className="menu_mobile_inner">
          <a
            className="menu_mobile_close icon-cancel"
            onClick={handleOpen}
            href="#"
          >
            <></>
          </a>
          <nav className="menu_mobile_nav_area">
            <ul id="menu_mobile-main-menu">
              <li
                className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-35
                    ${selectOpen === "home" ? "opened" : ""}`}
                onClick={() =>
                  handleSelectOpen(selectOpen !== "home" ? "home" : "")
                }
              >
                <a href="#">
                  <span>Home</span>
                  <span className="open_child_menu" />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    display: selectOpen === "home" ? "block" : "none",
                  }}
                >
                  <li
                    id="menu_mobile-item-38"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-27 current_page_item menu-item-38"
                  >
                    <a href="/" aria-current="page">
                      <span>Homepage Fullwidth</span>
                    </a>
                  </li>
                  <li
                    id="menu_mobile-item-278"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-278"
                  >
                    <a href="/shop-homepage/">
                      <span>Homepage Shop</span>
                    </a>
                  </li>
                  <li
                    id="menu_mobile-item-819"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-819"
                  >
                    <a href="/shop-boxed/">
                      <span>Homepage Boxed</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu_mobile-item-41"
                className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-41
                ${selectOpen === "feature" ? "opened" : ""}`}
                onClick={() =>
                  handleSelectOpen(selectOpen !== "feature" ? "feature" : "")
                }
              >
                <a href="#">
                  <span>Features</span>
                  <span className="open_child_menu" />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    display: selectOpen === "feature" ? "block" : "none",
                  }}
                >
                  <li
                    id="menu_mobile-item-180"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-180"
                  >
                    <a href="/">
                      <span>Pages</span>
                      <span className="open_child_menu" />
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="menu_mobile-item-181"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-181"
                      >
                        <a href="/">
                          <span>Gallery</span>
                          <span className="open_child_menu" />
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu_mobile-item-184"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-184"
                          >
                            <a href="/grid/">
                              <span>Grid</span>
                            </a>
                          </li>
                          <li
                            id="menu_mobile-item-183"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-183"
                          >
                            <a href="/masonry/">
                              <span>Masonry</span>
                            </a>
                          </li>
                          <li
                            id="menu_mobile-item-182"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-182"
                          >
                            <a href="/cobbles/">
                              <span>Cobbles</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu_mobile-item-271"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-271"
                      >
                        <a href="/our-tailors/">
                          <span>Our Tailors</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-305"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-305"
                      >
                        <a href="/services-page/">
                          <span>Services</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-1159"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1159"
                      >
                        <a href="/#">
                          <span>Privacy Policy</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu_mobile-item-42"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-42"
                  >
                    <a href="/">
                      <span>Tools</span>
                      <span className="open_child_menu" />
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="menu_mobile-item-350"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-350"
                      >
                        <a href="/typography/">
                          <span>Typography</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-40"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40"
                      >
                        <a href="/shortcodes/">
                          <span>Shortcodes</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-1119"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1119"
                      >
                        <a href="/service-plus/">
                          <span>Service Plus</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-1166"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1166"
                      >
                        <a href="/#">
                          <span>Privacy Policy</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu_mobile-item-848"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-848"
                  >
                    <a href="/appointment/">
                      <span>Appointment</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu_mobile-item-43"
                className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43
                ${selectOpen === "about" ? "opened" : ""}`}
                onClick={() =>
                  handleSelectOpen(selectOpen !== "about" ? "about" : "")
                }
              >
                <a href="#">
                  <span>About</span>
                  <span className="open_child_menu" />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    display: selectOpen === "about" ? "block" : "none",
                  }}
                >
                  <li
                    id="menu_mobile-item-36"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36"
                  >
                    <a href="/about/">
                      <span>Style 1</span>
                    </a>
                  </li>
                  <li
                    id="menu_mobile-item-291"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-291"
                  >
                    <a href="/about-us/">
                      <span>Style 2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu_mobile-item-39"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-39"
              >
                <a href="/shop/">
                  <span>Suits</span>
                </a>
              </li>
              <li
                id="menu_mobile-item-44"
                className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-44
                ${selectOpen === "news" ? "opened" : ""}`}
                onClick={() =>
                  handleSelectOpen(selectOpen !== "news" ? "news" : "")
                }
              >
                <a href="/blog">
                  <span>News</span>
                  <span className="open_child_menu" />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    display: selectOpen === "news" ? "block" : "none",
                  }}
                >
                  <li
                    id="menu_mobile-item-128"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-128"
                  >
                    <a href="/">
                      <span>Classic</span>
                      <span className="open_child_menu" />
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="menu_mobile-item-828"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-828"
                      >
                        <a href="/classic-1-column/">
                          <span>1 column</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-829"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-829"
                      >
                        <a href="/classic-2-columns/">
                          <span>2 columns</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-830"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-830"
                      >
                        <a href="/classic-3-columns/">
                          <span>3 columns</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu_mobile-item-129"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-129"
                  >
                    <a href="/">
                      <span>Chess</span>
                      <span className="open_child_menu" />
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="menu_mobile-item-831"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-831"
                      >
                        <a href="/chess-2-columns/">
                          <span>2 columns</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-832"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-832"
                      >
                        <a href="/chess-4-columns/">
                          <span>4 columns</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-833"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-833"
                      >
                        <a href="/chess-6-columns/">
                          <span>6 columns</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu_mobile-item-130"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-130"
                  >
                    <a href="/">
                      <span>Portfolio</span>
                      <span className="open_child_menu" />
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="menu_mobile-item-834"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-834"
                      >
                        <a href="/portfolio-2-columns/">
                          <span>2 columns</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-835"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-835"
                      >
                        <a href="/portfolio-3-columns/">
                          <span>3 columns</span>
                        </a>
                      </li>
                      <li
                        id="menu_mobile-item-836"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-836"
                      >
                        <a href="/portfolio-4-columns/">
                          <span>4 columns</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                id="menu_mobile-item-37"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-37"
              >
                <a href="/contacts/">
                  <span>Contacts</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="search_wrap search_style_normal search_mobile inited">
            <div className="search_form_wrap">
              <form className="search_form">
                <input
                  type="text"
                  className="search_field"
                  placeholder="Search"
                  name="s"
                />
                <button
                  type="submit"
                  className="search_submit trx_addons_icon-search"
                />
              </form>
            </div>
          </div>
          <div className="socials_mobile">
            <span className="social_item">
              <a
                href="https://twitter.com/ThemerexThemes"
                target="_blank"
                rel="noreferrer"
                className="social_icons social_twitter"
              >
                <span className="trx_addons_icon-twitter" />
              </a>
            </span>
            <span className="social_item">
              <a
                href="https://business.facebook.com/ThemeRexStudio/"
                target="_blank"
                rel="noreferrer"
                className="social_icons social_facebook"
              >
                <span className="trx_addons_icon-facebook" />
              </a>
            </span>
            <span className="social_item">
              <a
                href="https://www.instagram.com/themerex_net/"
                target="_blank"
                rel="noreferrer"
                className="social_icons social_instagram"
              >
                <span className="trx_addons_icon-instagram" />
              </a>
            </span>
          </div>
        </div>
      </div>

      <a
        className={`trx_addons_scroll_to_top trx_addons_icon-up inited sc_button_hover_slide_bottom ${
          scroll ? "show" : ""
        }`}
        onClick={topFunction}
        title="Scroll to top"
      >
        <></>
      </a>
    </>
  );
};

export default Index;
