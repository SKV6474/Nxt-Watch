import React from "react";
import { useTranslation } from "react-i18next";

import { TrendingOrSaved } from "../../../../Nxtwatch/interface";
import { getTime } from "../../../../Nxtwatch/utils";

import {
  CardContainer,
  ChannelProfile,
  ChennelInfo,
  Dot,
  DotUpper,
  ThumnUrlImg,
  ToHideProfile,
  VideoCardData,
  VideoLink,
  VideoTitleStyle,
  ViewsandTime,
} from "../../../../Nxtwatch/styledComponent";

const VideoDescriptionCard = (props: { Data: TrendingOrSaved }) => {
  const { t } = useTranslation();
  const { Data } = props;
  const { id, thumbnail_url, channel, title, view_count, published_at } = Data;
  const { name, profile_image_url } = channel;

  return (
    <VideoLink to={`/videos/${id}`}>
      <CardContainer>
        <ThumnUrlImg src={thumbnail_url} alt="thumbUrl"></ThumnUrlImg>
        <ChennelInfo>
          <ToHideProfile>
            <ChannelProfile src={profile_image_url}></ChannelProfile>
          </ToHideProfile>
          <div>
            <VideoTitleStyle>{title}</VideoTitleStyle>
            <VideoCardData>
              <div>{name}</div>
              <DotUpper>
                <Dot />
              </DotUpper>
              <ViewsandTime>
                {`${view_count}`} {t("views")}
                <Dot />
                {`${getTime(published_at)}`} {t("years ago")}
              </ViewsandTime>
            </VideoCardData>
          </div>
        </ChennelInfo>
      </CardContainer>
    </VideoLink>
  );
};

export default VideoDescriptionCard;
