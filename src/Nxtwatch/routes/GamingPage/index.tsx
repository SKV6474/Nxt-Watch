import { useEffect } from "react";
import { observer } from "mobx-react";

import SideBarHeader from "../../../Common/components/sideBarHeader";
import LoadingWrapper from "../../../Common/components/LoadingWrapper";
import FilterList from "../../../Common/components/Filter";

import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import GamingCard from "../../components/GamingCard";

import { gameList } from "../../stores";

import {
  FilterListWrapper,
  GameRouteContainer,
  SideContentContainer,
} from "../../styledComponent";

const GamingRoute = observer(() => {
  const gamingList = gameList.GamingList;

  useEffect(() => {
    if (gameList.ApiStatus !== "success") {
      console.log("Gaming Route");
      gameList.fetchGameData();
    }
  }, []);

  let GamingCardList: JSX.Element[];

  if (gamingList.length !== 0) {
    GamingCardList = gamingList?.map((ele) => (
      <GamingCard key={ele.id} GameData={ele} />
    ));
  }

  const FilterdList = (list: any) => {
    gameList.filterList(list);
  };

  const renderGamingList = () => {
    return (
      <>
        <SideBarHeader type="gaming" />
        <FilterListWrapper>
          <FilterList
            List={gameList.GamingListContainer}
            onAction={FilterdList}
            isDisabled={true}
            type="GamingFilter"
          />
        </FilterListWrapper>
        <GameRouteContainer>{GamingCardList}</GameRouteContainer>
      </>
    );
  };

  return (
    <>
      <SideContentContainer>
        <LoadingWrapper
          css=""
          type="gaming"
          apiStatus={gameList.ApiStatus}
          renderSuccessUi={renderGamingList}
        ></LoadingWrapper>
      </SideContentContainer>
    </>
  );
});

export default WithHeader(WithSideBar(GamingRoute));
