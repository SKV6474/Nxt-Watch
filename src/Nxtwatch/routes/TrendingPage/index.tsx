import { useEffect } from "react";
import { observer } from "mobx-react";

import SideBarHeader from "../../../Common/components/sideBarHeader";
import TrendingSavedUI from "../../../Common/components/trendingSavedUI";
import LoadingWrapper from "../../../Common/components/LoadingWrapper";

import WithHeader from "../../hocs/withHeaderHoc/index";
import WithSideBar from "../../hocs/withSideBarHoc/index";

import { trendingList } from "../../stores";

import { FilterListWrapper, SideContentContainer } from "../../styledComponent";
import FilterList from "../../../Common/components/Filter";

const TrendingRoute = observer(() => {
  const trendList = trendingList.TrendingList;

  useEffect(() => {
    if (trendingList.ApiStatus !== "success") {
      console.log(" Trending Route");
      trendingList.fetchTrendingData();
    }
  }, []);

  const FilterdList = (list: any) => {
    trendingList.filterList(list);
  };

  const renderTrendingList = () => {
    return (
      <>
        <SideBarHeader type="trending" />
        <FilterListWrapper>
          <FilterList
            List={trendingList.TrendingListContainer}
            onAction={FilterdList}
            isDisabled={false}
            type="TrendingFilter"
          />
        </FilterListWrapper>
        <TrendingSavedUI DataList={trendList} />
      </>
    );
  };

  return (
    <>
      <SideContentContainer>
        <LoadingWrapper
          css=""
          type="trending"
          apiStatus={trendingList.ApiStatus}
          renderSuccessUi={renderTrendingList}
        ></LoadingWrapper>
      </SideContentContainer>
    </>
  );
});
export default WithHeader(WithSideBar(TrendingRoute));
