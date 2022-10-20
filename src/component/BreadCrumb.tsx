import React from "react";
import { Trans, useTranslation } from "react-i18next";

export interface IBreadCrumb {
  text: string;
  href1?: string;
  href2?: string;
  text1?: string;
  text2?: string;
}

const BreadCrumb = (props: IBreadCrumb) => {
  const { t } = useTranslation();
  return (
    <div className="vc_row wpb_row vc_row-fluid sc_layouts_row sc_layouts_row_type_normal sc_layouts_hide_on_frontpage">
      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column sc_layouts_column_align_center sc_layouts_column_icons_position_left">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="vc_empty_space" style={{ height: "4.9rem" }}>
              <span className="vc_empty_space_inner" />
            </div>
            <div className="sc_layouts_item">
              <div
                id="sc_layouts_title_1418826751"
                className="sc_layouts_title"
              >
                <div className="sc_layouts_title_title">
                  <h1 className="sc_layouts_title_caption">
                    <Trans i18nKey={props.text}>
                      <span>{t(props.text)}</span>
                    </Trans>
                  </h1>
                </div>
                <div className="sc_layouts_title_breadcrumbs">
                  <div className="breadcrumbs">
                    <a className="breadcrumbs_item home" href="/">
                      <Trans i18nKey="header.home">
                        <span>{t("header.home")}</span>
                      </Trans>
                    </a>
                    <span className="breadcrumbs_delimiter"></span>
                    {props.text1 && (
                      <>
                        <a href={props.href1}>
                          <Trans i18nKey={props.text1}>
                            <span>{t(props.text1)}</span>
                          </Trans>
                        </a>
                        <span className="breadcrumbs_delimiter"></span>
                      </>
                    )}
                    {props.text2 && (
                      <>
                        <a href={props.href2}>
                          <Trans i18nKey={props.text2}>
                            <span>{t(props.text2)}</span>
                          </Trans>
                        </a>
                        <span className="breadcrumbs_delimiter"></span>
                      </>
                    )}

                    <span className="breadcrumbs_item current">
                      <Trans i18nKey={props.text}>
                        <span>{t(props.text)}</span>
                      </Trans>
                    </span>
                  </div>
                </div>
                <div className="sc_layouts_title_breadcrumbs" />
              </div>
              {/* /.sc_layouts_title */}
            </div>
            <div className="vc_empty_space">
              <span className="vc_empty_space_inner"></span>
            </div>
            <div className="vc_empty_space" style={{ height: "3.25rem" }}>
              <span className="vc_empty_space_inner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
