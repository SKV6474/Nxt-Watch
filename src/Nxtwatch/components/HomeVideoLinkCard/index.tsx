import React from "react";
import { useTranslation } from "react-i18next";

import { VideosList } from "../../interface";
import { getTime } from "../../utils";

import {
  ThumbUrl,
  ChannelProfileContainer,
  ChannelProfile,
  VideoDataContainer,
  DataContainer,
  Card,
  Dot,
  VideoLink,
} from "../../styledComponent";

const VideoCard = (props: { object: VideosList }) => {
  const { t } = useTranslation();
  const { object } = props;
  const { id, published_at, channel, thumbnail_url, title, view_count } =
    object;
  const { name, profile_image_url } = channel;

  const timeline = getTime(published_at);

  return (
    <VideoLink to={`/videos/${id}`}>
      <Card>
        <ThumbUrl src={thumbnail_url} alt="thumbanil"></ThumbUrl>
        <VideoDataContainer>
          <ChannelProfileContainer>
            <ChannelProfile
              src={profile_image_url}
              alt="channel"
            ></ChannelProfile>
          </ChannelProfileContainer>
          <div>
            <div>{title}</div>
            <DataContainer>{name}</DataContainer>
            <DataContainer>
              {`${view_count}`} {t("views")} <Dot /> {`${timeline}`}{" "}
              {t("years ago")}
            </DataContainer>
          </div>
        </VideoDataContainer>
      </Card>
    </VideoLink>
  );
};

export default VideoCard;
