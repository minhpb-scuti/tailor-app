import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Team1 from "../../static/image/team-1-custom.jpg";

const PerterMason = () => {
  const location = useLocation();
  return (
    <div className="scheme_default">
      <Header
        children={
          <BreadCrumb
            text1="All Team Members"
            text="Peter Mason"
            href1="/team"
          />
        }
        pathname={location.pathname}
      />
      <div className="page_content_wrap scheme_default">
        <div className="content_wrap">
          <div className="content">
            <article
              id="post-189"
              className="team_member_page itemscope post-189 cpt_team type-cpt_team status-publish has-post-thumbnail hentry"
              itemScope
              itemType="http://schema.org/Article"
            >
              <section className="team_member_header">
                <div className="team_member_featured">
                  <div className="team_member_avatar">
                    <img
                      src={Team1}
                      className="attachment-petermason-thumb-big size-petermason-thumb-big wp-post-image"
                      alt="Peter Mason"
                      width={740}
                      height={416}
                    />
                  </div>
                  <div className="team_member_socials">
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
                </div>
                <div className="team_member_description">
                  <h2 className="team_member_title">Peter Mason</h2>
                  <h6 className="team_member_position">Master Tailor</h6>
                  <div className="team_member_details">
                    <div className="team_member_details_email">
                      <span className="team_member_details_label">
                        E-mail:{" "}
                      </span>
                      <span className="team_member_details_value">
                        <a href="mailto:name@example.com">name@example.com</a>
                      </span>
                    </div>
                  </div>
                  <div className="team_member_brief_info">
                    <h5 className="team_member_brief_info_title">Brief info</h5>
                    <div className="team_member_brief_info_text">
                      <p>
                        Duis diam arcu, feugiat a diam id, facilisis viverra
                        lectus. Curabitur suscipit odio lorem, accumsan auctor
                        sapien gravida sit amet. Cras nec dictum urna, rhoncus
                        ullamcorper ligula. Maecenas tristique purus nulla,
                        tempus imperdiet ante placerat quis.
                        <br />
                        Munere aliquando ne vim. Est doming reprehendunt cu.
                        Democritum vituperata dissentias cu mea, ex posse.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="team_member_content entry-content"
                itemProp="articleBody"
              >
                <p>
                  Duis quis augue diam. Suspendisse in vulputate ante. Aenean
                  vulputate eros nisl, in fringilla massa pretium a. Nulla
                  auctor urna sit amet tortor vestibulum fringilla. Sed posuere
                  lorem id lacus facilisis, sed mattis dolor dignissim. Cras nec
                  tempus lacus, vitae finibus tortor. Quisque rhoncus dui nec
                  metus tempus commodo. Praesent id pulvinar mi, ac dictum
                  ipsum. Fusce sem felis, vehicula et tellus ac, faucibus
                  fringilla quam. Aliquam ac nisi molestie, congue diam in,
                  feugiat augue. Cras eu mollis orci. In eleifend posuere felis,
                  eu dictum est maximus ut. Aliquam tincidunt nunc nunc, vitae
                  rutrum urna congue sed. Fusce a magna porta, maximus magna
                  vel, euismod tortor.
                </p>
                <p>
                  Sed nec ex magna. Curabitur vitae sagittis orci. Donec ex
                  sapien, sodales eget lobortis at, posuere vehicula dui.
                  Pellentesque eget nisi volutpat erat condimentum rhoncus sit
                  amet nec nulla. Ut neque sem, aliquet nec luctus vitae,
                  aliquet sit amet orci. Curabitur sit amet accumsan arcu.
                  Maecenas lacus neque, elementum ut tincidunt in, malesuada
                  quis ligula. Phasellus quis dignissim nisi. Etiam eu lacinia
                  erat. Nam leo magna, lacinia et risus nec, scelerisque porta
                  nisi.
                </p>
              </section>
              {/* .entry-content */}
            </article>
          </div>
          {/* </.content> */}
        </div>
        {/* </.content_wrap> */}
      </div>

      <Footer />
    </div>
  );
};

export default PerterMason;
