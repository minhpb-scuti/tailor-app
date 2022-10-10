/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Footer from "../Footer";
import HeaderShop from "../HeaderShop";

const Shop = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <HeaderShop pathname={pathname} children={<BreadCrumb text="Shop" />} />
      <div className="page_content_wrap scheme_default">
        <div className="content_wrap">
          <div className="content content_blog">
            <div className="list_products shop_mode_list">
              <div className="list_products_header">
                <nav className="woocommerce-breadcrumb">
                  <a href="https://petermason.themerex.net/">Home</a>
                  &nbsp;/&nbsp;Shop
                </nav>
                <header className="woocommerce-products-header">
                  <h1 className="woocommerce-products-header__title page-title">
                    Shop
                  </h1>
                </header>
              </div>
              {/* /.list_products_header */}
              <div className="woocommerce-notices-wrapper" />
              <div className="petermason_shop_mode_buttons">
                <form
                  action="https://petermason.themerex.net/shop"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="petermason_shop_mode"
                    defaultValue="list"
                  />
                  <a
                    href="#"
                    className="woocommerce_thumbs icon-nine-squares"
                    title="Show products as thumbs"
                  />
                  <a
                    href="#"
                    className="woocommerce_list icon-list"
                    title="Show products as list"
                  />
                </form>
              </div>
              {/* /.petermason_shop_mode_buttons */}
              <p className="woocommerce-result-count">Showing all 6 results</p>
              <form className="woocommerce-ordering" method="get">
                <div className="select_container">
                  <select
                    name="orderby"
                    className="orderby"
                    aria-label="Shop order"
                  >
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date" selected>
                      Sort by latest
                    </option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </div>
                <input type="hidden" name="paged" defaultValue={1} />
                <input type="hidden" name="q" defaultValue="/shop/" />
              </form>
              <ul className="products columns-2">
                <li className="product type-product post-241 status-publish first instock product_cat-blazers product_cat-suits product_tag-accessories product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
                  <div className="post_item post_layout_list">
                    <div className="post_featured hover_shop">
                      <a href="https://petermason.themerex.net/product/slim-fit-2pc-black-mini-checkered-suit/">
                        <img
                          src="Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-1-351x351.webp"
                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet="
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-1-351x351.webp 351w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-1-100x100.jpg  100w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-1-600x600.jpg  600w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-1-150x150.jpg  150w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-1-300x300.jpg  300w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-1-370x370.jpg  370w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-1-400x400.webp 400w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-1.jpg          700w
                            "
                          sizes="(max-width: 351px) 100vw, 351px"
                          width={351}
                          height={351}
                        />
                      </a>
                    </div>
                    {/* /.post_featured */}
                    <div className="post_data">
                      <div className="post_header entry-header">
                        <h2 className="woocommerce-loop-product__title">
                          <a href="https://petermason.themerex.net/product/slim-fit-2pc-black-mini-checkered-suit/">
                            Slim Fit 2pc Black Mini Checkered Suit
                          </a>
                        </h2>
                      </div>
                      {/* /.post_header */}
                      <div className="post_content entry-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea
                          commodo consequat. Duis autem vel eum iriure dolor in
                          hendrerit in vulputate velit esse molestie consequat,
                          vel illum dolore eu feugiat nulla facilisis at vero
                          eros et accumsan et iusto odio dignissim qui blandit
                          praesent luptatum zzril delenit.
                        </p>
                      </div>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            400.<span className="decimals">00</span>
                          </bdi>
                        </span>
                        –
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            459.<span className="decimals">00</span>
                          </bdi>
                        </span>
                      </span>
                      <a
                        href="https://petermason.themerex.net/product/slim-fit-2pc-black-mini-checkered-suit/"
                        data-quantity={1}
                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                        data-product_id={241}
                        data-product_sku
                        aria-label="Select options for “Slim Fit 2pc Black Mini Checkered Suit”"
                        rel="nofollow"
                      >
                        Buy now
                      </a>
                    </div>
                    {/* /.post_data */}
                  </div>
                  {/* /.post_item */}
                </li>
                <li className="product type-product post-237 status-publish last instock product_cat-blazers product_cat-shirts product_cat-suits product_tag-fit product_tag-jackets product_tag-skinny-fit product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
                  <div className="post_item post_layout_list">
                    <div className="post_featured hover_shop">
                      <a href="https://petermason.themerex.net/product/modern-fit-2pc-ultra-black-suit/">
                        <img
                          src="Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-2-351x351.webp"
                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet="
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-2-351x351.webp 351w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-2-100x100.jpg  100w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-2-600x600.jpg  600w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-2-150x150.jpg  150w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-2-300x300.jpg  300w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-2-370x370.jpg  370w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-2-400x400.webp 400w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-2.jpg          700w
                            "
                          sizes="(max-width: 351px) 100vw, 351px"
                          width={351}
                          height={351}
                        />
                      </a>
                    </div>
                    {/* /.post_featured */}
                    <div className="post_data">
                      <div className="post_header entry-header">
                        <h2 className="woocommerce-loop-product__title">
                          <a href="https://petermason.themerex.net/product/modern-fit-2pc-ultra-black-suit/">
                            Modern Fit 2pc Ultra Black Suit
                          </a>
                        </h2>
                      </div>
                      {/* /.post_header */}
                      <div className="post_content entry-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea
                          commodo consequat. Duis autem vel eum iriure dolor in
                          hendrerit in vulputate velit esse molestie consequat,
                          vel illum dolore eu feugiat nulla facilisis at vero
                          eros et accumsan et iusto odio dignissim qui blandit
                          praesent luptatum zzril delenit.
                        </p>
                      </div>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            300.<span className="decimals">00</span>
                          </bdi>
                        </span>
                        –
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            329.<span className="decimals">00</span>
                          </bdi>
                        </span>
                      </span>
                      <a
                        href="https://petermason.themerex.net/product/modern-fit-2pc-ultra-black-suit/"
                        data-quantity={1}
                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                        data-product_id={237}
                        data-product_sku
                        aria-label="Select options for “Modern Fit 2pc Ultra Black Suit”"
                        rel="nofollow"
                      >
                        Buy now
                      </a>
                    </div>
                    {/* /.post_data */}
                  </div>
                  {/* /.post_item */}
                </li>
                <li className="product type-product post-233 status-publish first instock product_cat-suits product_cat-ties product_cat-trousers product_cat-waistcoats product_tag-accessories product_tag-jackets product_tag-wedding has-post-thumbnail shipping-taxable purchasable product-type-variable">
                  <div className="post_item post_layout_list">
                    <div className="post_featured hover_shop">
                      <a href="https://petermason.themerex.net/product/slim-fit-3pc-solid-blue-suit/">
                        <img
                          src="Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-3-351x351.webp"
                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet="
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-3-351x351.webp 351w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-3-100x100.jpg  100w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-3-600x600.jpg  600w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-3-150x150.jpg  150w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-3-300x300.jpg  300w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-3-370x370.jpg  370w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-3-400x400.webp 400w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-3.jpg          700w
                            "
                          sizes="(max-width: 351px) 100vw, 351px"
                          width={351}
                          height={351}
                        />
                      </a>
                    </div>
                    {/* /.post_featured */}
                    <div className="post_data">
                      <div className="post_header entry-header">
                        <h2 className="woocommerce-loop-product__title">
                          <a href="https://petermason.themerex.net/product/slim-fit-3pc-solid-blue-suit/">
                            Slim Fit 3pc Solid Blue Suit
                          </a>
                        </h2>
                      </div>
                      {/* /.post_header */}
                      <div className="post_content entry-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea
                          commodo consequat. Duis autem vel eum iriure dolor in
                          hendrerit in vulputate velit esse molestie consequat,
                          vel illum dolore eu feugiat nulla facilisis at vero
                          eros et accumsan et iusto odio dignissim qui blandit
                          praesent luptatum zzril delenit.
                        </p>
                      </div>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            600.<span className="decimals">00</span>
                          </bdi>
                        </span>
                        –
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            609.<span className="decimals">00</span>
                          </bdi>
                        </span>
                      </span>
                      <a
                        href="https://petermason.themerex.net/product/slim-fit-3pc-solid-blue-suit/"
                        data-quantity={1}
                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                        data-product_id={233}
                        data-product_sku
                        aria-label="Select options for “Slim Fit 3pc Solid Blue Suit”"
                        rel="nofollow"
                      >
                        Buy now
                      </a>
                    </div>
                    {/* /.post_data */}
                  </div>
                  {/* /.post_item */}
                </li>
                <li className="product type-product post-229 status-publish last instock product_cat-shirts product_cat-suits product_cat-trousers product_cat-waistcoats product_tag-classic product_tag-fit product_tag-scarves product_tag-skinny-fit has-post-thumbnail shipping-taxable purchasable product-type-variable">
                  <div className="post_item post_layout_list">
                    <div className="post_featured hover_shop">
                      <a href="https://petermason.themerex.net/product/traditional-fit-2pc-brown-suit/">
                        <img
                          src="Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-4-351x351.webp"
                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet="
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-4-351x351.webp 351w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-4-100x100.jpg  100w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-4-600x600.jpg  600w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-4-150x150.jpg  150w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-4-300x300.jpg  300w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-4-370x370.jpg  370w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-4-400x400.webp 400w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-4.jpg          700w
                            "
                          sizes="(max-width: 351px) 100vw, 351px"
                          width={351}
                          height={351}
                        />
                      </a>
                    </div>
                    {/* /.post_featured */}
                    <div className="post_data">
                      <div className="post_header entry-header">
                        <h2 className="woocommerce-loop-product__title">
                          <a href="https://petermason.themerex.net/product/traditional-fit-2pc-brown-suit/">
                            Traditional Fit 2pc Brown Suit
                          </a>
                        </h2>
                      </div>
                      {/* /.post_header */}
                      <div className="post_content entry-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea
                          commodo consequat. Duis autem vel eum iriure dolor in
                          hendrerit in vulputate velit esse molestie consequat,
                          vel illum dolore eu feugiat nulla facilisis at vero
                          eros et accumsan et iusto odio dignissim qui blandit
                          praesent luptatum zzril delenit.
                        </p>
                      </div>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            500.<span className="decimals">00</span>
                          </bdi>
                        </span>
                        –
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            530.<span className="decimals">00</span>
                          </bdi>
                        </span>
                      </span>
                      <a
                        href="https://petermason.themerex.net/product/traditional-fit-2pc-brown-suit/"
                        data-quantity={1}
                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                        data-product_id={229}
                        data-product_sku
                        aria-label="Select options for “Traditional Fit 2pc Brown Suit”"
                        rel="nofollow"
                      >
                        Buy now
                      </a>
                    </div>
                    {/* /.post_data */}
                  </div>
                  {/* /.post_item */}
                </li>
                <li className="product type-product post-225 status-publish first instock product_cat-blazers product_cat-ties product_cat-trousers product_cat-waistcoats product_tag-accessories product_tag-scarves product_tag-wedding has-post-thumbnail sale shipping-taxable purchasable product-type-variable">
                  <div className="post_item post_layout_list">
                    <div className="post_featured hover_shop">
                      <a href="https://petermason.themerex.net/product/luxury-fit-3pc-black-solid-suit/">
                        <span className="onsale">Sale!</span>
                        <img
                          src="Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-5-351x351.jpg"
                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet="
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-5-351x351.jpg 351w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-5-100x100.jpg 100w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-5-600x600.jpg 600w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-5-150x150.jpg 150w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-5-300x300.jpg 300w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-5-370x370.jpg 370w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-5-400x400.jpg 400w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-5.jpg         700w
                            "
                          sizes="(max-width: 351px) 100vw, 351px"
                          width={351}
                          height={351}
                        />
                      </a>
                    </div>
                    {/* /.post_featured */}
                    <div className="post_data">
                      <div className="post_header entry-header">
                        <h2 className="woocommerce-loop-product__title">
                          <a href="https://petermason.themerex.net/product/luxury-fit-3pc-black-solid-suit/">
                            Luxury Fit 3pc Black Solid Suit
                          </a>
                        </h2>
                      </div>
                      {/* /.post_header */}
                      <div className="post_content entry-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea
                          commodo consequat. Duis autem vel eum iriure dolor in
                          hendrerit in vulputate velit esse molestie consequat,
                          vel illum dolore eu feugiat nulla facilisis at vero
                          eros et accumsan et iusto odio dignissim qui blandit
                          praesent luptatum zzril delenit.
                        </p>
                      </div>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            400.<span className="decimals">00</span>
                          </bdi>
                        </span>
                      </span>
                      <a
                        href="https://petermason.themerex.net/product/luxury-fit-3pc-black-solid-suit/"
                        data-quantity={1}
                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                        data-product_id={225}
                        data-product_sku
                        aria-label="Select options for “Luxury Fit 3pc Black Solid Suit”"
                        rel="nofollow"
                      >
                        Buy now
                      </a>
                    </div>
                    {/* /.post_data */}
                  </div>
                  {/* /.post_item */}
                </li>
                <li className="product type-product post-220 status-publish last instock product_cat-shirts product_cat-waistcoats product_tag-classic product_tag-fit product_tag-jackets product_tag-skinny-fit has-post-thumbnail shipping-taxable purchasable product-type-variable">
                  <div className="post_item post_layout_list">
                    <div className="post_featured hover_shop">
                      <a href="https://petermason.themerex.net/product/exclusive-fit-3pc-dark-blue-suit/">
                        <img
                          src="Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-6-351x351.jpg"
                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcSet="
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-6-351x351.jpg 351w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-6-100x100.jpg 100w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-6-600x600.jpg 600w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-6-150x150.jpg 150w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-6-300x300.jpg 300w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-6-370x370.jpg 370w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-6-400x400.jpg 400w,
                              Products%20%E2%80%93%20Peter%20Mason%20%E2%80%93%20tailor_files/product-6.jpg         700w
                            "
                          sizes="(max-width: 351px) 100vw, 351px"
                          width={351}
                          height={351}
                        />
                      </a>
                    </div>
                    {/* /.post_featured */}
                    <div className="post_data">
                      <div className="post_header entry-header">
                        <h2 className="woocommerce-loop-product__title">
                          <a href="https://petermason.themerex.net/product/exclusive-fit-3pc-dark-blue-suit/">
                            Exclusive Fit 3pc Dark Blue Suit
                          </a>
                        </h2>
                      </div>
                      {/* /.post_header */}
                      <div className="post_content entry-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea
                          commodo consequat. Duis autem vel eum iriure dolor in
                          hendrerit in vulputate velit esse molestie consequat,
                          vel illum dolore eu feugiat nulla facilisis at vero
                          eros et accumsan et iusto odio dignissim qui blandit
                          praesent luptatum zzril delenit.
                        </p>
                      </div>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            300.<span className="decimals">00</span>
                          </bdi>
                        </span>
                        –
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            340.<span className="decimals">00</span>
                          </bdi>
                        </span>
                      </span>
                      <a
                        href="https://petermason.themerex.net/product/exclusive-fit-3pc-dark-blue-suit/"
                        data-quantity={1}
                        className="button product_type_variable add_to_cart_button sc_button_style_2 sc_button_hover_slide_bottom"
                        data-product_id={220}
                        data-product_sku
                        aria-label="Select options for “Exclusive Fit 3pc Dark Blue Suit”"
                        rel="nofollow"
                      >
                        Buy now
                      </a>
                    </div>
                    {/* /.post_data */}
                  </div>
                  {/* /.post_item */}
                </li>
              </ul>
            </div>
            {/* /.list_products */}
          </div>
          {/* </.content> */}
          <div className="sidebar left sidebar__left widget_area" role="complementary">
            <div className="sidebar_inner">
              <aside
                id="woocommerce_widget_cart-2"
                className="widget woocommerce widget_shopping_cart"
              >
                <h5 className="widget_title">Shopping Cart</h5>
                <div className="widget_shopping_cart_content">
                  <p className="woocommerce-mini-cart__empty-message">
                    No products in the cart.
                  </p>
                </div>
              </aside>
              <aside
                id="woocommerce_price_filter-2"
                className="widget woocommerce widget_price_filter"
              >
                <h5 className="widget_title">Filter by price</h5>
                <form
                  method="get"
                  action="https://petermason.themerex.net/shop/"
                >
                  <div className="price_slider_wrapper">
                    <div
                      className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      style={{}}
                    >
                      <div
                        className="ui-slider-range ui-corner-all ui-widget-header"
                        style={{ left: "0%", width: "100%" }}
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "0%" }}
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "100%" }}
                      />
                    </div>
                    <div className="price_slider_amount" data-step={10}>
                      <label className="screen-reader-text" htmlFor="min_price">
                        Min price
                      </label>
                      <input
                        type="text"
                        id="min_price"
                        name="min_price"
                        defaultValue={300}
                        data-min={300}
                        placeholder="Min price"
                        style={{ display: "none" }}
                      />
                      <label className="screen-reader-text" htmlFor="max_price">
                        Max price
                      </label>
                      <input
                        type="text"
                        id="max_price"
                        name="max_price"
                        defaultValue={610}
                        data-max={610}
                        placeholder="Max price"
                        style={{ display: "none" }}
                      />
                      <button type="submit" className="button">
                        Filter
                      </button>
                      <div className="price_label" style={{}}>
                        Price: <span className="from">$300</span> —
                        <span className="to">$610</span>
                      </div>
                      <input type="hidden" name="q" defaultValue="/shop/" />
                      <div className="clear" />
                    </div>
                  </div>
                </form>
              </aside>
              <aside
                id="woocommerce_product_categories-2"
                className="widget woocommerce widget_product_categories"
              >
                <h5 className="widget_title">Categories</h5>
                <ul className="product-categories">
                  <li className="cat-item cat-item-29">
                    <a href="https://petermason.themerex.net/product-category/blazers/">
                      Blazers
                    </a>
                  </li>
                  <li className="cat-item cat-item-30">
                    <a href="https://petermason.themerex.net/product-category/shirts/">
                      Shirts
                    </a>
                  </li>
                  <li className="cat-item cat-item-28">
                    <a href="https://petermason.themerex.net/product-category/suits/">
                      Suits
                    </a>
                  </li>
                  <li className="cat-item cat-item-33">
                    <a href="https://petermason.themerex.net/product-category/ties/">
                      Ties
                    </a>
                  </li>
                  <li className="cat-item cat-item-32">
                    <a href="https://petermason.themerex.net/product-category/trousers/">
                      Trousers
                    </a>
                  </li>
                  <li className="cat-item cat-item-31">
                    <a href="https://petermason.themerex.net/product-category/waistcoats/">
                      Waistcoats
                    </a>
                  </li>
                </ul>
              </aside>
              <aside
                id="woocommerce_product_tag_cloud-2"
                className="widget woocommerce widget_product_tag_cloud"
              >
                <h5 className="widget_title">Tags</h5>
                <div className="tagcloud">
                  <a
                    href="https://petermason.themerex.net/product-tag/accessories/"
                    className="tag-cloud-link tag-link-35 tag-link-position-1 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "15.636363636364pt" }}
                    aria-label="Accessories (3 products)"
                  >
                    Accessories
                  </a>
                  <a
                    href="https://petermason.themerex.net/product-tag/classic/"
                    className="tag-cloud-link tag-link-37 tag-link-position-2 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "8pt" }}
                    aria-label="Classic (2 products)"
                  >
                    Classic
                  </a>
                  <a
                    href="https://petermason.themerex.net/product-tag/fit/"
                    className="tag-cloud-link tag-link-38 tag-link-position-3 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "15.636363636364pt" }}
                    aria-label="Fit (3 products)"
                  >
                    Fit
                  </a>
                  <a
                    href="https://petermason.themerex.net/product-tag/jackets/"
                    className="tag-cloud-link tag-link-36 tag-link-position-4 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "15.636363636364pt" }}
                    aria-label="Jackets (3 products)"
                  >
                    Jackets
                  </a>
                  <a
                    href="https://petermason.themerex.net/product-tag/scarves/"
                    className="tag-cloud-link tag-link-40 tag-link-position-5 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "8pt" }}
                    aria-label="Scarves (2 products)"
                  >
                    Scarves
                  </a>
                  <a
                    href="https://petermason.themerex.net/product-tag/skinny-fit/"
                    className="tag-cloud-link tag-link-39 tag-link-position-6 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "15.636363636364pt" }}
                    aria-label="Skinny fit (3 products)"
                  >
                    Skinny fit
                  </a>
                  <a
                    href="https://petermason.themerex.net/product-tag/wedding/"
                    className="tag-cloud-link tag-link-34 tag-link-position-7 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "22pt" }}
                    aria-label="Wedding (4 products)"
                  >
                    Wedding
                  </a>
                </div>
              </aside>
            </div>
            {/* /.sidebar_inner */}
          </div>
          {/* /.sidebar */}
        </div>
        {/* </.content_wrap> */}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
