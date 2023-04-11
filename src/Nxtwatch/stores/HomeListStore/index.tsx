import { action, observable } from "mobx";

import { ApiStatus, VideosList } from "../../interface";
import { CallHomeApi, fixtureHomeApiCall } from "../../services/index.api";

class HomeList {
  @observable HomeList: VideosList[] = [];
  @observable ApiStatus: ApiStatus = ApiStatus.loading;
  HomeListContainer: VideosList[] = [];

  @action.bound
  fetchHomeData = async (input: string) => {
    try {
      const Response = await CallHomeApi(input);
      this.ApiStatus = Response.ApiStatus;
      if (Response.data !== "none") {
        this.HomeList = Response.data.videos;
        this.HomeListContainer = Response.data.videos;
      }
    } catch (e) {
      this.ApiStatus = ApiStatus.failure;
    }
  };

  @action.bound
  fetchFixtureList = () => {
    const response = fixtureHomeApiCall();
    this.HomeList = response;
    this.ApiStatus = ApiStatus.success;
  };

  @action.bound
  filterList = (list: VideosList[]) => {
    this.HomeList = [...list];
  };
}

export default HomeList;
