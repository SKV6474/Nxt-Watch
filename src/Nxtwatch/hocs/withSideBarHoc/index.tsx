import React from "react";
import { withTranslation } from "react-i18next";
import SplitPane from "react-split-pane";

import Link from "../../components/Links";
import {
  FACEBOOK_LOGO,
  LINKED_IN_LOGO,
  TWITTER_LOGO,
} from "../../constants/Images";

import {
  SideBarDiv,
  ContactSupport,
  ContactImg,
  ContactContainer,
  ContactDescription,
} from "../../styledComponent";

import "./index.css";
import { getFromLocalStorage, sendToLocalStorage } from "../../utils";

const WithSideBar = (
  WrappedComponent: React.ComponentType<any>
): React.ComponentType<any> => {
  const SideBar = (props: any) => {
    const { t } = props;
    let width = getFromLocalStorage("SplitPane");
    if (width === undefined) {
      width = 230;
    }

    return (
      //@ts-ignore
      <SplitPane
        className="splitPane"
        split="vertical"
        minSize={185}
        defaultSize={width}
        maxSize={475}
        onChange={(size: number) => {
          sendToLocalStorage("SplitPane", size);
        }}
      >
        <SideBarDiv>
          <div>
            <Link />
          </div>
          <ContactSupport>
            <div>
              <b style={{ fontSize: "18px" }}>{t("CONTACT US")}</b>
            </div>
            <ContactContainer>
              <ContactImg src={FACEBOOK_LOGO} alt="Facebook"></ContactImg>
              <ContactImg
                style={{ margin: "0 15px" }}
                src={TWITTER_LOGO}
                alt="Twitter"
              ></ContactImg>
              <ContactImg src={LINKED_IN_LOGO} alt="linked in"></ContactImg>
            </ContactContainer>
            <ContactDescription>
              {t("Enjoy! Now to see your channels and recommendations!")}
            </ContactDescription>
          </ContactSupport>
        </SideBarDiv>
        <WrappedComponent {...props} />
      </SplitPane>
    );
  };
  return withTranslation()(SideBar);
};

export default WithSideBar;
