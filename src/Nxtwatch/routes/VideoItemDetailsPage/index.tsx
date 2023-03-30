import { useEffect, useState } from "react";

import LoadingWrapper from "../../../Common/components/LoadingWrapper";

import { CallVideoApi } from "../../services/index.api";

import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import VideoDetail from "../../components/videoDetailUi";
import { ApiStatus, OfVideoDetails, Props } from "../../interface";
import { saveList } from "../../stores";

import {
  SideContentContainer,
  VideoDetailContainer,
  VideoLoaderContainer,
} from "../../styledComponent";

const VideoItemDetailsRoute = (props: Props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  const [videoDetails, setVideoDetails] = useState<OfVideoDetails>();
  const [apiStatus, setApiStatus] = useState(ApiStatus.loading);

  useEffect(() => {
    const fetchData = async () => {
      const Response = await CallVideoApi(id);

      if (Response.data !== "none") {
        setVideoDetails(Response.data.video_details);
        setApiStatus(Response.ApiStatus);
      } else {
        setApiStatus(Response.ApiStatus);
      }
    };
    fetchData();
  }, [id]);

  const index = saveList.SavedVideoList.findIndex((ele) => ele.id === id);

  const renderVideoList = () => {
    return <VideoDetail videoDetails={videoDetails} index={index} />;
  };

  return (
    <>
      <SideContentContainer>
        <VideoDetailContainer>
          <LoadingWrapper
            css={VideoLoaderContainer}
            type="video"
            apiStatus={apiStatus}
            renderSuccessUi={renderVideoList}
          />
        </VideoDetailContainer>
      </SideContentContainer>
    </>
  );
};
export default WithHeader(WithSideBar(VideoItemDetailsRoute));
