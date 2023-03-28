import { withTranslation } from "react-i18next";

import { SideHeaderBarProps } from "../../../Nxtwatch/interface";

import {
  SubHeaderContainer,
  SubHeaderIconContainer,
} from "../../../Nxtwatch/styledComponent";

const SideBarHeader = (props: SideHeaderBarProps) => {
  const { type, t } = props;

  const SubHeader = [
    { type: "trending", icon: "fa-solid fa-fire", title: t("Trending") },
    { type: "gaming", icon: "fa-solid fa-gamepad", title: t("Gaming") },
    {
      type: "saved-videos",
      icon: "fa-sharp fa-solid fa-bookmark",
      title: t("Saved videos"),
    },
  ];

  let index = SubHeader.findIndex((ele) => ele.type === type);

  return (
    <SubHeaderContainer>
      <SubHeaderIconContainer>
        <i className={SubHeader[index].icon}></i>
      </SubHeaderIconContainer>
      {SubHeader[index].title}
    </SubHeaderContainer>
  );
};

export default withTranslation()(SideBarHeader);
