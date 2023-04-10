import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { initReactI18next, useTranslation } from "react-i18next";

import i18n from "../../../Common/components/i18n";
import LoadingWrapper from "../../../Common/components/LoadingWrapper";

import WithHeader from "../../hocs/withHeaderHoc";
import WithSideBar from "../../hocs/withSideBarHoc";

import HomeBanner from "../../components/HomeBanner";
import VideoCard from "../../components/HomeVideoLinkCard";
import NoSearchResults from "../../components/NoSearchsResults";
import FilterList from "../../../Common/components/Filter";

import { VideosList } from "../../interface";
import { homeList } from "../../stores";
import { getFromLocalStorage, sendToLocalStorage } from "../../utils";

import {
  SearchVideoListContainer,
  SearchBar,
  SearchInput,
  SearchImg,
  AllCardContainer,
  SideContentContainer,
  SearchImageContainer,
  HomeLoaderContianer,
} from "../../styledComponent";

initReactI18next.init(i18n);

const HomeRoute = observer(() => {
  const { t } = useTranslation();
  const videoList = homeList.HomeList;

  let bannerStatus = getFromLocalStorage("Banner");
  if (bannerStatus === null) {
    bannerStatus = false;
  }
  const [isBannerClose, setIsBannerClose] = useState(bannerStatus);

  const FilterdList = (list: any) => {
    homeList.filterList(list);
  };

  const handleRemoveBanner = () => {
    setIsBannerClose(true);
    sendToLocalStorage("Banner", true);
  };

  useEffect(() => {
    if (homeList.ApiStatus !== "success") {
      homeList.fetchHomeData("");
    }
  }, []);

  const handleSearchFetch = () => {
    const input: string = (
      document.getElementById("SearchInput") as HTMLInputElement
    ).value;
    homeList.fetchHomeData(input);
  };

  const handleRetrySearch = () => {
    (document.getElementById("SearchInput") as HTMLInputElement).value = "";
    (document.getElementById("SearchInput") as HTMLInputElement).focus();
  };

  let VideoList: JSX.Element[];
  if (videoList.length > 0) {
    VideoList = videoList.map((ele: VideosList) => (
      <VideoCard key={ele.id} object={ele} />
    ));
  }

  const handleSearchEvent = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleSearchFetch();
    }
  };

  const renderHomeList = () => {
    return <AllCardContainer>{VideoList}</AllCardContainer>;
  };

  return (
    <SideContentContainer>
      {!isBannerClose && <HomeBanner handleCloseEvent={handleRemoveBanner} />}
      <SearchVideoListContainer
        style={{
          height: !isBannerClose ? "calc(100% - 305px)" : "calc(100% - 78px)",
        }}
      >
        <SearchBar>
          <SearchImageContainer>
            <SearchInput
              type="search"
              placeholder={t("search") + ""}
              id="SearchInput"
              onKeyUp={handleSearchEvent}
            />
            <SearchImg
              onClick={handleSearchFetch}
              className="fa-solid fa-magnifying-glass"
            ></SearchImg>
          </SearchImageContainer>
          <FilterList
            List={homeList.HomeListContainer}
            onAction={FilterdList}
            isDisabled={false}
            type="HomeFilter"
          />
        </SearchBar>
        <LoadingWrapper
          css={HomeLoaderContianer}
          type="home"
          apiStatus={homeList.ApiStatus}
          renderSuccessUi={renderHomeList}
        ></LoadingWrapper>
        {videoList.length === 0 && homeList.ApiStatus === "success" && (
          <NoSearchResults onChange={handleRetrySearch} />
        )}
      </SearchVideoListContainer>
    </SideContentContainer>
  );
});

export default WithHeader(WithSideBar(HomeRoute));
