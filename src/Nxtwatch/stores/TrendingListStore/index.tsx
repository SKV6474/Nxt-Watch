import { action, observable } from "mobx";

import { ApiStatus, TrendingOrSaved } from "../../interface";
import {
  CallTrendingApi,
  fixtureTrendingApiCall,
} from "../../services/index.api";

class TrendingList {
  @observable TrendingList: TrendingOrSaved[] = [];
  @observable ApiStatus: ApiStatus = ApiStatus.loading;
  TrendingListContainer: TrendingOrSaved[] = [];

  @action.bound
  fetchTrendingData = async () => {
    try {
      const Response = await CallTrendingApi();

      this.ApiStatus = Response.ApiStatus;
      if (Response.data !== "none") {
        this.TrendingList = Response.data.videos;
        this.TrendingListContainer = Response.data.videos;
      }
    } catch (e) {
      this.ApiStatus = ApiStatus.failure;
    }
  };

  @action.bound
  fetchFixtureList = () => {
    const response = fixtureTrendingApiCall();
    this.TrendingList = response;
    this.ApiStatus = ApiStatus.success;
  };

  @action.bound
  filterList = (list: TrendingOrSaved[]) => {
    this.TrendingList = [...list];
  };
}

export default TrendingList;
