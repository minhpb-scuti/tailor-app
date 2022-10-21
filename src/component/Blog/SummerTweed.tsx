/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Image from "../../static/image/image-9.jpg";
import Avatar from "../../static/image/avatar.jpeg";
import { useWindowDimensions, getWidthContent } from "../../customHook";
import { Trans, useTranslation } from "react-i18next";

const SummerTweed = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();
  const contentWidth = getWidthContent(width);
  const { t } = useTranslation();

  return (
    <div className="scheme_default">
      <Header
        children={
          <BreadCrumb
            text="Summer Tweed."
            text1={t("all_posts")}
            text2={t("fashion")}
            href1="/blog"
          />
        }
        pathname={location.pathname}
      />
      <div className="page_content_wrap scheme_default">
        <div className="content_wrap">
          <div className="content">
            <article
              id="post-63"
              className="post_item_single post_type_post post_format_ itemscope post-63 post type-post status-publish format-standard has-post-thumbnail hentry category-details category-fresh-look category-gentleman tag-designer tag-men tag-suit tag-tailor"
              itemScope
              itemType="//schema.org/BlogPosting"
            >
              <div className="post_featured">
                <img
                  src={Image}
                  className="attachment-petermason-thumb-huge size-petermason-thumb-huge wp-post-image"
                  alt="Top 10 Must Tries on The New Ultimate 3D."
                  width={1170}
                  height={658}
                />
              </div>
              {/* .post_featured */}
              <div className="post_header entry-header">
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
              <div
                className="post_content entry-content"
                itemProp="articleBody"
              >
                <p>
                  <iframe
                    src="https://player.vimeo.com/video/44548560?autoplay=1"
                    title="USA NETWORK SUITS & MR PORTER, SUITS & STYLE"
                    allowFullScreen
                    width="100%"
                    style={{
                      maxHeight: "658px",
                      height: `${contentWidth * 0.56}px`,
                    }}
                  />
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequatm, eaque ipsa
                  quae ab illo inventore emo enim ipsam volu ptatem quia
                  voluptas sit.
                </p>
                <p>
                  Aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequatm, eaque ipsa quae ab illo inventore emo enim ipsam
                  volu ptatem quia voluptas sit.
                </p>
                <p>
                  Aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                </p>
                <div className="post_meta post_meta_single">
                  <div className="post_meta_item post_tags">
                    <div className="post_meta_item_categories">
                      <span className="post_meta_label">
                        <Trans i18nKey="categories">
                          <span>{t("categories")}</span>
                        </Trans>
                        :
                      </span>
                      <a href="/details/" rel="category tag">
                        <Trans i18nKey="details">
                          <span>{t("details")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="/" rel="category tag">
                        <Trans i18nKey="fresh_look">
                          <span>{t("fresh_look")}</span>
                        </Trans>
                      </a>
                      ,
                      <a href="#/" rel="category tag">
                        <Trans i18nKey="gentlenman">
                          <span>{t("gentlenman")}</span>
                        </Trans>
                      </a>
                    </div>
                    <div className="post_meta_item_tags">
                      <span className="post_meta_label">
                        <Trans i18nKey="tags">
                          <span>{t("tags")}</span>
                        </Trans>
                        :
                      </span>
                      <a rel="tag">
                        <Trans i18nKey="designer">
                          <span>{t("designer")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="tag">
                        <Trans i18nKey="men">
                          <span>{t("men")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="tag">
                        <Trans i18nKey="header.suits">
                          <span>{t("header.suits")}</span>
                        </Trans>
                      </a>
                      ,
                      <a rel="tag">
                        <Trans i18nKey="tailor">
                          <span>{t("tailor")}</span>
                        </Trans>
                      </a>
                    </div>
                  </div>
                  <span className="post_meta_item post_share">
                    <div className="socials_wrap socials_share socials_size_tiny socials_type_block socials_dir_horizontal">
                      <span className="social_items inited">
                        <span className="social_item social_item_popup">
                          <a
                            href="https://twitter.com/intent/tweet?text=Top+10+Must+Tries+on+The+New+Ultimate+3D.&url=https%3A%2F%2Fpetermason.themerex.net%2Ftop-10-must-tries-on-the-new-ultimate-3d%2F"
                            className="social_icons social_twitter"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-twitter" />
                          </a>
                        </span>
                        <span className="social_item social_item_popup">
                          <a
                            href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fpetermason.themerex.net%2Ftop-10-must-tries-on-the-new-ultimate-3d%2F"
                            className="social_icons social_facebook fbc-has-badge fbc-UID_1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-facebook" />
                          </a>
                        </span>
                        <span className="social_item social_item_popup">
                          <a
                            href="http://www.tumblr.com/share?v=3&u=https%3A%2F%2Fpetermason.themerex.net%2Ftop-10-must-tries-on-the-new-ultimate-3d%2F&t=Top+10+Must+Tries+on+The+New+Ultimate+3D.&s=Lorem+ipsum+dolor+sit+amet%2C+consectetur+adipisicing+elit%2C+sed+do+eiusmod+tempor+incididunt+ut+labore+et+dolore+magna+aliqua.+Ut+enim+ad+minim+veniam%2C+quis+nostrud+exercitation+ullamco."
                            className="social_icons social_tumblr"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-tumblr" />
                          </a>
                        </span>
                        <span className="social_item social_item_popup">
                          <a
                            href="mailto:support@ex%D0%B0mple.com"
                            className="social_icons social_mail"
                            data-link="mailto:support@exаmple.com"
                            data-count="mail"
                          >
                            <span className="trx_addons_icon-mail" />
                          </a>
                        </span>
                      </span>
                    </div>
                  </span>
                </div>
              </div>
              {/* .entry-content */}
              <div
                className="author_info author vcard"
                itemProp="author"
                itemScope
                itemType="//schema.org/Person"
              >
                <div className="author_avatar" itemProp="image">
                  <img
                    alt=""
                    src={Avatar}
                    className="avatar avatar-280 photo"
                    loading="lazy"
                    width={280}
                    height={280}
                  />
                </div>
                <div className="author_description">
                  <h5 className="author_title" itemProp="name">
                    <Trans i18nKey="about_tailor">
                      <span>{t("about_tailor")}</span>
                    </Trans>{" "}
                    Candy Wire
                  </h5>
                  <div className="author_bio" itemProp="description">
                    <p>
                             <b>
                        <Trans i18nKey="tailor">
                          <span>{t("tailor")}</span>
                        </Trans>
                      </b>
                      <br />
                      Lorem ipsum dolor sit amet, sale harum senserit ne mel. In
                      his putant aliquip phaedrum, has discere pertinax eu, ea
                      maiorum molestie sit. Cu epicurei facilisi pri. Ne cum
                      vidit solet congue, eos eu.
                    </p>
                    <a className="author_link" href="/blog" rel="author">
                      <Trans i18nKey="view_more_post">
                        <span>{t("view_more_post")}</span>
                      </Trans>
                    </a>
                  </div>
                  {/* .author_bio */}
                </div>
                {/* .author_description */}
              </div>
              {/* .author_info */}
            </article>
            <section className="comments_wrap">
              <div className="comments_form_wrap">
                <div className="comments_form">
                  <div id="respond" className="comment-respond">
                    <h3
                      id="reply-title"
                      className="section_title comments_form_title"
                    >
                      <Trans i18nKey="add_comment">
                        <span>{t("add_comment")}</span>
                      </Trans>
                      <small>
                        <a
                          rel="nofollow"
                          id="cancel-comment-reply-link"
                          href="/top-10-must-tries-on-the-new-ultimate-3d/#respond"
                          style={{ display: "none" }}
                        >
                          Cancel reply
                        </a>
                      </small>
                    </h3>
                    <form id="commentform" className="comment-form" noValidate>
                      <div className="comments_field comments_comment">
                        <label htmlFor="comment" className="required">
                          Comment
                        </label>
                        <span className="sc_form_field_wrap">
                          <textarea
                            id="comment"
                            name="comment"
                            placeholder={t("your_comment")}
                            aria-required="true"
                            defaultValue={""}
                          />
                        </span>
                      </div>
                      <div className="comments_field comments_author">
                        <label htmlFor="author" className="required">
                          Name
                        </label>
                        <span className="sc_form_field_wrap">
                          <input
                            id="author"
                            name="author"
                            type="text"
                            placeholder={t("your_name")}
                            aria-required="true"
                          />
                        </span>
                      </div>
                      <div className="comments_field comments_email">
                        <label htmlFor="email" className="required">
                          E-mail
                        </label>
                        <span className="sc_form_field_wrap">
                          <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder={t("your_email")}
                            aria-required="true"
                          />
                        </span>
                      </div>
                      {/* <p className="wpgdprc-checkbox comment-form-wpgdprc">
                      <input
                        type="checkbox"
                        name="wpgdprc"
                        id="wpgdprc"
                        defaultValue={1}
                        className="inited"
                      />
                      <label htmlFor="wpgdprc">
                        By using this form you agree with the storage and
                        handling of your data by this website.
                        <abbr
                          className="wpgdprc-required"
                          title="You need to accept this checkbox."
                        >
                          *
                        </abbr>
                      </label>
                    </p> */}
                      <p className="form-submit">
                        <button
                          type="submit"
                          style={{
                            backgroundColor: "#be9667",
                          }}
                        >
                          <Trans i18nKey="submit">
                            <span>{t("submit")}</span>
                          </Trans>
                        </button>
                        <input
                          type="hidden"
                          name="comment_post_ID"
                          defaultValue={63}
                          id="comment_post_ID"
                        />
                        <input
                          type="hidden"
                          name="comment_parent"
                          id="comment_parent"
                          defaultValue={0}
                        />
                      </p>
                    </form>
                  </div>
                  {/* #respond */}
                </div>
              </div>
              {/* /.comments_form_wrap */}
            </section>
            {/* /.comments_wrap */}
          </div>
          {/* </.content> */}
        </div>
        {/* </.content_wrap> */}
      </div>
      <Footer />
    </div>
  );
};

export default SummerTweed;
