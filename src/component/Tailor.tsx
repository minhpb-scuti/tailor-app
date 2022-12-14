import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Team1 from "../static/image/team-1.webp";
import Team2 from "../static/image/team-2.webp";
import Team3 from "../static/image/team-3.webp";

export interface ITailor {
  width: number;
  contentWidth: number;
}

const Tailor = (props: ITailor) => {
  const { width, contentWidth } = props;
  const { t } = useTranslation();
  return (
    <div
      className="vc_row wpb_row vc_row-fluid vc_custom_1480509951164 vc_row-has-fill"
      style={{
        position: "relative",
        left: -(width - contentWidth) / 2,
        boxSizing: "border-box",
        width: width,
        maxWidth: width,
        paddingLeft: (width - contentWidth) / 2,
        paddingRight: (width - contentWidth) / 2,
      }}
    >
      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className="vc_empty_space height_small"
              style={{ height: "0px" }}
            >
              <span className="vc_empty_space_inner" />
            </div>
            <div
              className="vc_empty_space height_large"
              style={{ height: "0px" }}
            >
              <span className="vc_empty_space_inner" />
            </div>
            <div
              className="sc_team sc_team_default"
              data-slides-per-view={3}
              data-slides-min-width={150}
            >
              <div className="sc_item_subtitle_container sc_align_center sc_item_title_style_style_2">
                <h6 className="sc_item_subtitle sc_team_subtitle sc_item_title_style_style_2">
                  <Trans i18nKey="our_tailors">
                    <span>{t("our_tailors")}</span>
                  </Trans>
                </h6>
              </div>
              <div className="sc_team_columns sc_item_columns trx_addons_columns_wrap columns_padding_bottom">
                <div className="trx_addons_column-1_3">
                  <div className="sc_team_item">
                    <div className="post_featured with_thumb hover_icon sc_team_item_thumb">
                      <img
                        src={Team1}
                        className="attachment-petermason-thumb-square size-petermason-thumb-square wp-post-image"
                        alt="Peter Mason"
                        loading="lazy"
                        width={400}
                        height={400}
                      />
                      <div className="mask" />
                      <div className="icons">
                        <a
                          href="/team/peter-mason/"
                          aria-hidden="true"
                          className="icon_plus"
                        >
                          +
                        </a>
                      </div>
                    </div>
                    <div className="sc_team_item_info">
                      <div className="sc_team_item_header">
                        <div className="sc_team_item_subtitle">
                          <Trans i18nKey="master_tailor">
                            <span>{t("master_tailor")}</span>
                          </Trans>
                        </div>
                        <h4 className="sc_team_item_title">
                          <a href="/team/peter-mason/">Peter Mason</a>
                        </h4>
                      </div>
                      <div className="sc_team_item_content">
                        <p>
                          Duis quis augue diam. Suspendisse in vulputate ante.
                          Aenean vulputate eros nisl, in fringilla massa pretium
                          a. Nulla auctor urna sit amet tortor vestibulum
                          fringilla. Sed posuere lorem id lacus facilisis, sed
                          mattis dolor dignissim. Cras nec tempus lacus, vitae
                          finibus tortor. Quisque rhoncus dui nec metus tempus
                          commodo. Praesent id pulvinar mi, ac dictum ipsum.
                          Fusce sem felis, vehicula???
                        </p>
                      </div>
                      <div className="sc_team_item_socials">
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
                            href="https://twitter.com/ThemerexThemes"
                            target="_blank"
                            className="social_icons social_twitter"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-twitter" />
                          </a>
                        </span>
                        <span className="social_item">
                          <a
                            href="https://www.instagram.com/themerex_net/"
                            target="_blank"
                            className="social_icons social_instagram"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-instagram" />
                          </a>
                        </span>
                      </div>
                      <div className="sc_team_item_button">
                        <a
                          href="/team/peter-mason/"
                          className="sc_button sc_button_simple"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trx_addons_column-1_3">
                  <div className="sc_team_item">
                    <div className="post_featured with_thumb hover_icon sc_team_item_thumb">
                      <img
                        src={Team2}
                        className="attachment-petermason-thumb-square size-petermason-thumb-square wp-post-image"
                        alt="Polly Wire"
                        loading="lazy"
                        width={400}
                        height={400}
                      />
                      <div className="mask" />
                      <div className="icons">
                        <a
                          href="/team/polly-wire/"
                          aria-hidden="true"
                          className="icon_plus"
                        >
                          +
                        </a>
                      </div>
                    </div>
                    <div className="sc_team_item_info">
                      <div className="sc_team_item_header">
                        <div className="sc_team_item_subtitle">
                          <Trans i18nKey="tailor">
                            <span>{t("tailor")}</span>
                          </Trans>
                        </div>
                        <h4 className="sc_team_item_title">
                          <a href="/team/polly-wire/">Polly Wire</a>
                        </h4>
                      </div>
                      <div className="sc_team_item_content">
                        <p>
                          Duis quis augue diam. Suspendisse in vulputate ante.
                          Aenean vulputate eros nisl, in fringilla massa pretium
                          a. Nulla auctor urna sit amet tortor vestibulum
                          fringilla. Sed posuere lorem id lacus facilisis, sed
                          mattis dolor dignissim. Cras nec tempus lacus, vitae
                          finibus tortor. Quisque rhoncus dui nec metus tempus
                          commodo. Praesent id pulvinar mi, ac dictum ipsum.
                          Fusce sem felis, vehicula???
                        </p>
                      </div>
                      <div className="sc_team_item_socials">
                        <span className="social_item">
                          <a
                            href="https://business.facebook.com/ThemeRexStudio/"
                            target="_blank"
                            className="social_icons social_facebook"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-facebook" />
                          </a>
                        </span>
                        <span className="social_item">
                          <a
                            href="https://twitter.com/ThemerexThemes"
                            target="_blank"
                            className="social_icons social_twitter"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-twitter" />
                          </a>
                        </span>
                        <span className="social_item">
                          <a
                            href="https://www.instagram.com/themerex_net/"
                            target="_blank"
                            className="social_icons social_instagram"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-instagram" />
                          </a>
                        </span>
                      </div>
                      <div className="sc_team_item_button">
                        <a
                          href="/team/polly-wire/"
                          className="sc_button sc_button_simple"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trx_addons_column-1_3">
                  <div className="sc_team_item">
                    <div className="post_featured with_thumb hover_icon sc_team_item_thumb">
                      <img
                        src={Team3}
                        className="attachment-petermason-thumb-square size-petermason-thumb-square wp-post-image"
                        alt="Rebecca Ogle"
                        loading="lazy"
                        width={400}
                        height={400}
                      />
                      <div className="mask" />
                      <div className="icons">
                        <a
                          href="/team/rebecca-ogle/"
                          aria-hidden="true"
                          className="icon_plus"
                        >
                          +
                        </a>
                      </div>
                    </div>
                    <div className="sc_team_item_info">
                      <div className="sc_team_item_header">
                        <div className="sc_team_item_subtitle">
                        <Trans i18nKey="tailor">
                            <span>{t("tailor")}</span>
                          </Trans>
                        </div>
                        <h4 className="sc_team_item_title">
                          <a href="/team/rebecca-ogle/">Rebecca Ogle</a>
                        </h4>
                      </div>
                      <div className="sc_team_item_content">
                        <p>
                          Duis quis augue diam. Suspendisse in vulputate ante.
                          Aenean vulputate eros nisl, in fringilla massa pretium
                          a. Nulla auctor urna sit amet tortor vestibulum
                          fringilla. Sed posuere lorem id lacus facilisis, sed
                          mattis dolor dignissim. Cras nec tempus lacus, vitae
                          finibus tortor. Quisque rhoncus dui nec metus tempus
                          commodo. Praesent id pulvinar mi, ac dictum ipsum.
                          Fusce sem felis, vehicula???
                        </p>
                      </div>
                      <div className="sc_team_item_socials">
                        <span className="social_item">
                          <a
                            href="https://business.facebook.com/ThemeRexStudio/"
                            target="_blank"
                            className="social_icons social_facebook"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-facebook" />
                          </a>
                        </span>
                        <span className="social_item">
                          <a
                            href="https://twitter.com/ThemerexThemes"
                            target="_blank"
                            className="social_icons social_twitter"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-twitter" />
                          </a>
                        </span>
                        <span className="social_item">
                          <a
                            href="https://www.instagram.com/themerex_net/"
                            target="_blank"
                            className="social_icons social_instagram"
                            rel="noreferrer"
                          >
                            <span className="trx_addons_icon-instagram" />
                          </a>
                        </span>
                      </div>
                      <div className="sc_team_item_button">
                        <a
                          href="/team/rebecca-ogle/"
                          className="sc_button sc_button_simple"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.sc_team */}
            <div
              className="vc_empty_space height_tiny"
              style={{ height: "0px" }}
            >
              <span className="vc_empty_space_inner" />
            </div>
            <div
              className="vc_empty_space height_small"
              style={{ height: "0px" }}
            >
              <span className="vc_empty_space_inner" />
            </div>
            <div
              className="vc_empty_space height_small"
              style={{ height: "0px" }}
            >
              <span className="vc_empty_space_inner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TailorMemo = (props: ITailor) => {
  return <Tailor width={props.width} contentWidth={props.contentWidth} />;
};

export default React.memo(TailorMemo);
