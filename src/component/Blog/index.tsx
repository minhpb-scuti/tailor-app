/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Image4 from "../../static/image/image-4.jpg";
import Image5 from "../../static/image/image-5.webp";
import Image6 from "../../static/image/image-6.webp";
import Image7 from "../../static/image/image-2.jpg";
import Image3 from "../../static/image/image-3.jpg";
import Image8 from "../../static/image/image-8.jpg";
import Image9 from "../../static/image/image-9.jpg";
import Image10 from "../../static/image/image-10.webp";
import Image11 from "../../static/image/image-11.webp";
import Image13 from "../../static/image/image-13.webp";
import { Carousel } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";

const Blog = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isPlayVideo, setIsPlayVideo] = useState<boolean>(false);

  const handleClickVideo = () => {
    setIsPlayVideo(true);
  };

  return (
    <div className="sidebar_right scheme_default ">
      <Header
        children={<BreadCrumb text="all_posts" />}
        pathname={location.pathname}
      />
      <div className="page_content_wrap scheme_default">
        <div className="content_wrap">
          <div className="content content_blog">
            <div className="posts_container">
              <article
                id="post-100"
                className="post_item post_layout_excerpt post_format_standard post-100 post type-post status-publish format-standard has-post-thumbnail hentry category-custom-tailoring category-gentleman tag-designer tag-wedding"
              >
                <div className="post_featured with_thumb hover_icon">
                  <img
                    src={Image4}
                    className="attachment-petermason-thumb-big size-petermason-thumb-big wp-post-image"
                    alt="3 Steps to Creating The Perfect Summer Shirt!"
                    width={740}
                    height={416}
                  />
                  <div className="mask" />
                  <div className="icons">
                    <a
                      href="/3-steps-to-creating-the-perfect-summer-shirt/"
                      aria-hidden="true"
                      className="icon_plus"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a
                      href="/3-steps-to-creating-the-perfect-summer-shirt/"
                      rel="bookmark"
                    >
                      <Trans i18nKey="post1">
                        <span>{t("post1")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequatm,
                      eaque ipsa quae ab illo inventore emo enim ipsam volu
                      ptatem quia voluptas sit. Aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores…
                    </p>
                  </div>
                  <p>
                    <a
                      className="more-link"
                      href="/3-steps-to-creating-the-perfect-summer-shirt/"
                    >
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>
                    </a>
                  </p>
                </div>
                {/* .entry-content */}
              </article>
              <article
                id="post-97"
                className="post_item post_layout_excerpt post_format_standard post-97 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion category-gentleman tag-clothing"
              >
                <div className="post_featured with_thumb hover_icon">
                  <img
                    src={Image5}
                    className="attachment-petermason-thumb-big size-petermason-thumb-big wp-post-image"
                    alt="15 Suit Style Tips Every Man Must Know."
                    loading="lazy"
                    width={740}
                    height={416}
                  />
                  <div className="mask" />
                  <div className="icons">
                    <a
                      href="/15-suit-style-tips-every-man-must-know/"
                      aria-hidden="true"
                      className="icon_plus"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a
                      href="/15-suit-style-tips-every-man-must-know/"
                      rel="bookmark"
                    >
                      <Trans i18nKey="post2">
                        <span>{t("post2")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequatm,
                      eaque ipsa quae ab illo inventore emo enim ipsam volu
                      ptatem quia voluptas sit. Aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores…
                    </p>
                  </div>
                  <p>
                    <a
                      className="more-link"
                      href="/15-suit-style-tips-every-man-must-know/"
                    >
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>
                    </a>
                  </p>
                </div>
                {/* .entry-content */}
              </article>
              <article
                id="post-95"
                className="post_item post_layout_excerpt post_format_standard post-95 post type-post status-publish format-standard hentry category-custom-tailoring tag-business tag-wedding"
              >
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a href="/how-to-choose-a-tie-8-steps/" rel="bookmark">
                      <Trans i18nKey="post3">
                        <span>{t("post3")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequatm,
                      eaque ipsa quae ab illo inventore emo enim ipsam volu
                      ptatem quia voluptas sit. Aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores…
                    </p>
                  </div>
                  <p>
                    <a
                      className="more-link"
                      href="/how-to-choose-a-tie-8-steps/"
                    >
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>
                    </a>
                  </p>
                </div>
                {/* .entry-content */}
              </article>
              <article
                id="post-92"
                className="post_item post_layout_excerpt post_format_standard post-92 post type-post status-publish format-standard has-post-thumbnail hentry category-details category-gentleman tag-business tag-designer tag-tailor"
              >
                <div className="post_featured with_thumb hover_icon">
                  <img
                    src={Image6}
                    className="attachment-petermason-thumb-big size-petermason-thumb-big wp-post-image"
                    alt="Custom Shirts – Summer 2016 Must Haves."
                    loading="lazy"
                    width={740}
                    height={416}
                  />
                  <div className="mask" />
                  <div className="icons">
                    <a
                      href="/custom-shirts-summer-2016-must-haves/"
                      aria-hidden="true"
                      className="icon_plus"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a
                      href="/custom-shirts-summer-2016-must-haves/"
                      rel="bookmark"
                    >
                      <Trans i18nKey="post4">
                        <span>{t("post4")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequatm,
                      eaque ipsa quae ab illo inventore emo enim ipsam volu
                      ptatem quia voluptas sit. Aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores…
                    </p>
                  </div>
                  <p>
                    <a
                      className="more-link"
                      href="/custom-shirts-summer-2016-must-haves/"
                    >
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>
                    </a>
                  </p>
                </div>
                {/* .entry-content */}
              </article>
              <article
                id="post-88"
                className="post_item post_layout_excerpt post_format_quote post-88 post type-post status-publish format-quote hentry category-fashion tag-designer tag-suit tag-tailor post_format-post-format-quote"
              >
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a
                      href="/10-essential-quotes-about-mens-style/"
                      rel="bookmark"
                    >
                      <Trans i18nKey="post5">
                        <span>{t("post5")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner">
                    <blockquote>
                      <p>
                        <Trans i18nKey="quote1">
                          <span>{t("quote1")}</span>
                        </Trans>
                      </p>
                      <p>
                        <a>Mahatma Gandhi</a>
                      </p>
                    </blockquote>
                  </div>
                </div>
                {/* .entry-content */}
              </article>
              <article
                id="post-85"
                className="post_item post_layout_excerpt post_format_gallery post-85 post type-post status-publish format-gallery hentry category-details tag-designer tag-men tag-wedding post_format-post-format-gallery"
              >
                <div className="post_featured without_thumb">
                  <Carousel className="carousel_custom">
                    <Carousel.Item>
                      <div
                        className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                        style={{
                          backgroundImage: `url(${Image7})`,
                          width: "100%",
                        }}
                        data-slide-number={2}
                        data-swiper-slide-index={2}
                      >
                        <a href="/prince-of-wales/" className="slide_link" />
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div
                        className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                        style={{
                          backgroundImage: `url(${Image3})`,
                          width: "100%",
                        }}
                        data-slide-number={2}
                        data-swiper-slide-index={2}
                      >
                        <a href="/prince-of-wales/" className="slide_link" />
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div
                        className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                        style={{
                          backgroundImage: `url(${Image13})`,
                          width: "100%",
                        }}
                        data-slide-number={2}
                        data-swiper-slide-index={2}
                      >
                        <a href="/prince-of-wales/" className="slide_link" />
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a href="/prince-of-wales/" rel="bookmark">
                      <Trans i18nKey="post6">
                        <span>{t("post6")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner" />
                  <p>
                    <a className="more-link" href="/prince-of-wales/">
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>
                    </a>
                  </p>
                </div>
                {/* .entry-content */}
              </article>
              <article
                id="post-82"
                className="post_item post_layout_excerpt post_format_audio post-82 post type-post status-publish format-audio hentry category-fashion tag-men tag-tailor tag-wedding post_format-post-format-audio"
              >
                <div className="post_featured without_thumb">
                  <div className="post_audio">
                    <div className="post_audio_author">Lily Hunter</div>
                    <h5 className="post_audio_title">
                      <Trans i18nKey="insert_audio">
                        <span>{t("insert_audio")}</span>
                      </Trans>
                    </h5>
                    {/*[if lt IE 9
                        ]><!
                      [endif]*/}
                    <span className="mejs-offscreen">Audio Player</span>
                    <div
                      id="mep_0"
                      className="mejs-container mejs-container-keyboard-inactive wp-audio-shortcode mejs-audio"
                      tabIndex={0}
                      role="application"
                      aria-label="Audio Player"
                      style={{
                        width: "628.6px",
                        height: "40px",
                        minWidth: "225px",
                      }}
                    >
                      <div className="mejs-inner">
                        <div className="mejs-mediaelement">
                          {/* <mediaelementwrapper id="audio-82-1">
                            <audio
                              className="wp-audio-shortcode"
                              id="audio-82-1_html5"
                              preload="none"
                              style={{ width: "100%", height: "100%" }}
                              src="Peter%20Mason%20%E2%80%93%20tailor_files/sample-melody.mp3"
                            >
                              <source
                                type="audio/mpeg"
                                src="Peter%20Mason%20%E2%80%93%20tailor_files/sample-melody.mp3"
                              />
                              <a href="/wp-content/uploads/2016/11/sample-melody.mp3">
                                /wp-content/uploads/2016/11/sample-melody.mp3
                              </a>
                            </audio>
                          </mediaelementwrapper> */}
                        </div>
                        <div className="mejs-layers">
                          <div
                            className="mejs-poster mejs-layer"
                            style={{
                              display: "none",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </div>
                        <div className="mejs-controls">
                          <div className="mejs-button mejs-playpause-button mejs-play">
                            <button
                              type="button"
                              aria-controls="mep_0"
                              title="Play"
                              aria-label="Play"
                              tabIndex={0}
                            />
                          </div>
                          <div
                            className="mejs-time mejs-currenttime-container"
                            role="timer"
                            aria-live="off"
                          >
                            <span className="mejs-currenttime">00:00</span>
                          </div>
                          <div className="mejs-time-rail">
                            <span className="mejs-time-total mejs-time-slider">
                              <span
                                className="mejs-time-buffering"
                                style={{ display: "none" }}
                              />
                              <span className="mejs-time-loaded" />
                              <span className="mejs-time-current" />
                              <span className="mejs-time-hovered no-hover" />
                              <span className="mejs-time-handle">
                                <span className="mejs-time-handle-content" />
                              </span>
                              <span className="mejs-time-float">
                                <span className="mejs-time-float-current">
                                  00:00
                                </span>
                                <span className="mejs-time-float-corner" />
                              </span>
                            </span>
                          </div>
                          <div className="mejs-time mejs-duration-container">
                            <span className="mejs-duration">00:00</span>
                          </div>
                          <div className="mejs-button mejs-volume-button mejs-mute">
                            <button
                              type="button"
                              aria-controls="mep_0"
                              title="Mute"
                              aria-label="Mute"
                              tabIndex={0}
                            />
                          </div>
                          <a className="mejs-horizontal-volume-slider">
                            <span className="mejs-offscreen">
                              Use Up/Down Arrow keys to increase or decrease
                              volume.
                            </span>
                            <div className="mejs-horizontal-volume-total">
                              <div
                                className="mejs-horizontal-volume-current"
                                style={{ left: "0px", width: "100%" }}
                              />
                              <div
                                className="mejs-horizontal-volume-handle"
                                style={{ left: "100%" }}
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a href="/the-white-mad-hatter/" rel="bookmark">
                      <Trans i18nKey="post7">
                        <span>{t("post7")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner" />
                  <p>
                    <a className="more-link" href="/the-white-mad-hatter/">
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>
                    </a>
                  </p>
                </div>
                {/* .entry-content */}
              </article>
              <article
                id="post-79"
                className="post_item post_layout_excerpt post_format_standard post-79 post type-post status-publish format-standard has-post-thumbnail hentry category-details category-gentleman tag-business tag-designer tag-men tag-tailor tag-wedding"
              >
                <div className="post_featured with_thumb hover_icon">
                  <img
                    src={Image8}
                    className="attachment-petermason-thumb-big size-petermason-thumb-big wp-post-image"
                    alt="What Colour Shoes to Wear With Your Suit."
                    loading="lazy"
                    width={740}
                    height={416}
                  />
                  <div className="mask" />
                  <div className="icons">
                    <a
                      href="/what-colour-shoes-to-wear-with-your-suit/"
                      aria-hidden="true"
                      className="icon_plus"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a
                      href="/what-colour-shoes-to-wear-with-your-suit/"
                      rel="bookmark"
                    >
                      <Trans i18nKey="post8">
                        <span>{t("post8")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequatm,
                      eaque ipsa quae ab illo inventore emo enim ipsam volu
                      ptatem quia voluptas sit. Aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores…
                    </p>
                  </div>
                  <p>
                    <a
                      className="more-link"
                      href="/what-colour-shoes-to-wear-with-your-suit/"
                    >
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>{" "}
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>
                    </a>
                  </p>
                </div>
                {/* .entry-content */}
              </article>
              <article
                id="post-76"
                className="post_item post_layout_excerpt post_format_video post-76 post type-post status-publish format-video has-post-thumbnail hentry category-fashion tag-men tag-tailor post_format-post-format-video"
              >
                <div
                  className={`post_featured with_thumb hover_play ${
                    isPlayVideo ? "post_video_play" : ""
                  } `}
                >
                  <img
                    src={Image9}
                    className="attachment-petermason-thumb-big size-petermason-thumb-big wp-post-image"
                    alt="Summer Tweed."
                    loading="lazy"
                    width={740}
                    height={416}
                  />
                  <div className="mask" />
                  <div
                    className="post_video_hover inited"
                    onClick={handleClickVideo}
                  />
                  <div className="post_video video_frame">
                    {isPlayVideo && (
                      <iframe
                        src="https://player.vimeo.com/video/44548560?autoplay=1"
                        title="USA NETWORK SUITS & MR PORTER, SUITS & STYLE"
                        allowFullScreen
                        width={640}
                        height={360}
                      />
                    )}
                  </div>
                </div>
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a href="/summer-tweed/" rel="bookmark">
                      <Trans i18nKey="post9">
                        <span>{t("post9")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequatm,
                      eaque ipsa quae ab illo inventore emo enim ipsam volu
                      ptatem quia voluptas sit. Aspernatur aut odit aut fugit,
                      sed quia consequuntur magni…
                    </p>
                  </div>
                  <p>
                    <a className="more-link" href="/summer-tweed/">
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>
                    </a>
                  </p>
                </div>
                {/* .entry-content */}
              </article>
              <article
                id="post-73"
                className="post_item post_layout_excerpt post_format_standard post-73 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion category-gentleman tag-men tag-suit tag-tailor tag-wedding"
              >
                <div className="post_featured with_thumb hover_icon">
                  <img
                    src={Image10}
                    className="attachment-petermason-thumb-big size-petermason-thumb-big wp-post-image"
                    alt="How to Properly Button Suit Jackets & Blazers."
                    loading="lazy"
                    width={740}
                    height={416}
                  />
                  <div className="mask" />
                  <div className="icons">
                    <a
                      href="/how-to-properly-button-suit-jackets-blazers/"
                      aria-hidden="true"
                      className="icon_plus"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a
                      href="/how-to-properly-button-suit-jackets-blazers/"
                      rel="bookmark"
                    >
                      <Trans i18nKey="post10">
                        <span>{t("post10")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequatm,
                      eaque ipsa quae ab illo inventore emo enim ipsam volu
                      ptatem quia voluptas sit. Aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores…
                    </p>
                  </div>
                  <p>
                    <a
                      className="more-link"
                      href="/how-to-properly-button-suit-jackets-blazers/"
                    >
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>
                    </a>
                  </p>
                </div>
                {/* .entry-content */}
              </article>
              <article
                id="post-70"
                className="post_item post_layout_excerpt post_format_standard post-70 post type-post status-publish format-standard has-post-thumbnail hentry category-custom-tailoring category-details tag-business tag-clothing tag-designer"
              >
                <div className="post_featured with_thumb hover_icon">
                  <img
                    src={Image11}
                    className="attachment-petermason-thumb-big size-petermason-thumb-big wp-post-image"
                    alt="Recreating Cary Grant’s North by Northwest Suit."
                    loading="lazy"
                    width={740}
                    height={416}
                  />
                  <div className="mask" />
                  <div className="icons">
                    <a
                      href="/recreating-cary-grants-north-by-northwest-suit/"
                      aria-hidden="true"
                      className="icon_plus"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <a
                      href="/recreating-cary-grants-north-by-northwest-suit/"
                      rel="bookmark"
                    >
                      <Trans i18nKey="post11">
                        <span>{t("post11")}</span>
                      </Trans>
                    </a>
                  </h3>
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      <a rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </span>
                    <span className="post_meta_item post_date">
                      <a href="/top-10-must-tries-on-the-new-ultimate-3d/">
                        <Trans i18nKey="november">
                          <span>{t("november")}</span>
                        </Trans>{" "}
                        28, 2016
                      </a>
                    </span>
                    <a
                      href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                      className="post_meta_item post_counters_item post_counters_comments trx_addons_icon-comment"
                    >
                      <span className="post_counters_number">0</span>
                      <span className="post_counters_label">
                        <Trans i18nKey="comment">
                          <span>{t("comment")}</span>
                        </Trans>
                      </span>
                    </a>
                  </div>
                  {/* .post_meta */}
                </div>
                {/* .post_header */}
                <div className="post_content entry-content">
                  <div className="post_content_inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequatm,
                      eaque ipsa quae ab illo inventore emo enim ipsam volu
                      ptatem quia voluptas sit. Aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores…
                    </p>
                  </div>
                  <p>
                    <a
                      className="more-link"
                      href="/recreating-cary-grants-north-by-northwest-suit/"
                    >
                      <Trans i18nKey="more_info">
                        <span>{t("more_info")}</span>
                      </Trans>
                    </a>
                  </p>
                </div>
                {/* .entry-content */}
              </article>
            </div>
            {/* <nav className="navigation pagination" aria-label="Posts">
              <h2 className="screen-reader-text">Posts navigation</h2>
              <div className="nav-links">
                <span aria-current="page" className="page-numbers current">
                  <span className="meta-nav screen-reader-text">Page </span>1
                </span>
                <a className="page-numbers" href="/classic-1-column/page/2/">
                  <span className="meta-nav screen-reader-text">Page </span>2
                </a>
                <a className="page-numbers" href="/classic-1-column/page/3/">
                  <span className="meta-nav screen-reader-text">Page </span>3
                </a>
                <a
                  className="next page-numbers"
                  href="/classic-1-column/page/2/"
                >
                  &gt;
                </a>
              </div>
            </nav> */}
          </div>
          {/* </.content> */}
          <div className="sidebar right widget_area" role="complementary">
            <div className="sidebar_inner">
              <aside id="categories-2" className="widget widget_categories">
                <h5 className="widget_title">
                  <Trans i18nKey="categories">
                    <span>{t("categories")}</span>
                  </Trans>
                </h5>
                <ul>
                  <li className="cat-item cat-item-12">
                    <a>
                      <Trans i18nKey="custom_tailoring">
                        <span>{t("custom_tailoring")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="cat-item cat-item-9">
                    <a>
                      <Trans i18nKey="details">
                        <span>{t("details")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="cat-item cat-item-10">
                    <a>
                      <Trans i18nKey="fashion">
                        <span>{t("fashion")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="cat-item cat-item-11">
                    <a href="#/">
                      <Trans i18nKey="fresh_look">
                        <span>{t("fresh_look")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="cat-item cat-item-8">
                    <a>
                      <Trans i18nKey="gentlenman">
                        <span>{t("gentlenman")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="cat-item cat-item-7">
                    <a href="#/">
                      <Trans i18nKey="life_style">
                        <span>{t("life_style")}</span>
                      </Trans>
                    </a>
                  </li>
                </ul>
              </aside>
              <aside id="search-2" className="widget widget_search">
                <h5 className="widget_title">
                  <Trans i18nKey="header.search">
                    <span>{t("header.search")}</span>
                  </Trans>
                </h5>
                <form className="search-form">
                  <label>
                    <span className="screen-reader-text">Search for:</span>
                    <input
                      type="search"
                      className="search-field"
                      placeholder={t("header.search")}
                      name="s"
                    />
                  </label>
                  <input
                    type="submit"
                    className="search-submit"
                    defaultValue="Search"
                  />
                </form>
              </aside>
              <aside
                id="recent-comments-2"
                className="widget widget_recent_comments"
              >
                <h5 className="widget_title">
                  <Trans i18nKey="comment">
                    <span>{t("comment")}</span>
                  </Trans>
                </h5>
                <ul id="recentcomments">
                  <li className="recentcomments">
                    <span className="comment-author-link">Miki Williams</span>{" "}
                    on
                    <a href="/15-suit-style-tips-every-man-must-know/#comment-6">
                      <Trans i18nKey="post2">
                        <span>{t("post2")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">Martin Moore</span> on
                    <a href="/15-suit-style-tips-every-man-must-know/#comment-5">
                      <Trans i18nKey="post2">
                        <span>{t("post2")}</span>
                      </Trans>
                    </a>
                  </li>
                </ul>
              </aside>
              <aside
                id="trx_addons_widget_calendar-2"
                className="widget widget_calendar"
              >
                <h5 className="widget_title">Calendar</h5>
                <table id="wp-calendar" className="wp-calendar-table">
                  <caption>October 2022</caption>
                  <thead>
                    <tr>
                      <th scope="col" title="Monday">
                        Mon
                      </th>
                      <th scope="col" title="Tuesday">
                        Tue
                      </th>
                      <th scope="col" title="Wednesday">
                        Wed
                      </th>
                      <th scope="col" title="Thursday">
                        Thu
                      </th>
                      <th scope="col" title="Friday">
                        Fri
                      </th>
                      <th scope="col" title="Saturday">
                        Sat
                      </th>
                      <th scope="col" title="Sunday">
                        Sun
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="pad">
                        &nbsp;
                      </td>
                      <td>1</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td id="today">8</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td className="pad" colSpan={6}>
                        &nbsp;
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav
                  aria-label="Previous and next months"
                  className="wp-calendar-nav"
                >
                  <span className="wp-calendar-nav-prev">
                    <a href="/2016/11/">« Nov</a>
                  </span>
                  <span className="pad">&nbsp;</span>
                  <span className="wp-calendar-nav-next">&nbsp;</span>
                </nav>
              </aside>
              <aside
                id="recent-posts-2"
                className="widget widget_recent_entries"
              >
                <h5 className="widget_title">Recent Posts</h5>
                <ul>
                  <li>
                    <a href="/3-steps-to-creating-the-perfect-summer-shirt/">
                      <Trans i18nKey="post1">
                        <span>{t("post1")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li>
                    <a href="/15-suit-style-tips-every-man-must-know/">
                      <Trans i18nKey="post2">
                        <span>{t("post2")}</span>
                      </Trans>
                    </a>
                  </li>
                  <li>
                    <a href="/how-to-choose-a-tie-8-steps/">
                      <Trans i18nKey="post3">
                        <span>{t("post3")}</span>
                      </Trans>
                    </a>
                  </li>
                </ul>
              </aside>
              <aside id="tag_cloud-2" className="widget widget_tag_cloud">
                <h5 className="widget_title">
                  <Trans i18nKey="tags">
                    <span>{t("tags")}</span>
                  </Trans>
                </h5>
                <div className="tagcloud">
                  <a
                    className="tag-cloud-link tag-link-18 tag-link-position-1 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "11.266666666667pt" }}
                    aria-label="business (6 items)"
                  >
                    <Trans i18nKey="business">
                      <span>{t("business")}</span>
                    </Trans>
                  </a>
                  <a
                    className="tag-cloud-link tag-link-15 tag-link-position-2 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "8pt" }}
                    aria-label="clothing (5 items)"
                  >
                    <Trans i18nKey="clothing">
                      <span>{t("clothing")}</span>
                    </Trans>
                  </a>
                  <a
                    className="tag-cloud-link tag-link-17 tag-link-position-3 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "20.133333333333pt" }}
                    aria-label="designer (10 items)"
                  >
                    <Trans i18nKey="designer">
                      <span>{t("designer")}</span>
                    </Trans>
                  </a>
                  <a
                    className="tag-cloud-link tag-link-16 tag-link-position-4 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "15.933333333333pt" }}
                    aria-label="men (8 items)"
                  >
                    <Trans i18nKey="men">
                      <span>{t("men")}</span>
                    </Trans>
                  </a>
                  <a
                    className="tag-cloud-link tag-link-13 tag-link-position-5 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "8pt" }}
                    aria-label="suit (5 items)"
                  >
                    <Trans i18nKey="header.suits">
                      <span>{t("header.suits")}</span>
                    </Trans>
                  </a>
                  <a
                    className="tag-cloud-link tag-link-14 tag-link-position-6 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "22pt" }}
                    aria-label="tailor (11 items)"
                  >
                    <Trans i18nKey="tailor">
                      <span>{t("tailor")}</span>
                    </Trans>
                  </a>
                  <a
                    className="tag-cloud-link tag-link-19 tag-link-position-7 sc_button_hover_slide_bottom sc_button_hover_style_alterbd"
                    style={{ fontSize: "18.266666666667pt" }}
                    aria-label="wedding (9 items)"
                  >
                    <Trans i18nKey="wedding">
                      <span>{t("wedding")}</span>
                    </Trans>
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

export default Blog;
