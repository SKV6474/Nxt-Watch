import React from "react";

import { TrendingOrSaved } from "../../../Nxtwatch/interface";
import { TrendingSavedUIContainer } from "../../../Nxtwatch/styledComponent";

import VideoDescriptionCard from "./videoDescriptionCard";

// props will be list of object for both saved and trending

const TrendingSavedUI = (props: { DataList: TrendingOrSaved[] }) => {
  const { DataList } = props;

  const CardVideoList = DataList.map((ele) => (
    <VideoDescriptionCard key={ele.id} Data={ele} />
  ));

  return <TrendingSavedUIContainer>{CardVideoList}</TrendingSavedUIContainer>;
};

export default TrendingSavedUI;
