import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Team1 from "../../static/image/team-1.webp";
import Team2 from "../../static/image/team-2.webp";
import Team3 from "../../static/image/team-3.webp";

const Team = () => {
  const location = useLocation();
  return (
    <>
      <Header
        children={<BreadCrumb text="All Team Members" />}
        pathname={location.pathname}
      />
      <div className="page_content_wrap scheme_default">
        <div className="content_wrap">
          <div className="content">
            <div className="sc_team sc_team_default">
              <div className="sc_team_columns_wrap trx_addons_columns_wrap">
                <div className="trx_addons_column-1_2">
                  <div className="sc_team_item">
                    <div className="post_featured with_thumb hover_icon sc_team_item_thumb">
                      <img
                        src={Team1}
                        className="attachment-petermason-thumb-square size-petermason-thumb-square wp-post-image"
                        alt="Peter Mason"
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
                          Master Tailor
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
                          Fusce sem felis, vehicula…
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
                          href="/team/peter-mason/"
                          className="sc_button sc_button_simple"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trx_addons_column-1_2">
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
                        <div className="sc_team_item_subtitle">Tailor</div>
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
                          Fusce sem felis, vehicula…
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
                            rel="noreferrer"
                            className="social_icons social_twitter"
                          >
                            <span className="trx_addons_icon-twitter" />
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
                <div className="trx_addons_column-1_2">
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
                        <div className="sc_team_item_subtitle">Tailor</div>
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
                          Fusce sem felis, vehicula…
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
              {/* .trx_addons_team_columns_wrap */}
            </div>
            {/* .sc_team */}
          </div>
          {/* </.content> */}
        </div>
        {/* </.content_wrap> */}
      </div>
      <Footer />
    </>
  );
};

export default Team;
