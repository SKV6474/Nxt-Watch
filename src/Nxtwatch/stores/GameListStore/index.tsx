import { action, observable } from "mobx";

import { CallGameApi } from "../../services/index.api";
import { ApiStatus, GameObject } from "../../interface";
class GameList {
  @observable GamingList: GameObject[] = [];
  @observable ApiStatus: ApiStatus = ApiStatus.loading;
  GamingListContainer: GameObject[] = [];

  @action.bound
  fetchGameData = async () => {
    try {
      const Response = await CallGameApi();

      this.ApiStatus = Response.ApiStatus;
      if (Response.data !== "none") {
        this.GamingList = Response.data.videos;
        this.GamingListContainer = Response.data.videos;
      }
    } catch (e) {
      this.ApiStatus = ApiStatus.failure;
    }
  };

  @action.bound
  filterList = (list: GameObject[]) => {
    this.GamingList = [...list];
  };
}

export default GameList;
